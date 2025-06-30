import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../Styles'
import { Campo } from '../../Styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [contato, setContato] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(enums.Status.NAOFAVORITADO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        contato,
        status,
        numero,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={contato}
          onChange={(evento) => setContato(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Campo
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          type="number"
          placeholder="Numero de telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email do contato"
        />
        <Opcoes>
          {Object.values(enums.Status).map((status) => (
            <Opcao key={status}>
              <input
                value={status}
                name="status"
                type="radio"
                onChange={(evento) =>
                  setStatus(evento.target.value as enums.Status)
                }
                id={status}
                defaultChecked={status === enums.Status.NAOFAVORITADO}
              />{' '}
              <label htmlFor={status}>{status}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
