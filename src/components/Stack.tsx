import React from 'react';
import styles from './Stack.module.css';

type StackProps = {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  spacing?: number | string;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  className?: string;
};

export const Stack = ({
  children,
  direction = 'vertical',
  spacing = 0,
  align = 'start',
  justify = 'start',
  wrap = false,
  className = '',
}: StackProps) => {
  const style = {
    gap: typeof spacing === 'number' ? `${spacing}px` : spacing,
  };

  const classNames = [
    styles.stack,
    styles[`direction-${direction}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    wrap ? styles.wrap : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}; 