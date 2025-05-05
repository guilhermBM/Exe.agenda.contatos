import styled from 'styled-components'

import { Props } from '.'

type PropsSemLeCo = Omit<Props, 'numerador' | 'legenda'>

export const Card = styled.div<PropsSemLeCo>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#D3D3D3')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : 'rgb(84 76 76)')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
