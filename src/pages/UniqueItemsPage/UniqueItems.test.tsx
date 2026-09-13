import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import UniqueItemsPage from './UniqueItems';
import RawUniqueItems from '../../data/json/unique_items.json';
import type { UniqueItemData } from '../../types';

const UniqueItemsData = RawUniqueItems as UniqueItemData[];

const selectOption = async (
  user: ReturnType<typeof userEvent.setup>,
  labelText: string,
  optionName: string,
) => {
  await user.click(screen.getByLabelText(labelText));
  await user.click(await screen.findByRole('option', { name: optionName }));
};

const resultsText = (count: number) => `${count} ${count > 1 ? 'Resultados' : 'Resultado'}`;
const baselineResults = resultsText(UniqueItemsData.length);

describe('UniqueItemsPage', () => {
  it('shows every unique item when no filters are applied', async () => {
    render(<UniqueItemsPage />);

    expect(await screen.findByText(baselineResults)).toBeInTheDocument();
    expect(screen.getByText('Reliquia del Nokozán')).toBeInTheDocument();
  });

  it('filters by object type', async () => {
    const user = userEvent.setup();
    render(<UniqueItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Tipo de Objeto', 'Yelmo');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    const expectedCount = UniqueItemsData.filter((item) => item.itemType === 'Helm').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('combines item class and object type filters', async () => {
    const user = userEvent.setup();
    render(<UniqueItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Tipo de Objeto', 'Yelmo');
    await selectOption(user, 'Tipo de Item', 'Excepcional');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    const expectedCount = UniqueItemsData.filter(
      (item) => item.itemType === 'Helm' && item.itemClass === 'exceptional',
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('filters by character', async () => {
    const user = userEvent.setup();
    render(<UniqueItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Personaje', 'Asesina');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    const expectedCount = UniqueItemsData.filter((item) => item.character === 'assasin').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('shows the empty state when no unique item matches the combined filters', async () => {
    const user = userEvent.setup();
    render(<UniqueItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Personaje', 'Asesina');
    await selectOption(user, 'Tipo de Objeto', 'Yelmo');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    expect(await screen.findByText('No se encontraron resultados.')).toBeInTheDocument();
  });
});
