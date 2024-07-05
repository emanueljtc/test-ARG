import React from 'react';
import { render } from '@testing-library/react';
import ContainerCenter from '../ContainerCenter';

describe('ContainerCenter', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ContainerCenter>
        <p>Hello, world!</p>
      </ContainerCenter>
    );
    const text = getByText('Hello, world!') as HTMLElement;
    expect(text).toBeInTheDocument();
  });

  it('applies correct styles', () => {
    const { container } = render(
      <ContainerCenter>
        <p>Hello, world!</p>
      </ContainerCenter>
    );
    const containerCenter = container.firstChild as HTMLElement;
    expect(containerCenter).toHaveClass('container_center');
  });
});

