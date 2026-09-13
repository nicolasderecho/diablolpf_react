import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Runewords from './Runewords';
import RawRunewordsList from '../data/json/runewords.json';
import type { RunewordData } from '../types';

const RunewordsList = RawRunewordsList as RunewordData[];

const selectOption = async (
  user: ReturnType<typeof userEvent.setup>,
  labelText: string,
  optionName: string,
) => {
  await user.click(screen.getByLabelText(labelText));
  await user.click(await screen.findByRole('option', { name: optionName }));
};

const submit = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button', { name: 'Filtrar' }));
};

const resultsText = (count: number) => `${count} ${count > 1 ? 'Resultados' : 'Resultado'}`;
const baselineResults = resultsText(RunewordsList.length);

describe('Runewords', () => {
  it('shows every runeword when no filters are applied', async () => {
    render(<Runewords />);

    expect(await screen.findByText(baselineResults)).toBeInTheDocument();
  });

  it('filters by name', async () => {
    const user = userEvent.setup();
    render(<Runewords />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Nombre', 'Acero');
    await submit(user);

    const expectedCount = RunewordsList.filter((rw) => rw.name === 'Acero').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
    expect(screen.getByText('Nombre original:', { exact: false })).toBeInTheDocument();
  });

  it('filters by level', async () => {
    const user = userEvent.setup();
    render(<Runewords />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Nivel', '13');
    await submit(user);

    const expectedCount = RunewordsList.filter((rw) => rw.level.toString() === '13').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('filters by holes (engarces)', async () => {
    const user = userEvent.setup();
    render(<Runewords />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Engarces', '2');
    await submit(user);

    const expectedCount = RunewordsList.filter((rw) => rw.holes.toString() === '2').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('matches ANY of the selected applicableIn values (not ALL)', async () => {
    const user = userEvent.setup();
    render(<Runewords />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Aplicable En', 'Yelmos');
    await selectOption(user, 'Aplicable En', 'Escudos');
    await submit(user);

    // ANY semantics => union of Yelmos and Escudos, not their intersection.
    const expectedCount = RunewordsList.filter(
      (rw) => rw.applicableIn.includes('Yelmos') || rw.applicableIn.includes('Escudos'),
    ).length;
    const intersectionCount = RunewordsList.filter(
      (rw) => rw.applicableIn.includes('Yelmos') && rw.applicableIn.includes('Escudos'),
    ).length;
    expect(expectedCount).toBeGreaterThan(intersectionCount);
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('matches ANY of the selected runes (not ALL)', async () => {
    const user = userEvent.setup();
    render(<Runewords />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Runas que contiene', 'Tir');
    await selectOption(user, 'Runas que contiene', 'El');
    await submit(user);

    // ANY semantics => union of runewords containing Tir or El, not their intersection.
    const expectedCount = RunewordsList.filter(
      (rw) => rw.runeCodes.includes('tir') || rw.runeCodes.includes('el'),
    ).length;
    const intersectionCount = RunewordsList.filter(
      (rw) => rw.runeCodes.includes('tir') && rw.runeCodes.includes('el'),
    ).length;
    expect(expectedCount).toBeGreaterThan(intersectionCount);
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('combines name and holes filters', async () => {
    const user = userEvent.setup();
    render(<Runewords />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Nombre', 'Acero');
    await selectOption(user, 'Engarces', '3');
    await submit(user);

    expect(await screen.findByText('No se encontraron resultados.')).toBeInTheDocument();
  });
});
