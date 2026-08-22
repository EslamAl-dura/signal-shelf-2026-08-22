import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'icon'
}

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
  return <button className={cn('inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50', variant === 'default' && 'bg-ink text-white shadow-sm hover:bg-slate-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400', variant === 'outline' && 'border border-slate-200 bg-white text-ink hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800', variant === 'ghost' && 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800', size === 'default' && 'h-11 px-5 text-sm', size === 'sm' && 'h-9 px-3 text-xs', size === 'icon' && 'h-10 w-10', className)} {...props} />
}
