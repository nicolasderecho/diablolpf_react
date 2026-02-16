import React, { useState, useEffect } from 'react';
import FilterBar from '../../components/ui/FilterBar';
import PageContainer from '../../components/ui/PageContainer';
import FilterLabel from '../../components/ui/FilterLabel';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { characterName } from '../../shared/helpers/util';
import Sets from '../../data/json/set_items.json';
import Select from 'react-select';
import { selectTheme, selectStyles } from '../../shared/reactSelectTheme';
import SetTable from './SetTable';

const optionValue = (value, list) => list.find((el) => el.value === value);

const sortedSets = Sets.map((set) => set.name)
  .sort()
  .map((setName) => Sets.find((set) => set.name === setName));
const SetsOptions = [
  { value: '', label: 'Selecciona un set' },
  ...sortedSets.map((set) => ({ value: set.id, label: set.name })),
];

const formatOptionLabel = ({ value, label }) => {
  const set = Sets.find((aSet) => aSet.id === value) || { isCharacterSet: false };
  return (
    <div className="flex flex-row items-center gap-2">
      <span className="option-name">{label}</span>
      {set.isCharacterSet && (
        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Para {characterName(set.character)}</span>
      )}
    </div>
  );
};

const SetObjects = () => {
  const [selectableOptions, updateSelectableOptions] = useState(SetsOptions);
  const [selectedSet, updateSelectedSet] = useState('');
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setDisplayTable(true), 0);
  }, []);

  const updateSelectedOption = (selectedOption) => {
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
            <Select
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
