import * as enums from '../utils/enums/Contato'

class Contato {
  contato: string
  status: enums.Status
  numero: string
  email: string
  id: number

  constructor(
    contato: string,
    status: enums.Status,
    numero: string,
    email: string,
    id: number
  ) {
    this.contato = contato
    this.status = status
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
