import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IconButton.module.css';

type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  to?: string;
  className?: string;
};

export const IconButton = ({
  icon,
  label,
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
  to,
  className = '',
}: IconButtonProps) => {
  const classNames = [
    styles.iconButton,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classNames} aria-label={label}>
        {icon}
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      type="button"
    >
      {icon}
    </button>
  );
}; 