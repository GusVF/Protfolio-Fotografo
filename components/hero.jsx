// Hero.js
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import HoverModal from "./HoverModal";
import Image from "next/image";
import whatsApp from "../public/whatsapp.png";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
          {/* Mail icon with hover modal */}
          <HoverModal text="Clicando aqui redireciona para seu e-mail!">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </HoverModal>

          {/* WhatsApp icon with hover modal */}
          <HoverModal text="Clicando aqui redireciona para seu WhatsApp!">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Image
                src={whatsApp}
                target="_blank"
                width={25}
                height={25}
                alt="WhatsApp"
              />
            </div>
          </HoverModal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
