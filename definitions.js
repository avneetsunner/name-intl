const conventions = require('./conventions');
const NameTypes = conventions.NameTypes;
const MissingNameRules = conventions.MissingNameRules;

exports.Definitions = {
    'en-US' : conventions.western,
    'en-PH' : conventions.eastern,
    'en-CA' : conventions.western,
    'zh-CN' : [
        { Order: 0, Type: NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 2, Type: NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 3, Type: NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 1, Type: NameTypes.Family,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 4, Type: NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
    ],
}

exports.CustomDefinitions = {};