// SSR 
// SSG

import { useEffect } from "react";

export default function Home(props) {
  console.log(props.episodes);

  /* 

  // SPA (Single Page Application)

  // Quando algo mudar na aplicação, algo também irá acontecer (Efeitos Colaterais)
  // Primeiro parâmetro é o que quer executar, o segundo é quando (array)
  // Um array vazio é para executar assim que o componente for exibido em tela
  useEffect(() => {
    fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))
  }, [])

  */
  return (
    <h1>Index</h1>
  )
}

// SSR e SSG

// Requisição é feita já no servidor pelo SSR
// export async function getServerSideProps() {
// Para não fazer uma requisição nova para API em todo acesso, aqui é utilizado o SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    // Revalidade é definir o tempo de uma nova requisição
    // A cada 8hrs uma nova chamada para API vai ser feita, caso contrário uma API estática vai ser exibida
    revalidate: 60 * 60 * 8,
  }
}
