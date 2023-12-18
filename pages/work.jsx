import React from 'react'
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";

const work = () => {
  return (
    <div>
      <Hero heading="Meus trabalhos" message="Veja abaixo alguns dos meus trabalhos mais recentes"  />
      <Portfolio />
    </div>
  )
}

export default work;