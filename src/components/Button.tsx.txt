import React from 'react';

interface ButtonProps {
  label: string;
}

// OLD VERSION - Your manual code
export const Button: React.FC<ButtonProps> = ({ label }) => {
  // Your custom logic
  const customFunction = () => {
    console.log('This is my custom code!');
  };

  return (
    <button onClick={customFunction} className="old-button">
      {label}
    </button>
  );
};

export default Button;