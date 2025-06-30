import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      contato: 'Policia Civil',
      status: enums.Status.FAVORITO,
      numero: '190',
      email: 'policiacivil@gov.com',
      id: 1
    },
    {
      contato: 'Samu',
      status: enums.Status.FAVORITO,
      numero: '192',
      email: 'chamasamu@gov.com',
      id: 2
    },
    {
      contato: 'Pizzaria do Luigi',
      status: enums.Status.NAOFAVORITADO,
      numero: '40028922',
      email: 'pizzariasluigi@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.contato.toLowerCase() === action.payload.contato.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato ja existente na sua agenda!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
