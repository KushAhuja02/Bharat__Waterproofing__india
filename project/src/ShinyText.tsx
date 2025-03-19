import React from 'react';
import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`.trim()}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
