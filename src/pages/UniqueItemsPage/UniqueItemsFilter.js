import React, { useState } from 'react';
import ObjectTypes from '../../data/json/object_types.json';
import Select from 'react-select';
import FilterBar from '../../components/ui/FilterBar';
import FilterLabel from '../../components/ui/FilterLabel';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { selectTheme, selectStyles } from '../../shared/reactSelectTheme';

const optionValue = (value, list) => list.find((el) => el.value === value);
const getKeyByValue = (element, value) => Object.keys(element).find((key) => element[key] === value);

const objectTypesValues = Object.values(ObjectTypes).sort();
const objectTypes = [
  { value: '', label: 'Cualquiera' },
  ...objectTypesValues.map((label) => ({ value: getKeyByValue(ObjectTypes, label), label })),
];
const itemTypes = [
  { value: '', label: 'Cualquiera' },
  { value: 'normal', label: 'Normal' },
  { value: 'exceptional', label: 'Excepcional' },
  { value: 'elite', label: 'Elite' },
];
const characters = [
  { value: '', label: 'Cualquiera' },
  { value: 'amazon', label: 'Amazona' },
  { value: 'assasin', label: 'Asesina' },
  { value: 'barbarian', label: 'Bárbaro' },
  { value: 'druid', label: 'Druída' },
  { value: 'sorcerer', label: 'Hechicera' },
  { value: 'necromancer', label: 'Nigromante' },
  { value: 'paladin', label: 'Paladín' },
];

const UniqueItemsFilter = ({ onSubmit = () => {} }) => {
  const [itemType, setItemType] = useState('');
  const [character, setCharacter] = useState('');
  const [objectType, setObjectType] = useState('');
  const submitForm = (e) => {
    onSubmit(e, { itemType, character, objectType });
  };

  return (
    <FilterBar>
      <form onSubmit={submitForm}>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:flex-[2] md:min-w-[120px]">
            <FilterLabel>Tipo de Item</FilterLabel>
            <Select
              theme={selectTheme}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(itemType, itemTypes)}
              onChange={(opt) => setItemType(opt?.value ?? '')}
              options={itemTypes}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
          <div className="w-full md:flex-[2] md:min-w-[120px]">
            <FilterLabel>Personaje</FilterLabel>
            <Select
              theme={selectTheme}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(character, characters)}
              onChange={(opt) => setCharacter(opt?.value ?? '')}
              options={characters}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
          <div className="w-full md:flex-[2] md:min-w-[120px]">
            <FilterLabel>Tipo de Objeto</FilterLabel>
            <Select
              theme={selectTheme}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(objectType, objectTypes)}
              onChange={(opt) => setObjectType(opt?.value ?? '')}
              options={objectTypes}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
        </div>
        <div className="mt-4">
          <PrimaryButton type="submit">Filtrar</PrimaryButton>
        </div>
      </form>
    </FilterBar>
  );
};

export default UniqueItemsFilter;
