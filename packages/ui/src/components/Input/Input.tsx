import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = '', ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-[#181818] border ${
            error ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A2A] focus:border-[#B3231C]'
          } rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#B3231C] transition-all duration-200 ${className}`}
          {...props}
        />
        {error ? (
          <p className="text-xs text-red-400 mt-1.5 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-zinc-500 mt-1.5">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
