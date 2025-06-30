import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../Styles/'

import { RootReducer } from '../../store'

const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.contato.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <MainContainer>
      <h2> Agenda de Contatos</h2>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.contato}>
            <Contato
              contato={c.contato}
              status={c.status}
              numero={c.numero}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Contatos
