import React from 'react';
import contactComponent from "../components/contactComponent";
import Hero from "../components/hero";

const contact = () => {
  return (
    <div>
      <Hero heading='Contato' message='Preencha o formulário abaixo para cotação de trabalho.'/>
      <contactComponent />
    </div>
  )
};

export default contact;