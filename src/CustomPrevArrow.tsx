// @ts-nocheck
import React from 'react';

interface CustomArrowProps {
  onClick: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}
      className="arrow left-0 transform -translate-y-1/2 absolute top-1/2 cursor-pointer text-white bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-700 transition duration-300 z-40"
    >
      ←
    </div>
  );
};

export default CustomPrevArrow;