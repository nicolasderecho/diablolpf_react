import React, { useState } from 'react';
import FilterBar from '../components/ui/FilterBar';
import PageContainer from '../components/ui/PageContainer';
import TableRow from '../components/ui/TableRow';
import FilterInput from '../components/ui/FilterInput';
import FilterLabel from '../components/ui/FilterLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import { matchesArrayFilter } from '../shared/helpers/util';
import GemList from '../data/json/game_gems.json';
import DiabloTable from '../shared/DiabloTable.js';
import Gem from '../shared/Gem';

const TABLE_HEADERS = ['Nombre', 'Nivel', 'Armas', 'Armaduras/Yelmos', 'Escudos'];

const Gems = () => {
  const [weapon, setweapon] = useState('');
  const [shield, setshield] = useState('');
  const [helm, sethelm] = useState('');
  const [gems, setgems] = useState(GemList);
  const matchesWeaponFilter = (gem) => matchesArrayFilter(weapon, gem.weapons);
  const matchesShieldFilter = (gem) => matchesArrayFilter(shield, gem.shields);
  const matchesHelmFilter = (gem) => matchesArrayFilter(helm, gem.helms);
  const matchesFilters = (gem) =>
    matchesWeaponFilter(gem) && matchesShieldFilter(gem) && matchesHelmFilter(gem);
  const filterGems = () => setgems(GemList.filter((gem) => matchesFilters(gem)));
  const onSubmit = (e) => {
    e.preventDefault();
    filterGems();
  };

  const renderRow = (gem) => (
    <TableRow key={gem.code}>
      <td className="diablo-table-item table-cell text-center">
        <Gem code={gem.code} name={gem.name} />
      </td>
      <td className="diablo-table-item table-cell text-center">{gem.level}</td>
      <td className="diablo-table-item table-cell text-center">
        {gem.weapons.map((property, i) => (
          <div key={i}>{property}</div>
        ))}
      </td>
      <td className="diablo-table-item table-cell text-center">
        {gem.helms.map((property, i) => (
          <div key={i}>{property}</div>
        ))}
      </td>
      <td className="diablo-table-item table-cell text-center">
        {gem.shields.map((property, i) => (
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
            <div className="w-full md:flex-[2] md:min-w-[120px]">
              <FilterLabel>Armas Contienen</FilterLabel>
              <FilterInput
                placeholder="Ej: Vida robada por impacto"
                value={weapon}
                onChange={(e) => setweapon(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Armaduras/Yelmos contienen</FilterLabel>
              <FilterInput
                placeholder="Ej: El atacante recibe el daño de"
                value={helm}
                onChange={(e) => sethelm(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Escudos contienen</FilterLabel>
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
      <DiabloTable headers={TABLE_HEADERS} items={gems} renderRow={renderRow} />
    </PageContainer>
  );
};

export default Gems;
