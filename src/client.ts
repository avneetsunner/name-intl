// var r = require('./ConventionsRender');
// var d = require('./models/definitions');

import { format } from "./ConventionsRender";
import { getStandardDefinitions, type IDefinitions } from "./models/definitions";
import { type NamePart } from "./models/conventions";

export class Client {
    locale: string = "en-US"
    customDefinitions: {[key: string]:CallableFunction} = {}
    standardDefinitions: IDefinitions;

    constructor(locale: string) {
        this.locale = locale
        this.standardDefinitions = getStandardDefinitions()
    }

    define(locale: string, conventionDefinition: NamePart[]) {
        this.standardDefinitions[locale] = conventionDefinition
    }

    defineCustom(locale: string, action: CallableFunction){
        this.customDefinitions[locale] = action
    }

    private getConvention(locale: string): NamePart[] {
        let convention = this.standardDefinitions[locale]

        if (convention)
            return convention

        convention = this.standardDefinitions['en-US'];

        if (convention)
            return convention
        
        throw new Error("No convention defined")
    }

    formatName(prefix: string, personal: string, middle: string, family: string, suffix: string){
        const action = this.customDefinitions[this.locale]
        if (action)
            return action(prefix, personal, middle, family, suffix)
        else {
            const convention = this.getConvention(this.locale)
            return format(convention, prefix, personal, middle, family, suffix)
        }
    }

    formatSimple(personal: string, family: string){
        const action = this.customDefinitions[this.locale]
        if (action)
            return action("", personal, "", family, "")
        else {
            const convention = this.getConvention(this.locale)
            return format(convention, "", personal, "", family, "")
        }
    }
}
