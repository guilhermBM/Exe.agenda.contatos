import BotaoAdicionar from '../../components/BotaoAdicionar'
import Contatos from '../../containers/Contatos'
import ListaContatos from '../../containers/ListaContatos'

const Home = () => (
  <>
    <ListaContatos mostrarFiltros />
    <Contatos />
    <BotaoAdicionar />
  </>
)

export default Home
