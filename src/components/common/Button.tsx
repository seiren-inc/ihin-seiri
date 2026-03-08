import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  accent:  'bg-accent text-white hover:bg-[#a56f82]',
  secondary: 'bg-bg-section text-text border border-border hover:bg-border',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClass = [
    'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-colors duration-200',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
