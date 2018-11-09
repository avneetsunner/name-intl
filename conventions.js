exports.NameTypes = {
    Personal: 'personal',
    Middle: 'middle',  
    Family: 'family',
    Preffix: 'preffix',
    Suffix: 'suffix'
};

exports.MissingNameRules = {
    DontShowEmptySpace : "DontShowEmptySpace",
    ShowEmptySpace : "ShowEmptySpace",
    Custom : "Custom" 
}

exports.western = [
    { Order: 0, Type: this.NameTypes.Preffix,  BeforeSeparator: "",   AfterSeparator: " ", MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 1, Type: this.NameTypes.Personal, BeforeSeparator: "",   AfterSeparator: " ", MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 2, Type: this.NameTypes.Middle,   BeforeSeparator: "",   AfterSeparator: " ", MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 3, Type: this.NameTypes.Family,   BeforeSeparator: "",   AfterSeparator: "",  MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 4, Type: this.NameTypes.Suffix,   BeforeSeparator: ", ", AfterSeparator: "",  MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
];

exports.eastern = [
    { Order: 0, Type: this.NameTypes.Preffix,  BeforeSeparator: "",   AfterSeparator: " ",  MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 2, Type: this.NameTypes.Personal, BeforeSeparator: "",   AfterSeparator: "",   MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 3, Type: this.NameTypes.Middle,   BeforeSeparator: " ",  AfterSeparator: "",   MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 1, Type: this.NameTypes.Family,   BeforeSeparator: "",   AfterSeparator: ", ", MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 4, Type: this.NameTypes.Suffix,   BeforeSeparator: ", ", AfterSeparator: "",   MissingNameRule: this.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
];