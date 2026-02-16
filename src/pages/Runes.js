import React, { useState } from 'react';
import FilterBar from '../components/ui/FilterBar';
import PageContainer from '../components/ui/PageContainer';
import TableRow from '../components/ui/TableRow';
import FilterInput from '../components/ui/FilterInput';
import FilterLabel from '../components/ui/FilterLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import { isBlank, matchesArrayFilter } from '../shared/helpers/util';
import RunesData from '../data/json/runes.json';
import DiabloTable from '../shared/DiabloTable.js';
import Rune from '../shared/Rune';
import CubeRecipe from '../shared/CubeRecipe';

const TABLE_HEADERS = ['Número', 'Nombre', 'A través del cubo', 'Nível', 'Armas', 'Armaduras/Yelmos/Escudos'];

const Runes = () => {
  const [name, setname] = useState('');
  const [level, setlevel] = useState('');
  const [runes, setrunes] = useState(RunesData);
  const [weapon, setweapon] = useState('');
  const [shield, setshield] = useState('');
  const matchesNameFilter = (rune) => isBlank(name) || new RegExp(name, 'i').test(rune.name);
  const matchesLevelFilter = (rune) => isBlank(level) || level.toString() === rune.level.toString();
  const matchesWeaponFilter = (rune) => matchesArrayFilter(weapon, rune.weapons);
  const matchesShieldFilter = (rune) => matchesArrayFilter(shield, rune.shields);
  const matchesFilters = (rune) =>
    matchesNameFilter(rune) && matchesLevelFilter(rune) && matchesWeaponFilter(rune) && matchesShieldFilter(rune);
  const filterRunes = () => setrunes(RunesData.filter((rune) => matchesFilters(rune)));
  const onSubmit = (e) => {
    e.preventDefault();
    filterRunes();
  };

  const renderRow = (rune) => (
    <TableRow key={rune.code}>
      <td className="diablo-table-item table-cell text-center">{rune.position}</td>
      <td className="diablo-table-item table-cell text-center">
        <Rune code={rune.code} name={rune.name} />
      </td>
      <td className="diablo-table-item table-cell text-center">
        <CubeRecipe items={rune.itemsRecipe} />
      </td>
      <td className="diablo-table-item table-cell text-center">{rune.level}</td>
      <td className="diablo-table-item table-cell text-center">
        {rune.weapons.map((property, i) => (
          <div key={i}>{property}</div>
        ))}
      </td>
      <td className="diablo-table-item table-cell text-center">
        {rune.shields.map((property, i) => (
          <div key={i}>{property}</div>
        ))}
      </td>
    </TableRow>
  );

  return (
    <PageContainer>
      <FilterBar>
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:flex-1 md:min-w-[120px]">
              <FilterLabel>Nombre</FilterLabel>
              <FilterInput
                placeholder="Ej: Sur"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-1 md:min-w-[120px]">
              <FilterLabel>Nivel</FilterLabel>
              <FilterInput
                placeholder="Ej: 11"
                value={level}
                onChange={(e) => setlevel(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[2] md:min-w-[150px]">
              <FilterLabel>Armas Contienen</FilterLabel>
              <FilterInput
                placeholder="Ej: Vida robada por impacto"
                value={weapon}
                onChange={(e) => setweapon(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Armaduras/Yelmos/Escudos contienen</FilterLabel>
              <FilterInput
                placeholder="Ej: El atacante recibe el daño de"
                value={shield}
                onChange={(e) => setshield(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
<PrimaryButton type="submit">Filtrar</PrimaryButton>
          </div>
        </form>
      </FilterBar>
      <DiabloTable headers={TABLE_HEADERS} items={runes} renderRow={renderRow} />
    </PageContainer>
  );
};

export default Runes;
