'use client'

import { useThemeContext } from '../../ThemeContext';
import styles from '../../page.module.css';

export const Toggle: React.FC = () => {
  const { theme, handleChange } = useThemeContext();

  return (
    <div className={styles.containerSwitch}>
      <input 
        type="checkbox" 
        className={styles.modeToggle} 
        id="modeToggle" 
        onChange={handleChange} 
        checked={theme === "dark"} 
      />
      <label className={styles.labelToggle} htmlFor="modeToggle"></label>
    </div>
  );
}; 