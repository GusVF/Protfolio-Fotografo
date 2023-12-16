import Head from 'next/head';
import Hero from "../components/hero";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Fotografo.</title>
      </Head>
      <Hero 
        heading="Seu nome aqui" 
        message="Na fotografia,  encontro a mágica de capturar o tempo e contar histórias com imagens."
      />
    </div>
  )
}
