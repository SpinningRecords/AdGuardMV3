import { CosmeticOption } from '@adguard/tsurlfilter';
import { isHttpRequest } from 'Common/helpers';
import { log } from 'Common/logger';
import { SETTINGS_NAMES } from 'Common/settings-constants';
import { tabUtils } from 'Common/tab-utils';
import { engine } from './engine';
import { settings } from './settings';

const getScripts = async (url: string) => {
    return engine.getScriptsStringForUrl(
        url, CosmeticOption.CosmeticOptionAll,
    );
};

const executeScript = async (scripts: string, id: number) => {
    if (scripts.length === 0) {
        return;
    }

    const functionToInject = (script: string) => {
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.textContent = script;

        const parent = document.head || document.documentElement;
        parent.appendChild(scriptTag);
        if (scriptTag.parentNode) {
            scriptTag.parentNode.removeChild(scriptTag);
        }
    };

    chrome.scripting.executeScript({
        target: { tabId: id },
        func: functionToInject,
        // @ts-ignore
        world: 'MAIN', // ISOLATED doesnt allow to execute code inline
        args: [scripts],
    }, () => {
        if (chrome.runtime.lastError) {
            log.debug(chrome.runtime.lastError);
        }
    });
};

/**
 * Get scripts and executing them
 * @param id
 * @param url
 */
const getAndExecuteScripts = async (id: number, url: string) => {
    const filteringEnabled = settings.getSetting(SETTINGS_NAMES.FILTERING_ENABLED);
    const protectionEnabled = settings.getSetting(SETTINGS_NAMES.PROTECTION_ENABLED);
    const NEW_TAB_PAGE = 'new-tab-page'; // the url from the details have http even on the new tab page

    if (filteringEnabled
        && protectionEnabled
        && isHttpRequest(url)
        && !url.includes(NEW_TAB_PAGE)
    ) {
        const response = await getScripts(url);
        await executeScript(response, id);
    }
};

export const executeResources = {
    init: async () => {
        const activeTab = await tabUtils.getActiveTab();

        if (activeTab?.url && activeTab?.id) {
            const { url, id } = activeTab;
            await getAndExecuteScripts(id, url);
        }

        chrome.webNavigation.onCommitted.addListener(
            async (details) => {
                const { tabId, url } = details;
                await getAndExecuteScripts(tabId, url);
            },
        );
    },
};