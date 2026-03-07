import { useEffect, useState, type FormEvent } from 'react';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import capitalize from 'lodash/capitalize';
import Select from 'react-select';
import FilterBar from '../components/ui/FilterBar';
import PageContainer from '../components/ui/PageContainer';
import FilterLabel from '../components/ui/FilterLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import TableRow from '../components/ui/TableRow';
import RawRunewordsList from '../data/json/runewords.json';
import RawRunesData from '../data/json/runes.json';
import Rune from '../shared/Rune';
import DiabloTable from '../shared/DiabloTable';
import { isBlank } from '../shared/helpers/util';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { selectTheme, selectStyles } from '../shared/reactSelectTheme';
import type { RuneData, RunewordData, SelectOption } from '../types';

const rawRunewords = RawRunewordsList as RunewordData[];
const RunesData = RawRunesData as RuneData[];

const RunewordsList: RunewordData[] = rawRunewords.map((runeword) => ({
  ...runeword,
  runes: runeword.runeCodes
    .map((code) => RunesData.find((d) => d.code === code))
    .filter((rune): rune is RuneData => Boolean(rune)),
}));

const TABLE_HEADERS = ['Palabra Rúnica', 'Especificaciones'];

const names = uniq(RunewordsList.map((rw) => rw.name)).sort();
const originalNames = uniq(RunewordsList.map((rw) => rw.code)).sort();
const applicableInList = uniq(flatten(RunewordsList.map((rw) => rw.applicableIn))).sort();
const levels = uniq(RunewordsList.map((rw) => rw.level)).sort((a, b) => a - b);
const runewordNames: SelectOption[] = [
  { value: '', label: 'Cualquiera' },
  ...names.map((name) => ({ value: name, label: name })),
];
const runewordOriginalNames: SelectOption[] = [
  { value: '', label: 'Cualquiera' },
  ...originalNames.map((name) => ({ value: name, label: capitalize(name) })),
];
const runewordLevels: SelectOption<string | number>[] = [
  { value: '', label: 'Cualquiera' },
  ...levels.map((level) => ({ value: level, label: String(level) })),
];
const holeOptions: SelectOption<string | number>[] = [
  { value: '', label: 'Cualquiera' },
  ...[2, 3, 4, 5, 6].map((n) => ({ label: String(n), value: n })),
];
const applicableInOptions: SelectOption[] = applicableInList.map((item) => ({ value: item, label: item }));
const runesOptions: SelectOption[] = RunesData.map((rune) => ({
  value: rune.code,
  label: capitalize(rune.name),
}));

const optionValue = (
  value: string,
  options: Array<SelectOption | SelectOption<string | number>>,
): SelectOption | SelectOption<string | number> | null =>
  options.find((option) => String(option.value) === value) ?? null;

