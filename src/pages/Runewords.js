import React, { useState, useEffect } from 'react';
import FilterBar from '../components/ui/FilterBar';
import PageContainer from '../components/ui/PageContainer';
import FilterLabel from '../components/ui/FilterLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import TableRow from '../components/ui/TableRow';
import RawRunewordsList from '../data/json/runewords.json';
import RunesData from '../data/json/runes.json';
import Rune from '../shared/Rune';
import DiabloTable from '../shared/DiabloTable.js';
import { isBlank } from '../shared/helpers/util';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import capitalize from 'lodash/capitalize';
import Select from 'react-select';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { selectTheme, selectStyles } from '../shared/reactSelectTheme';

const RunewordsList = RawRunewordsList.map((runeword) => ({
  ...runeword,
  runes: runeword.runeCodes.map((code) => RunesData.find((d) => d.code === code)),
}));
const TABLE_HEADERS = ['Palabra Rúnica', 'Especificaciones'];

const names = uniq(RunewordsList.map((rw) => rw.name)).sort();
const originalNames = uniq(RunewordsList.map((rw) => rw.code)).sort();
const applicableInList = uniq(flatten(RunewordsList.map((rw) => rw.applicableIn))).sort();
const levels = uniq(RunewordsList.map((rw) => rw.level)).sort();
const runewordNames = [{ value: '', label: 'Cualquiera' }, ...names.map((name) => ({ value: name, label: name }))];
const runewordOriginalNames = [
  { value: '', label: 'Cualquiera' },
  ...originalNames.map((name) => ({ value: name, label: capitalize(name) })),
];
const runewordLevels = [
  { value: '', label: 'Cualquiera' },
  ...levels.map((level) => ({ value: level, label: level })),
];
const holeOptions = [
  { value: '', label: 'Cualquiera' },
  ...[2, 3, 4, 5, 6].map((n) => ({ label: n, value: n })),
];
const applicableInOptions = applicableInList.map((item) => ({ value: item, label: item }));
const runesOptions = RunesData.map((rune) => ({ value: rune.code, label: capitalize(rune.name) }));

const optionValue = (value) => ({ value: value, label: capitalize(value || 'Cualquiera') });

const Runewords = () => {
  const [runewords, setRunewords] = useState(RunewordsList);
  const [name, setName] = useState('');
  const [originalName, setOriginalName] = useState('');
  const [level, setLevel] = useState('');
  const [holes, setHoles] = useState('');
  const [applicableIn, setApplicableIn] = useState([]);
  const [runes, setRunes] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);

  const matchesName = (rw) => isBlank(name) || new RegExp(`${rw.name}`, 'i').test(name);
  const matchesOriginalName = (rw) => isBlank(originalName) || new RegExp(`${rw.code}`, 'i').test(originalName);
  const matchesLevel = (rw) => isBlank(level) || rw.level.toString() === level.toString();
  const matchesHoles = (rw) => isBlank(holes) || rw.holes.toString() === holes.toString();
  const matchesApplicableIn = (rw) =>
    applicableIn.length === 0 || applicableIn.some((item) => rw.applicableIn.indexOf(item) !== -1);
  const matchesRunes = (rw) =>
    runes.length === 0 || runes.some((runeCode) => rw.runes.some((r) => r.code === runeCode));
  const matchesFilters = (rw) =>
    matchesName(rw) &&
    matchesOriginalName(rw) &&
    matchesLevel(rw) &&
    matchesHoles(rw) &&
    matchesApplicableIn(rw) &&
    matchesRunes(rw);

  const filterRunewords = () => setRunewords(RunewordsList.filter((rw) => matchesFilters(rw)));
  const onSubmit = (e) => {
    e.preventDefault();
    filterRunewords();
  };

  useEffect(() => {
    window.setTimeout(() => setDisplayTable(true), 0);
  }, []);

  const renderRow = (runeword) => (
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
              <Select
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Espiritu"
                value={optionValue(name)}
                onChange={(opt) => setName(opt?.value ?? '')}
                options={runewordNames}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[120px]">
              <FilterLabel>Nombre original</FilterLabel>
              <Select
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Spirit"
                value={optionValue(originalName)}
                onChange={(opt) => setOriginalName(opt?.value ?? '')}
                options={runewordOriginalNames}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[120px]">
              <FilterLabel>Nivel</FilterLabel>
              <Select
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: 11"
                value={optionValue(level)}
                onChange={(opt) => setLevel(opt?.value ?? '')}
                options={runewordLevels}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[120px]">
              <FilterLabel>Engarces</FilterLabel>
              <Select
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Cualquiera"
                value={optionValue(holes)}
                onChange={(opt) => setHoles(opt?.value ?? '')}
                options={holeOptions}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Aplicable En</FilterLabel>
              <Select
                isMulti
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Cualquiera"
                value={applicableInOptions.filter((o) => applicableIn.includes(o.value))}
                onChange={(opts) => setApplicableIn((opts || []).map((o) => o.value))}
                options={applicableInOptions}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Runas que contiene</FilterLabel>
              <Select
                isMulti
                theme={selectTheme}
                styles={selectStyles}
                placeholder="Ej: Cualquiera"
                value={runesOptions.filter((o) => runes.includes(o.value))}
                onChange={(opts) => setRunes((opts || []).map((o) => o.value))}
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
