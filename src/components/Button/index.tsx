import React from 'react';
import styles from './styles.module.css';
const Button = ({
  onClick,
  children,
  type = 'submit',
  ...props
}: {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;

