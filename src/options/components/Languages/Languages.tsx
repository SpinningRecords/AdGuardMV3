import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { rootStore } from 'Options/stores';
import { CheckboxOption } from 'Options/components/CheckboxOption';
import { Category } from 'Options/components/Category';
import { translator } from 'Common/translators/translator';
import { FiltersGroupId } from 'Common/constants';

export const Languages = observer(() => {
    const {
        settingsStore,
    } = useContext(rootStore);

    const {
        filters,
        disableFilter,
        enableFilter,
    } = settingsStore;

    const onChange = async (filter: Filter) => {
        if (filter.enabled) {
            await disableFilter(filter.id);
        } else {
            await enableFilter(filter.id);
        }
    };

    const languagesFilters = filters.filter((filter: Filter) => (
        filter.groupId === FiltersGroupId.LANGUAGES
        || filter.groupId === FiltersGroupId.INTEGRATED));

    return (
        <Category
            navLink="/"
            headerName={translator.getMessage('options_languages_option')}
            headerDesc={translator.getMessage('options_languages_option_header_desc')}
        >
            <>
                <CheckboxOption
                    integrated
                    key="english_integrated"
                    id="english_integrated"
                    messageKey="options_languages_english"
                />
                {languagesFilters.map((filter) => (
                    <CheckboxOption
                        integrated={filter.groupId === FiltersGroupId.INTEGRATED}
                        key={filter.id}
                        id={filter.id.toString()}
                        message={filter.title}
                        checked={filter.enabled}
                        onChange={() => { onChange(filter); }}
                    />
                ))}
            </>
        </Category>
    );
});
