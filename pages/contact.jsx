import React from 'react';
import Contact from "../components/contact";
import Hero from "../components/hero";

const contact = () => {
  return (
    <div>
      <Hero heading='Contato' message='Preencha o formulário abaixo para cotação de trabalho.'/>
      <Contact />
    </div>
  )
};

export default contact;