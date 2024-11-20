import { Indirizzo } from "./indirizzo"
export interface Utente {
    id: number
    nome: string
    cognome: string
    dateOfBirth: Date
    email: string
    admin: boolean
    username: string
    password: string
    disabilitato: boolean
    urlAvatar: string
    indirizzi: Indirizzo[]
}