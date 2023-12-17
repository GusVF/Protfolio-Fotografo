import Image from "next/image";
import React from 'react';
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({socialImg}) => {
  return (
    <div className="relative">
      <Image 
        className="w-full h-full" layout="responsive"
        src={socialImg} 
        alt="/" />
      {/* overlay */}
      <div />
      <p><FaInstagram size={30}/></p>
    </div>
  );
};

export default InstagramImg;