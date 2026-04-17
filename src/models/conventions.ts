export enum NameTypes {
    Personal = "personal",
    Middle = 'middle',
    Family = 'family',
    Preffix = 'preffix',
    Suffix = 'suffix',
}

export enum MissingNameRules {
    DontShowEmptySpace = "DontShowEmptySpace",
    ShowEmptySpace = "ShowEmptySpace",
    Custom = "Custom" 
}

export interface NamePart {
    Order: number
    Type: NameTypes
    BeforeSeparator: string
    AfterSeparator: string
    MissingNameRule: MissingNameRules
    MissingNameRuleCustom: string | null
}

export const western: NamePart[] = [
    { Order: 0, Type: NameTypes.Preffix,  BeforeSeparator: "",   AfterSeparator: " ", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 1, Type: NameTypes.Personal, BeforeSeparator: "",   AfterSeparator: " ", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 2, Type: NameTypes.Middle,   BeforeSeparator: "",   AfterSeparator: " ", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 3, Type: NameTypes.Family,   BeforeSeparator: "",   AfterSeparator: "",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 4, Type: NameTypes.Suffix,   BeforeSeparator: ", ", AfterSeparator: "",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
];

export const eastern: NamePart[] = [
    { Order: 0, Type: NameTypes.Preffix,  BeforeSeparator: "",   AfterSeparator: " ",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 2, Type: NameTypes.Personal, BeforeSeparator: "",   AfterSeparator: "",   MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 3, Type: NameTypes.Middle,   BeforeSeparator: " ",  AfterSeparator: "",   MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 1, Type: NameTypes.Family,   BeforeSeparator: "",   AfterSeparator: ", ", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 4, Type: NameTypes.Suffix,   BeforeSeparator: ", ", AfterSeparator: "",   MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
];