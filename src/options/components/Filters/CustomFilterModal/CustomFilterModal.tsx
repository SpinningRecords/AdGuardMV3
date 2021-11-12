/* eslint-disable @typescript-eslint/no-shadow */
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { observer } from 'mobx-react';

import { log } from 'Common/logger';
import { translator } from 'Common/translators/translator';
import { Icon, ICON_ID } from 'Common/components/ui';
import { rootStore } from 'Options/stores';
import { STEPS } from 'Options/stores/CustomFilterModalStore';
import { AddCustomFilter } from 'Options/components/Filters/CustomFilterModal/AddCustomFilter';
import { AddCustomFilterConfirm } from 'Options/components/Filters/CustomFilterModal/AddCustomFilterConfirm';
import { RemoveCustomFilter } from 'Options/components/Filters/CustomFilterModal/RemoveCustomFilter';

import s from './CustomFilterModal.module.pcss';

Modal.setAppElement('#root');

type CustomFilterModalProps = {
    isOpen: boolean,
    closeHandler: (e: React.MouseEvent) => void,
    urlToSubscribe: string,
    initialTitle: string | null,
};

export const CustomFilterModal = observer(({
    isOpen,
    closeHandler,
    urlToSubscribe,
    initialTitle,
}: CustomFilterModalProps) => {
    const {
        settingsStore,
        customFilterModalStore,
        uiStore,
    } = useContext(rootStore);

    const {
        filterIdInModal,
        currentStep,
        switchToAddCustomFilterConfirmStep,
    } = customFilterModalStore;

    const [filterInfo, setFilterInfo] = useState<FilterInfo | null>(null);

    const [filterContent, setFilterContent] = useState<string | null>(null);

    const [filterTitle, setFilterTitle] = useState(filterInfo?.title || '');

    const [addCustomFilterError, setAddCustomFilterError] = useState(false);

    const onCancelAddCustomModal = (e: React.MouseEvent) => {
        closeHandler(e);
    };

    const onSaveCustomFilter = async (e: React.MouseEvent) => {
        if (filterContent && filterInfo) {
            try {
                await settingsStore.addCustomFilterByContent(filterContent, filterTitle);
                uiStore.addNotification(translator.getMessage('options_custom_filter_add_notification', { name: filterTitle }));
            } catch (e) {
                log.error(e);
            }
        } else {
            throw new Error('Save custom modal requires url or filter content');
        }
        closeHandler(e);
    };

    const onRemoveCustomFilter = async () => {
        if (filterIdInModal) {
            await settingsStore.removeCustomFilterById(filterIdInModal);
        } else {
            throw new Error('Provide filter id in order to remove filter');
        }
    };

    const onAddCustomFilterError = (error: string | boolean) => {
        if (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            setAddCustomFilterError(true);
        } else {
            setAddCustomFilterError(false);
        }
    };

    const onAddCustomFilterSuccess = (filterInfo: FilterInfo, filterContent: string) => {
        setFilterInfo(filterInfo);
        setFilterTitle(filterInfo.title);
        // save filter content for next steps
        setFilterContent(filterContent);
        switchToAddCustomFilterConfirmStep();
    };

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterTitle(value);
    };

    let filter: Filter | null;

    useEffect(() => {
        if (filterIdInModal) {
            filter = settingsStore.getFilterById(filterIdInModal);

            if (!filter) {
                throw new Error('Filter should be found');
            }

            setFilterTitle(filter.title);
        }
    }, [filterIdInModal]);

    const onSaveTitle = async () => {
        if (filterIdInModal) {
            await settingsStore.updateFilterTitle(filterIdInModal, filterTitle);
        } else {
            throw new Error('Filter should be found');
        }
    };

    const stepsMap = {
        [STEPS.ADD_CUSTOM_FILTER]: {
            icon: addCustomFilterError ? ICON_ID.WARNING : null,
            title: addCustomFilterError ? translator.getMessage('options_custom_filter_modal_retry_title') : translator.getMessage('options_custom_filter_modal_add_title'),
            component: () => (
                <AddCustomFilter
                    initialTitle={initialTitle}
                    urlToSubscribe={urlToSubscribe}
                    addCustomFilterError={addCustomFilterError}
                    onError={onAddCustomFilterError}
                    onSuccess={onAddCustomFilterSuccess}
                />
            ),
        },
        [STEPS.ADD_CUSTOM_FILTER_CONFIRM]: {
            icon: null,
            title: filterTitle,
            component: () => (
                <AddCustomFilterConfirm
                    title={filterTitle}
                    description={filterInfo?.description || ''}
                    onCancel={onCancelAddCustomModal}
                    onSave={onSaveCustomFilter}
                />
            ),
        },
        [STEPS.REMOVE_CUSTOM_FILTER]: {
            icon: null,
            title: translator.getMessage('options_custom_filter_modal_add_title'),
            component: () => {
                if (filterIdInModal) {
                    return (
                        <RemoveCustomFilter
                            title={filterTitle}
                            description={filter?.description || ''}
                            onChange={onChangeTitle}
                            onRemove={onRemoveCustomFilter}
                            onSave={onSaveTitle}
                        />
                    );
                }
                return null;
            },
        },
    };

    const step = stepsMap[currentStep];

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeHandler}
            className={s.modal}
            bodyOpenClassName="bodyOpenClassName"
            overlayClassName={{
                base: s.overlay,
                afterOpen: 'overlay--after-open',
                beforeClose: 'overlay--before-close',
            }}
        >
            <div className={s.contentContainer}>
                <div className={s.header}>
                    {step.icon && <Icon className={s.icon} id={step.icon} />}
                    { step.title === filterTitle
                        ? (
                            <input
                                className={s.modalInput}
                                type="text"
                                value={filterTitle}
                                onChange={onChangeTitle}
                            />
                        )
                        : <h1 className={s.heading}>{step.title}</h1>}
                </div>
                <button onClick={closeHandler} className={s.closeIcon} type="button">
                    <Icon id={ICON_ID.CROSS} />
                </button>
                {step.component()}
            </div>
        </Modal>
    );
});