import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={cn('inline-flex items-center rounded-full bg-teal-500/10 px-2.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-300', className)} {...props} /> }