const Runewords = () => {
  const [runewords, setRunewords] = useState<RunewordData[]>(RunewordsList);
  const [name, setName] = useState('');
  const [originalName, setOriginalName] = useState('');
  const [level, setLevel] = useState('');
  const [holes, setHoles] = useState('');
  const [applicableIn, setApplicableIn] = useState<string[]>([]);
  const [runes, setRunes] = useState<string[]>([]);
  const [displayTable, setDisplayTable] = useState(false);

  const matchesName = (rw: RunewordData): boolean =>
    isBlank(name) || new RegExp(`${rw.name}`, 'i').test(name);
  const matchesOriginalName = (rw: RunewordData): boolean =>
    isBlank(originalName) || new RegExp(`${rw.code}`, 'i').test(originalName);
  const matchesLevel = (rw: RunewordData): boolean =>
    isBlank(level) || rw.level.toString() === level.toString();
  const matchesHoles = (rw: RunewordData): boolean =>
    isBlank(holes) || rw.holes.toString() === holes.toString();
  const matchesApplicableIn = (rw: RunewordData): boolean =>
    applicableIn.length === 0 || applicableIn.some((item) => rw.applicableIn.indexOf(item) !== -1);
  const matchesRunes = (rw: RunewordData): boolean =>
    runes.length === 0 || runes.some((runeCode) => rw.runes.some((r) => r.code === runeCode));
  const matchesFilters = (rw: RunewordData): boolean =>
    matchesName(rw) &&
    matchesOriginalName(rw) &&
    matchesLevel(rw) &&
    matchesHoles(rw) &&
    matchesApplicableIn(rw) &&
    matchesRunes(rw);

  const filterRunewords = () =>
    setRunewords(RunewordsList.filter((rw) => matchesFilters(rw)));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterRunewords();
  };

  useEffect(() => {
    window.setTimeout(() => setDisplayTable(true), 0);
  }, []);

  const renderRow = (runeword: RunewordData) => (
    <TableRow key={runeword.code}>
      <td className="diablo-table-item w-1/4 min-w-[200px] table-cell align-top">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] text-left">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div>
                <b>Nombre: </b>
                {runeword.name}
              </div>
              {runeword.unlockable && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded max-w-[106px]">
                  Nueva en D2R
                </span>
              )}
            </div>
            <div>
              <b>Nombre original: </b>
              {runeword.code}
            </div>
            <div>
              <b>Nivel: </b>
              {runeword.level}
            </div>
            <div>
              <b>Aplicable en: </b>
              {runeword.applicableIn.join(', ')}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center flex-1">
            {runeword.runes.map((rune, index) => (
              <div key={index} className="rune-object">
                <Rune code={rune.code} name={rune.name} />
              </div>
            ))}
          </div>
        </div>
      </td>
      <td className="diablo-table-item runeword-specs min-w-[300px] table-cell text-left align-top">
        {runeword.specs.map((spec, index) => (
          <div key={index}>{spec}</div>
        ))}
      </td>
    </TableRow>
  );

  return (
    <PageContainer>
      <FilterBar>
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:flex-[2] md:min-w-[120px]">
              <FilterLabel>Nombre</FilterLabel>
              <Select<SelectOption>
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Espiritu"
                value={optionValue(name, runewordNames) as SelectOption | null}
                onChange={(opt) => setName(String(opt?.value ?? ''))}
                options={runewordNames}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[120px]">
              <FilterLabel>Nombre original</FilterLabel>
              <Select<SelectOption>
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Spirit"
                value={optionValue(originalName, runewordOriginalNames) as SelectOption | null}
                onChange={(opt) => setOriginalName(String(opt?.value ?? ''))}
                options={runewordOriginalNames}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[120px]">
              <FilterLabel>Nivel</FilterLabel>
              <Select<SelectOption<string | number>>
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: 11"
                value={optionValue(level, runewordLevels) as SelectOption<string | number> | null}
                onChange={(opt) => setLevel(String(opt?.value ?? ''))}
                options={runewordLevels}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[120px]">
              <FilterLabel>Engarces</FilterLabel>
              <Select<SelectOption<string | number>>
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Cualquiera"
                value={optionValue(holes, holeOptions) as SelectOption<string | number> | null}
                onChange={(opt) => setHoles(String(opt?.value ?? ''))}
                options={holeOptions}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Aplicable En</FilterLabel>
              <Select<SelectOption, true>
                isMulti
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Cualquiera"
                value={applicableInOptions.filter((o) => applicableIn.includes(String(o.value)))}
                onChange={(opts) => setApplicableIn((opts || []).map((o) => String(o.value)))}
                options={applicableInOptions}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Runas que contiene</FilterLabel>
              <Select<SelectOption, true>
                isMulti
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Cualquiera"
                value={runesOptions.filter((o) => runes.includes(String(o.value)))}
                onChange={(opts) => setRunes((opts || []).map((o) => String(o.value)))}
                options={runesOptions}
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
      {displayTable ? (
        <DiabloTable headers={TABLE_HEADERS} items={runewords} renderRow={renderRow} />
      ) : (
        <LoadingSpinner />
      )}
    </PageContainer>
  );
};

export default Runewords;
