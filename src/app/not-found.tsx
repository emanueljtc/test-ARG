import { Title } from '@/components';
import React from 'react';

const notFound = () => {
  return (
    <div>
      <Title variant="md" fontWeight="400" color="red-pop">
        Page not found...
      </Title>
    </div>
  );
};

export default notFound;

