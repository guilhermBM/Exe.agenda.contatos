import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroAgenda = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>Favoritos</S.Label>
  </S.Card>
)

export default FiltroAgenda
