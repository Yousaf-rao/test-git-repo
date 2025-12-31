import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

// OLD VERSION - Your manual code
export const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  // Your custom logic
  const customFunction = () => {
    console.log('This is my custom code!');
// NEW VERSION - Updated design
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
}: ButtonProps) => {
  const classes: Record<string, string> = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button onClick={customFunction} className="old-button">
    <button className={`new-button ${classes[variant || 'primary']} ${sizeClasses[size || 'md']}`}>
      {label}
    </button>
  );
};

export default Button;