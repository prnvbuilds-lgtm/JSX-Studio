import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      showArrow = false,
      isLoading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles: pill-shaped, uppercase tracking, focus ring
    const baseStyles =
      'inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-xs px-5 py-2.5 gap-2',
      md: 'text-xs md:text-sm px-7 py-3.5 gap-2.5',
      lg: 'text-sm md:text-base px-9 py-4 gap-3',
    }[size];

    const variantStyles = {
      primary:
        'bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-lg shadow-red-950/40 hover:shadow-red-900/60 focus-visible:ring-[#B3231C]',
      secondary:
        'bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white focus-visible:ring-white',
      ghost:
        'bg-transparent text-zinc-300 hover:text-white hover:bg-white/5 focus-visible:ring-zinc-400',
      gold:
        'bg-[#C9A66B] text-black hover:bg-[#b08f53] shadow-lg shadow-amber-950/30 focus-visible:ring-[#C9A66B]',
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{children}</span>
        {showArrow && !isLoading && (
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
