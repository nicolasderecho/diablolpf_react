import { useState, type FormEvent } from 'react';
import Select from 'react-select';
import ObjectTypesJson from '../../data/json/object_types.json';
import FilterBar from '../../components/ui/FilterBar';
import FilterLabel from '../../components/ui/FilterLabel';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { selectTheme, selectStyles } from '../../shared/reactSelectTheme';
import type { FilterValues, ObjectTypeMap, SelectOption } from '../../types';

const optionValue = (value: string, list: SelectOption[]): SelectOption | null =>
  list.find((el) => el.value === value) ?? null;

const getKeyByValue = (element: ObjectTypeMap, value: string): string =>
  Object.keys(element).find((key) => element[key] === value) ?? '';

const ObjectTypes = ObjectTypesJson as ObjectTypeMap;
const objectTypesValues = Object.values(ObjectTypes).sort();
const objectTypes: SelectOption[] = [
  { value: '', label: 'Cualquiera' },
  ...objectTypesValues.map((label) => ({ value: getKeyByValue(ObjectTypes, label), label })),
];
const itemTypes: SelectOption[] = [
  { value: '', label: 'Cualquiera' },
  { value: 'normal', label: 'Normal' },
  { value: 'exceptional', label: 'Excepcional' },
  { value: 'elite', label: 'Elite' },
];
const characters: SelectOption[] = [
  { value: '', label: 'Cualquiera' },
  { value: 'amazon', label: 'Amazona' },
  { value: 'assasin', label: 'Asesina' },
  { value: 'barbarian', label: 'Bárbaro' },
  { value: 'druid', label: 'Druída' },
  { value: 'sorcerer', label: 'Hechicera' },
  { value: 'necromancer', label: 'Nigromante' },
  { value: 'paladin', label: 'Paladín' },
];

type UniqueItemsFilterProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>, filters: FilterValues) => void;
};

const UniqueItemsFilter = ({ onSubmit = () => undefined }: UniqueItemsFilterProps) => {
  const [itemType, setItemType] = useState('');
  const [character, setCharacter] = useState('');
  const [objectType, setObjectType] = useState('');

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    onSubmit(e, { itemType, character, objectType });
  };

  return (
    <FilterBar>
      <form onSubmit={submitForm}>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:flex-[2] md:min-w-[120px]">
            <FilterLabel>Tipo de Item</FilterLabel>
            <Select<SelectOption>
              theme={selectTheme}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(itemType, itemTypes)}
              onChange={(opt) => setItemType(String(opt?.value ?? ''))}
              options={itemTypes}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
          <div className="w-full md:flex-[2] md:min-w-[120px]">
            <FilterLabel>Personaje</FilterLabel>
            <Select<SelectOption>
              theme={selectTheme}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(character, characters)}
              onChange={(opt) => setCharacter(String(opt?.value ?? ''))}
              options={characters}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
          <div className="w-full md:flex-[2] md:min-w-[120px]">
            <FilterLabel>Tipo de Objeto</FilterLabel>
            <Select<SelectOption>
              theme={selectTheme}
              isSearchable={false}
              styles={selectStyles}
              value={optionValue(objectType, objectTypes)}
              onChange={(opt) => setObjectType(String(opt?.value ?? ''))}
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
