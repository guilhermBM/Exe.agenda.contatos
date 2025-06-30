import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import FiltroAgenda from '../../components/FiltroAgenda'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../Styles'

type Props = {
  mostrarFiltros: boolean
}

const ListaContatos = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroAgenda
                valor={enums.Status.FAVORITO}
                criterio="status"
                legenda="favoritos"
              />
              <FiltroAgenda
                valor={enums.Status.NAOFAVORITADO}
                criterio="status"
                legenda="nao favoritado"
              />
              <FiltroAgenda criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar aos Contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default ListaContatos
