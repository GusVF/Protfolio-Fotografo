// Contact component was deleted from the project. It was made for test purpose only.
import React from 'react';

const ContactComponent = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4 ">Vamos criar memorias</h1>
      <form className="max-w-[600px] m-auto ">
        <div className="grid grid-cols-2 gap-2">
          <input className="border rounded-lg shadow-lg p-3" type="text" placeholder="Nome" />
          <input className="border rounded-lg shadow-lg p-3" type="email" placeholder="Email" />
        </div>
        <input className="border rounded-lg shadow-lg p-3 w-full my-4" type="text" placeholder="Assunto" />
        <textarea className="border rounded-lg shadow-lg p-3 w-full" placeholder="Mensagem" cols={30} rows={10} ></textarea>
        <button className="border rounded-lg shadow-lg p-3 w-full">Enviar</button>
      </form>
    </div>
  )
}; 

export default ContactComponent;