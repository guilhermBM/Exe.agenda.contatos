import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../Styles'

type TagProps = {
  status?: enums.Status
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === enums.Status.FAVORITO) return variaveis.amarelo
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Contato = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  border: none;
  display: block;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`

export const Numero = styled.input`
  font-size: 14px;
  line-height: 24px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  border: none;
`

export const Email = styled.input`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  border: none;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
