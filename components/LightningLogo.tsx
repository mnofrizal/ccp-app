import React from 'react';

interface LightningLogoProps {
  className?: string;
}

const LightningLogo: React.FC<LightningLogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" fill="white" stroke="currentColor" strokeWidth="8" />
      <path
        d="M50 15 L65 50 H35 L50 85"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightningLogo;