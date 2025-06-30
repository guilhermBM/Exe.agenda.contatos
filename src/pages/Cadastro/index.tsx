import Formulario from '../../containers/Formulario'
import ListaContatos from '../../containers/ListaContatos'

const Cadastro = () => (
  <>
    <ListaContatos mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
