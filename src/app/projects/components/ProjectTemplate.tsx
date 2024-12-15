'use client'

import React from 'react'
import styles from './ProjectTemplate.module.css'
import { Toggle } from '../../components/Toggle/Toggle'
import { ArrowLeft } from 'lucide-react';
import { IconButton } from '../../components/IconButton/IconButton';

interface ProjectTemplateProps {
  children: React.ReactNode
}

export default function ProjectTemplate({ children }: ProjectTemplateProps) {
  return (
    <div className={styles.grid}>
      <Toggle />
      <div className={styles.title}>
        <IconButton
          icon={ArrowLeft}
          variant="default"
          size="md"
          onClick={() => window.history.back()}
        />
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <span className={styles.topSpacer} />
      <div className={styles.startCarpet} />
      <div className={styles.endCarpet} />
      <span className={styles.endSpacer} />
    </div>
  );
} 