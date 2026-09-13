import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Gems from './Gems';
import RawGemList from '../data/json/game_gems.json';
import type { GemData } from '../types';

const GemList = RawGemList as GemData[];

const submit = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button', { name: 'Filtrar' }));
};

const resultsText = (count: number) => `${count} ${count > 1 ? 'Resultados' : 'Resultado'}`;

describe('Gems', () => {
  it('shows every gem when no filters are applied', async () => {
    render(<Gems />);

    expect(screen.getByText(resultsText(GemList.length))).toBeInTheDocument();
  });

  it('filters by a weapon attribute substring across all qualities of a gem type', async () => {
    const user = userEvent.setup();
    render(<Gems />);

    await user.type(screen.getByLabelText('Armas Contienen'), 'Puntuación de Ataque');
    await submit(user);

    // All qualities of the amethyst grant attack rating when socketed in weapons.
    const expectedCount = GemList.filter((gem) =>
      gem.weapons.some((w) => /Puntuación de Ataque/i.test(w)),
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('combines weapon and helm filters (AND across fields)', async () => {
    const user = userEvent.setup();
    render(<Gems />);

    await user.type(screen.getByLabelText('Armas Contienen'), 'Puntuación de Ataque');
    await user.type(screen.getByLabelText('Armaduras/Yelmos contienen'), '+3 Fuerza');
    await submit(user);

    const expectedCount = GemList.filter(
      (gem) =>
        gem.weapons.some((w) => /Puntuación de Ataque/i.test(w)) &&
        gem.helms.some((h) => /\+3 Fuerza/i.test(h)),
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('matches case-insensitively', async () => {
    const user = userEvent.setup();
    render(<Gems />);

    await user.type(screen.getByLabelText('Escudos contienen'), 'defensa');
    await submit(user);

    const expectedCount = GemList.filter((gem) => gem.shields.some((s) => /defensa/i.test(s))).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('shows the empty state when no gem matches the filters', async () => {
    const user = userEvent.setup();
    render(<Gems />);

    await user.type(screen.getByLabelText('Armas Contienen'), 'no existe este texto');
    await submit(user);

    expect(await screen.findByText('No se encontraron resultados.')).toBeInTheDocument();
  });
});
