import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Runes from './Runes';
import RawRunesData from '../data/json/runes.json';
import type { RuneData } from '../types';

const RunesData = RawRunesData as RuneData[];

const submit = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button', { name: 'Filtrar' }));
};

const resultsText = (count: number) => `${count} ${count > 1 ? 'Resultados' : 'Resultado'}`;

describe('Runes', () => {
  it('shows every rune when no filters are applied', async () => {
    render(<Runes />);

    expect(screen.getByText(resultsText(RunesData.length))).toBeInTheDocument();
  });

  it('filters by name as a case-insensitive substring match', async () => {
    const user = userEvent.setup();
    render(<Runes />);

    await user.type(screen.getByLabelText('Nombre'), 'el');
    await submit(user);

    // "El", "Eld", "Shael" and "Hel" all contain "el".
    const expectedCount = RunesData.filter((rune) => /el/i.test(rune.name)).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('filters by exact level', async () => {
    const user = userEvent.setup();
    render(<Runes />);

    await user.type(screen.getByLabelText('Nivel'), '15');
    await submit(user);

    const expectedCount = RunesData.filter((rune) => rune.level.toString() === '15').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('combines name and level filters', async () => {
    const user = userEvent.setup();
    render(<Runes />);

    await user.type(screen.getByLabelText('Nombre'), 'el');
    await user.type(screen.getByLabelText('Nivel'), '15');
    await submit(user);

    // Of Eth/Ith/Hel (level 15), only Hel contains "el".
    const expectedCount = RunesData.filter(
      (rune) => rune.level.toString() === '15' && /el/i.test(rune.name),
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('filters by a weapon attribute substring', async () => {
    const user = userEvent.setup();
    render(<Runes />);

    await user.type(screen.getByLabelText('Armas Contienen'), 'Puntuacion de Ataque');
    await submit(user);

    const expectedCount = RunesData.filter((rune) =>
      rune.weapons.some((w) => /Puntuacion de Ataque/i.test(w)),
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('shows the empty state when no rune matches the filters', async () => {
    const user = userEvent.setup();
    render(<Runes />);

    await user.type(screen.getByLabelText('Nombre'), 'no existe esta runa');
    await submit(user);

    expect(await screen.findByText('No se encontraron resultados.')).toBeInTheDocument();
  });
});
