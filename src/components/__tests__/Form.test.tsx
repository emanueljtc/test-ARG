import React from 'react';
import { render } from '@testing-library/react';
import Form from '../Form';

describe('Form', () => {
  test('renders children', () => {
    const { getByTestId } = render(
      <Form onSubmit={jest.fn()}>
        <div data-testid="child-element">Child Element</div>
      </Form>
    );
    expect(getByTestId('child-element')).toBeInTheDocument();
  });
});

