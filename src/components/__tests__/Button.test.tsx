import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText('Click me') as HTMLElement;
    expect(button).toBeInTheDocument();
  });

  it('renders type', () => {
    const { getByRole } = render(<Button type="submit">Click me</Button>);
    const button = getByRole('button') as HTMLButtonElement;
    expect(button.type).toBe('submit');
  });
});

