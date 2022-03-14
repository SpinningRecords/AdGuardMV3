import { SettingsType } from './settings-constants';

export interface PopupData {
    settings: SettingsType,
    userRules: string,
}

export type CategoriesType = {
    groupId: number,
    groupName: string,
    displayNumber: number,
}[];

export interface OptionsData {
    settings: SettingsType
    filters: Filter[]
    categories: CategoriesType
}

export enum MESSAGE_TYPES {
    GET_OPTIONS_DATA = 'GET_OPTIONS_DATA',
    GET_POPUP_DATA = 'GET_POPUP_DATA',
    GET_CSS = 'GET_CSS',
    OPEN_OPTIONS = 'OPEN_OPTIONS',
    SET_SETTING = 'SET_SETTING',
    REPORT_SITE = 'REPORT_SITE',
    OPEN_ASSISTANT = 'OPEN_ASSISTANT',
    START_ASSISTANT = 'START_ASSISTANT',
    ADD_USER_RULE = 'ADD_USER_RULE',
    RELOAD_ACTIVE_TAB = 'RELOAD_ACTIVE_TAB',
    REMOVE_PROTECTION_PAUSE_TIMER = 'REMOVE_PROTECTION_PAUSE_TIMER',
    SET_PAUSE_EXPIRES = 'SET_PAUSE_EXPIRES',
    ENABLE_FILTER = 'ENABLE_FILTER',
    DISABLE_FILTER = 'DISABLE_FILTER',
    UPDATE_FILTER_TITLE = 'UPDATE_FILTER_TITLE',
    GET_FILTER_INFO_BY_CONTENT = 'GET_FILTER_INFO_BY_CONTENT',
    ADD_CUSTOM_FILTER_BY_CONTENT = 'ADD_CUSTOM_FILTER_BY_CONTENT',
    GET_FILTER_CONTENT_BY_URL = 'GET_FILTER_CONTENT_BY_URL',
    REMOVE_CUSTOM_FILTER_BY_ID = 'REMOVE_CUSTOM_FILTER_BY_ID',
    ADD_FILTERING_SUBSCRIPTION = 'ADD_FILTERING_SUBSCRIPTION',
    GET_USER_RULES = 'GET_USER_RULES',
    SET_USER_RULES = 'SET_USER_RULES',

    ADD_LONG_LIVED_CONNECTION = 'ADD_LONG_LIVED_CONNECTION',
    NOTIFY_LISTENERS = 'NOTIFY_LISTENERS',
}

export type MessageType = keyof typeof MESSAGE_TYPES;

export type Message = {
    type: MessageType;
    data?: any;
};

export enum NOTIFIER_EVENTS {
    SETTING_UPDATED = 'event.setting.updated',
    FILTERING_STATE_UPDATED = 'event.filtering.state.updated',
    ADD_RULES = 'event.add.rules',
    SET_RULES = 'event.set.rules',
}

export const REPORT_SITE_BASE_URL = 'https://reports.adguard.com/new_issue.html';

// TODO add correct url
export const LEARN_MORE_URL = 'https://adguard.com/compare.html';

// TODO add correct url
export const MV3_URL = 'https://developer.chrome.com/docs/extensions/mv3/intro/';

/* GLOBAL FILTERING */
export const MILLISECONDS_IN_SECOND = 10 ** 3;
export const PROTECTION_PAUSE_TIMEOUT_S = 30;
export const PROTECTION_PAUSE_TIMEOUT_TICK_S = 1;
export const PROTECTION_PAUSE_TIMEOUT_MS = PROTECTION_PAUSE_TIMEOUT_S * MILLISECONDS_IN_SECOND;
export const PROTECTION_PAUSE_TIMEOUT_TICK_MS = PROTECTION_PAUSE_TIMEOUT_TICK_S
    * MILLISECONDS_IN_SECOND;

export const NEW_LINE_SEPARATOR = '\n';

/* parameters to subscribing to filters */
export const QUERY_PARAM_NAMES = {
    TITLE: 'title',
    SUBSCRIBE: 'subscribe',
};

export enum UserRuleType {
    SITE_BLOCKED = 'SITE_BLOCKED',
    ELEMENT_BLOCKED = 'ELEMENT_BLOCKED',
    SITE_ALLOWED = 'SITE_ALLOWED',
    CUSTOM = 'CUSTOM',
}

export enum FiltersGroupId {
    CUSTOM = 0,
    INTEGRATED = 2,
    MAIN = 3,
    LANGUAGES = 7,
}

export interface Rules {
    id: number,
    rules: string,
}

export enum RulesetType {
    RULESET_1 = 'ruleset_1',
    RULESET_2 = 'ruleset_2',
    RULESET_3 = 'ruleset_3',
    RULESET_4 = 'ruleset_4',
    RULESET_9 = 'ruleset_9',
    RULESET_14 = 'ruleset_14',
}

export const FILTER_RULESET = {
    USER_RULES: 0,
    [RulesetType.RULESET_1]: 1,
    [RulesetType.RULESET_2]: 2,
    [RulesetType.RULESET_3]: 3,
    [RulesetType.RULESET_4]: 4,
    [RulesetType.RULESET_9]: 9,
    [RulesetType.RULESET_14]: 14,
};

export const RULES_STORAGE_KEY = 'rules';

export const USER_RULES_STORAGE_KEY = 'user_rules';
