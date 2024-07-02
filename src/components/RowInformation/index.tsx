import React from 'react';
import RowInterface from '@/interfaces/RowInterface';
import styles from './styles.module.css';
const RowInformation = ({ label = '', value }: RowInterface) => {
  return (
    <div className={styles.row_information}>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
};

export default RowInformation;

