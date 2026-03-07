import { useEffect, useState } from 'react';
import Select from 'react-select';
import FilterBar from '../../components/ui/FilterBar';
import PageContainer from '../../components/ui/PageContainer';
import FilterLabel from '../../components/ui/FilterLabel';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { characterName } from '../../shared/helpers/util';
import RawSets from '../../data/json/set_items.json';
import { selectTheme, selectStyles } from '../../shared/reactSelectTheme';
import SetTable from './SetTable';
import type { SelectOption, SetData } from '../../types';

const Sets = RawSets as SetData[];

const optionValue = (value: string, list: SelectOption[]): SelectOption | null =>
  list.find((el) => el.value === value) ?? null;

const sortedSets: SetData[] = Sets.map((set) => set.name)
  .sort()
  .map((setName) => Sets.find((set) => set.name === setName))
  .filter((set): set is SetData => Boolean(set));

const SetsOptions: SelectOption[] = [
  { value: '', label: 'Selecciona un set' },
  ...sortedSets.map((set) => ({ value: set.id, label: set.name })),
];

const formatOptionLabel = ({ value, label }: SelectOption) => {
  const set = Sets.find((aSet) => aSet.id === value) || { isCharacterSet: false };

  return (
    <div className="flex flex-row items-center gap-2">
      <span className="option-name">{label}</span>
      {set.isCharacterSet && (
        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
          Para {characterName(set.character || '')}
        </span>
      )}
    </div>
  );
};

const SetObjects = () => {
  const [selectableOptions, updateSelectableOptions] = useState<SelectOption[]>(SetsOptions);
  const [selectedSet, updateSelectedSet] = useState('');
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setDisplayTable(true), 0);
  }, []);

  const updateSelectedOption = (selectedOption: SelectOption | null) => {
    if (selectableOptions[0]?.value === '') {
      updateSelectableOptions(selectableOptions.slice(1));
    }

    updateSelectedSet(selectedOption?.value ?? '');
  };

  return (
    <PageContainer>
      <FilterBar>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:flex-[2] md:min-w-[200px]">
            <FilterLabel>Nombre del Set</FilterLabel>
            <Select<SelectOption>
              theme={selectTheme}
              formatOptionLabel={formatOptionLabel}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(selectedSet, SetsOptions)}
              onChange={updateSelectedOption}
              options={selectableOptions}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
        </div>
      </FilterBar>
      {displayTable ? (
        <SetTable setId={selectedSet} />
      ) : (
        <LoadingSpinner />
      )}
    </PageContainer>
  );
};

export default SetObjects;
