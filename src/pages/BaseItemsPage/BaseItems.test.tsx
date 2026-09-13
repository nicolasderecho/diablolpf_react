import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import BaseItemsPage from './BaseItems';
import RawBaseItems from '../../data/json/base_items.json';
import type { BaseItemData } from '../../types';

const BaseItemsData = RawBaseItems as BaseItemData[];

const selectOption = async (
  user: ReturnType<typeof userEvent.setup>,
  labelText: string,
  optionName: string,
) => {
  await user.click(screen.getByLabelText(labelText));
  await user.click(await screen.findByRole('option', { name: optionName }));
};

const resultsText = (count: number) => `${count} ${count > 1 ? 'Resultados' : 'Resultado'}`;
const baselineResults = resultsText(BaseItemsData.length);

describe('BaseItemsPage', () => {
  it('shows every base item when no filters are applied', async () => {
    render(<BaseItemsPage />);

    expect(await screen.findByText(baselineResults)).toBeInTheDocument();
    expect(screen.getByText('Gorro')).toBeInTheDocument();
  });

  it('filters by object type (item type)', async () => {
    const user = userEvent.setup();
    render(<BaseItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Tipo de Objeto', 'Yelmo');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    const expectedCount = BaseItemsData.filter(
      (item) => item.itemType.toLowerCase() === 'helm',
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('combines item class and object type filters', async () => {
    const user = userEvent.setup();
    render(<BaseItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Tipo de Objeto', 'Yelmo');
    await selectOption(user, 'Tipo de Item', 'Normal');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    const expectedCount = BaseItemsData.filter(
      (item) => item.itemType.toLowerCase() === 'helm' && item.itemClass.toLowerCase() === 'normal',
    ).length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('filters by character', async () => {
    const user = userEvent.setup();
    render(<BaseItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Personaje', 'Asesina');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    const expectedCount = BaseItemsData.filter((item) => item.character === 'assasin').length;
    expect(await screen.findByText(resultsText(expectedCount))).toBeInTheDocument();
  });

  it('shows the empty state when no base item matches the combined filters', async () => {
    const user = userEvent.setup();
    render(<BaseItemsPage />);
    await screen.findByText(baselineResults);

    await selectOption(user, 'Personaje', 'Asesina');
    await selectOption(user, 'Tipo de Objeto', 'Yelmo');
    await user.click(screen.getByRole('button', { name: 'Filtrar' }));

    expect(await screen.findByText('No se encontraron resultados.')).toBeInTheDocument();
  });
});
