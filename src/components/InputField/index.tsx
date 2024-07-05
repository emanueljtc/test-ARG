import React from 'react';
import { useController } from 'react-hook-form';
import { Control } from 'react-hook-form';
import styles from './styles.module.css';
const InputField = ({
  name,
  label,
  type,
  control,
  ...props
}: {
  label: string;
  type: string;
  name: string;
  control: Control;
}) => {
  const { field, fieldState } = useController({ name, control });
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          className={styles.input_field}
          rows={5}
          {...field}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          className={styles.input_field}
          {...field}
          {...props}
        />
      )}
      {fieldState.error && (
        <span className={styles.error}>{fieldState.error.message}</span>
      )}
    </>
  );
};

export default InputField;


