import React from 'react';
import styles from './styles.module.css';

type TWeight = '400' | '600' | '800';

type TColor = 'red-pop' | 'yellow-star' | 'black' | 'gray';
const Title = ({
  children,
  variant,
  fontWeight,
  color = 'black',
}: {
  children: React.ReactNode;
  variant: string;
  fontWeight?: TWeight;
  color?: TColor;
}) => {
  const fontWeightValue =
    fontWeight === '400' ? 'normal' : fontWeight === '600' ? 'bold' : '400';
  const colorValue = `var(--${color})`;
  return (
    <h1
      className={styles[variant]}
      style={{
        fontWeight: fontWeightValue,
        color: colorValue,
      }}
    >
      {children}
    </h1>
  );
};

export default Title;

