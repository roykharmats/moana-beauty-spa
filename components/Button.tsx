import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '',
  target = '_self'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 font-serif font-medium";
  
  const variants = {
    // Updated primary to Gold for high-end CTA visibility
    primary: "bg-moana-gold text-white hover:bg-moana-black border border-transparent hover:shadow-lg",
    outline: "bg-transparent border border-moana-black text-moana-black hover:bg-moana-black hover:text-white",
    text: "bg-transparent text-moana-black underline hover:text-moana-gold p-0"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};