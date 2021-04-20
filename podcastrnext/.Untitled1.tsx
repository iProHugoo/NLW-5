// 1. Porque Typescript?

type User = {
  name: string;
  address: {
    city: string;
    state: string;
  }
}

// Retornar o texto de boas-vindas do site

function createWelcomeMessage(user) {
  return `Boas-vindas, ${user.name}. Cidade: ${user.address.city} - ${user.address.state}!`
}

const welcomeMessage = createWelcomeMessage({
  name: 'Hugo Coelho',
  address: {
    city: 'Uberlandia',
    state: 'MG'
  }
})

// Tipagem das Propriedades

type ButtonProps = {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>{props.title}</button>
  )
}

function App() {
  return (
    <div>
      <Button title="Button 1" />
    </div>
  )
}

// tsx = typescript + jsx (HTML dentro do Javascript)