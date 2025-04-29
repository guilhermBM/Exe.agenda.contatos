import Contatos from './Containers/Contatos'
import ListaContatos from './Containers/ListaContatos'
import EstiloGlobal, { Container } from './Styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ListaContatos />
        <Contatos />
      </Container>
    </>
  )
}

export default App
