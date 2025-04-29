import FiltroAgenda from '../../components/FiltroAgenda'

import * as S from './styles'

const ListaContatos = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroAgenda />
        <FiltroAgenda ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default ListaContatos
