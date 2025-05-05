import * as S from './styles'

export type Props = {
  ativo?: boolean
  numerador: number
  legenda: string
}

const FiltroAgenda = ({ ativo, numerador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{numerador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroAgenda
