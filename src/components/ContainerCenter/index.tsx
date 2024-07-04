import React from 'react';
import styles from './styles.module.css';
const ContainerCenter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container_center}>{children}</div>;
};

export default ContainerCenter;

