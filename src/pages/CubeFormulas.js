import React, { useState } from 'react';
import FilterBar from '../components/ui/FilterBar';
import PageContainer from '../components/ui/PageContainer';
import TableRow from '../components/ui/TableRow';
import FilterInput from '../components/ui/FilterInput';
import FilterLabel from '../components/ui/FilterLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import CubeRecipes from '../data/json/cube_recipes.json';
import DiabloTable from '../shared/DiabloTable.js';
import { isBlank, matchesArrayFilter } from '../shared/helpers/util';

const TABLE_HEADERS = ['Formula', 'Resultado', 'Detalles'];

const CubeFormulas = () => {
  const [cubeFormulas, setCubeFormulas] = useState(CubeRecipes);
  const [item, setItems] = useState('');
  const [result, setResults] = useState('');
  const [description, setDescription] = useState('');

  const renderRow = (cubeFormula, index) => (
    <TableRow key={index}>
      <td className="diablo-table-item formula w-1/5 table-cell text-center align-top">
        <div className="flex flex-col text-left">
          {cubeFormula.items.map((it, i) => (
            <div key={i}>- {it}</div>
          ))}
        </div>
      </td>
      <td className="diablo-table-item table-cell text-center">{cubeFormula.result}</td>
      <td className="diablo-table-item table-cell text-center">{cubeFormula.description}</td>
    </TableRow>
  );

  const matchesItem = (formula) => matchesArrayFilter(item, formula.items);
  const matchesResult = (formula) => isBlank(result) || !!formula.result.toLowerCase().match(result.toLowerCase());
  const matchesDescription = (formula) =>
    isBlank(description) || !!formula.description.toLowerCase().match(description.toLowerCase());
  const matchesFilters = (formula) => matchesItem(formula) && matchesResult(formula) && matchesDescription(formula);
  const filterFormulas = () => setCubeFormulas(CubeRecipes.filter((formula) => matchesFilters(formula)));

  const onSubmit = (e) => {
    e.preventDefault();
    filterFormulas();
  };

  return (
    <PageContainer>
      <FilterBar>
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:flex-[2] md:min-w-[120px]">
              <FilterLabel>Contiene Item</FilterLabel>
              <FilterInput
                placeholder="Ej: Ral"
                value={item}
                onChange={(e) => setItems(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Resultado</FilterLabel>
              <FilterInput
                placeholder="Ej: Flechas"
                value={result}
                onChange={(e) => setResults(e.target.value)}
              />
            </div>
            <div className="w-full md:flex-[4] md:min-w-[150px]">
              <FilterLabel>Descripción</FilterLabel>
              <FilterInput
                placeholder="Ej: Detalles"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
<PrimaryButton type="submit">Filtrar</PrimaryButton>
          </div>
        </form>
      </FilterBar>
      <p className="text-white ml-6 mt-2">
        Para más fórmulas podés chusmear{' '}
        <a
          href="https://www.diablo2latino.com/Objetos-artesanales.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-diablo-blue hover:underline"
        >
          en esta página.
        </a>
      </p>
      <DiabloTable headers={TABLE_HEADERS} items={cubeFormulas} renderRow={renderRow} />
    </PageContainer>
  );
};

export default CubeFormulas;
