'use client'

import { LucideIcon } from 'lucide-react'
import styles from './IconButton.module.css'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon
  variant?: 'default' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.iconButton,
          styles[variant],
          styles[size],
          className
        )}
        {...props}
      >
        <Icon className={styles.icon} />
      </button>
    )
  }
)

IconButton.displayName = 'IconButton' 