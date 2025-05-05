import FiltroAgenda from '../../components/FiltroAgenda'

import * as S from './styles'

const ListaContatos = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroAgenda legenda="favoritos" numerador={1} />
        <FiltroAgenda legenda="todos" numerador={2} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default ListaContatos
