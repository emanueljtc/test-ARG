import { ContainerCenter, Title } from '@/components';
import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <ContainerCenter>
      <Title variant="md" fontWeight="600">
        Page not found
      </Title>
      <Link href="/about">Go home</Link>
    </ContainerCenter>
  );
};

export default notFound;

