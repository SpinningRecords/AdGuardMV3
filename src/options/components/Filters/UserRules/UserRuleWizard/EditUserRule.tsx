import React, { useContext } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';

import { reactTranslator } from 'Common/translators/reactTranslator';
import { UserRuleEditor } from 'Options/components/Filters/UserRules/UserRuleWizard/UserRuleEditor';
import { rootStore } from 'Options/stores';
import { theme } from 'Common/styles';

export const EditUserRule = observer(() => {
    const { optionsStore } = useContext(rootStore);

    if (optionsStore.userRuleInWizard === null) {
        throw new Error('userRuleInWizard is required');
    }

    const onChange = (value: string) => {
        optionsStore.updateUserRuleInWizard(value);
    };

    const onDeleteClick = () => {
        optionsStore.deleteUserRuleInWizard();
    };

    // TODO add some validation
    const onSaveClick = () => {
        optionsStore.saveUserRuleInWizard();
    };

    return (
        <>
            <div className={theme.modal.title}>
                {reactTranslator.getMessage('options_user_rule_edit_rule')}
            </div>
            <UserRuleEditor
                ruleText={optionsStore.userRuleInWizard.ruleText}
                onChange={onChange}
            />
            <div className={theme.modal.footer}>
                <button
                    type="button"
                    className={cn(theme.button.middle, theme.button.green, theme.modal.leftBtn)}
                    onClick={onSaveClick}
                >
                    {reactTranslator.getMessage('options_user_rule_save')}
                </button>
                <button
                    type="button"
                    className={cn(theme.button.middle, theme.button.red)}
                    onClick={onDeleteClick}
                >
                    {reactTranslator.getMessage('options_user_rule_delete')}
                </button>
            </div>
        </>
    );
});