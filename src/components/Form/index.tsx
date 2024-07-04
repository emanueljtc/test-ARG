import React from 'react';
import FormProps from '@/interfaces/FormInterface';
import styles from './styles.module.css';
import { FormProvider, useController, useForm } from 'react-hook-form';
const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.form_contact}
    >
      {children}
    </form>
  );
};

export default Form;

