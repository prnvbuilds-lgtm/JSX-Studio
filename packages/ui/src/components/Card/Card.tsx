import React, { forwardRef } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'surface-alt' | 'elevated' | 'glass';
  withHover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'surface', withHover = false, className = '', ...props }, ref) => {
    const baseStyles = 'rounded-xl border transition-all duration-300 relative overflow-hidden';

    const variantStyles = {
      surface: 'bg-[#181818] border-[#2A2A2A] text-white',
      'surface-alt': 'bg-[#1F1F1F] border-[#2E2E2E] text-white',
      elevated: 'bg-[#151515] border-[#262626] shadow-xl shadow-black/60 text-white',
      glass: 'bg-[#121212]/80 backdrop-blur-md border-white/10 text-white',
    }[variant];

    const hoverStyles = withHover
      ? 'hover:-translate-y-1 hover:border-[#3A3A3A] hover:shadow-2xl hover:shadow-red-950/20'
      : '';

    return (
      <div ref={ref} className={`${baseStyles} ${variantStyles} ${hoverStyles} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`p-6 pb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3 className={`font-serif text-xl font-bold tracking-tight text-white ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`text-sm text-zinc-400 mt-1.5 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`p-6 pt-2 border-t border-[#262626] flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
