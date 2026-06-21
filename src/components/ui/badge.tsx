import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-accent/20 text-accent border border-accent/30',
        secondary: 'bg-bg-tertiary text-text-secondary border border-border-secondary',
        destructive: 'bg-red/20 text-red border border-red/30',
        outline: 'text-text-primary border border-border-primary',
        success: 'bg-green/20 text-green border border-green/30',
        warning: 'bg-yellow/20 text-yellow border border-yellow/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
