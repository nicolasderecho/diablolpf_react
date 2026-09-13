import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './Home';

describe('Home', () => {
  it('renders the landing page with the Diablo II logo and character art', () => {
    render(<Home />);

    expect(screen.getByAltText('Diablo II')).toBeInTheDocument();
    expect(screen.getByAltText('Necromancer')).toBeInTheDocument();
    expect(screen.getByAltText('Sorceress')).toBeInTheDocument();
    expect(screen.getByAltText('Barbarian')).toBeInTheDocument();
    expect(screen.getByAltText('Amazon')).toBeInTheDocument();
  });
});
