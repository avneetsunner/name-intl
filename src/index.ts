import {Client} from './client'

export default function init(locale: string = "en-US") {
    const client = new Client(locale)
    return client
}

export { Client }
export type { IDefinitions } from "./models/definitions"
export { getStandardDefinitions } from "./models/definitions"
export type { NamePart } from "./models/conventions"
export { NameTypes, MissingNameRules } from "./models/conventions"