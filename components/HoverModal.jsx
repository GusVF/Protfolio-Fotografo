// HoverModal.js
import React, { useState } from 'react';

const HoverModal = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="rounded-xl absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-gray-300 shadow-md z-10">
          <p className="text-black whitespace-nowrap">{text}</p>
        </div>
      )}
    </div>
  );
};

export default HoverModal;
