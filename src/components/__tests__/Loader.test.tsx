import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  test('renders without crashing', () => {
    render(<Loader />);
  });

  test('applies correct styles', () => {
    const { container } = render(<Loader />);
    const loader = container.firstChild as HTMLElement;
    expect(loader).toHaveClass('loader');
  });
});
