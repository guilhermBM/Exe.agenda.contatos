import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../Styles'

type Props = ContatoClass

const Contato = ({
  contato: contatoOriginal,
  status,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (contatoOriginal.length > 0) {
      setContato(contatoOriginal)
    }
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [contatoOriginal, numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setContato(contatoOriginal)
  }

  return (
    <S.Card>
      <S.Contato
        disabled={!estaEditando}
        value={contato}
        onChange={(evento) => setContato(evento.target.value)}
      ></S.Contato>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Numero
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      ></S.Numero>
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></S.Email>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    contato,
                    email,
                    id,
                    numero,
                    status
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
