import {MissingNameRules, NameTypes, type NamePart, western, eastern} from './conventions'

export interface IDefinitions {
    [key: string]: NamePart[]
}

export function getStandardDefinitions(): IDefinitions {
    return {
    'en-US' : western,
    'en-PH' : western,
    'en-CA' : western,
    'zh-TW' : eastern,
    'zh-CN' : [
        { Order: 0, Type: NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 2, Type: NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 3, Type: NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 1, Type: NameTypes.Family,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 4, Type: NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
    ],
}
}

export const CustomDefinitions: IDefinitions = {};