import { useState, type FormEvent } from 'react';
import FilterBar from '../components/ui/FilterBar';
import PageContainer from '../components/ui/PageContainer';
import TableRow from '../components/ui/TableRow';
import FilterInput from '../components/ui/FilterInput';
import FilterLabel from '../components/ui/FilterLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import { matchesArrayFilter } from '../shared/helpers/util';
import RawGemList from '../data/json/game_gems.json';
import DiabloTable from '../shared/DiabloTable';
import Gem from '../shared/Gem';
import type { GemData } from '../types';

const TABLE_HEADERS = ['Nombre', 'Nivel', 'Armas', 'Armaduras/Yelmos', 'Escudos'];
const GemList = RawGemList as GemData[];

const Gems = () => {
  const [weapon, setWeapon] = useState('');
  const [shield, setShield] = useState('');
  const [helm, setHelm] = useState('');
  const [gems, setGems] = useState<GemData[]>(GemList);

  const matchesWeaponFilter = (gem: GemData): boolean =>
    matchesArrayFilter(weapon, gem.weapons);
  const matchesShieldFilter = (gem: GemData): boolean =>
    matchesArrayFilter(shield, gem.shields);
  const matchesHelmFilter = (gem: GemData): boolean =>
    matchesArrayFilter(helm, gem.helms);
  const matchesFilters = (gem: GemData): boolean =>
    matchesWeaponFilter(gem) &&
    matchesShieldFilter(gem) &&
    matchesHelmFilter(gem);

  const filterGems = () => setGems(GemList.filter((gem) => matchesFilters(gem)));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterGems();
  };

  const renderRow = (gem: GemData) => (
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
                onChange={(e) => setWeapon(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Armaduras/Yelmos contienen</FilterLabel>
              <FilterInput
                placeholder="Ej: El atacante recibe el daño de"
                value={helm}
                onChange={(e) => setHelm(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Escudos contienen</FilterLabel>
              <FilterInput
                placeholder="Ej: El atacante recibe el daño de"
                value={shield}
                onChange={(e) => setShield(e.target.value)}
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
