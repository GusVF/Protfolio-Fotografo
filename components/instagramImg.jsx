// InstagramImg.js
import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import HoverModal from './HoverModal';

const InstagramImg = ({ socialImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="w-full h-full rounded-xl"
        src={socialImg}
        alt="/"
        layout="responsive"
      />

      {/* overlay */}
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0">
        <HoverModal text="Redireciona para o seu Instagram" show={isHovered}>
          <p className="text-gray-300">
            <FaInstagram size={30} className="z-10" />
          </p>
        </HoverModal>
      </div>
    </div>
  );
};

export default InstagramImg;
