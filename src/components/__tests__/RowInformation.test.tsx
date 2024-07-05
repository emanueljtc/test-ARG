import React from 'react';
import { render } from '@testing-library/react';
import RowInformation from '../RowInformation';

describe('RowInformation Component', () => {
  it('should render correctly with provided label and value', () => {
    const { getByText } = render(
      <RowInformation label="Name" value="John Doe" />
    );
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('should render correctly without label', () => {
    const { getByText } = render(<RowInformation value="John Doe" />);
    expect(getByText('John Doe')).toBeInTheDocument();
  });
});

