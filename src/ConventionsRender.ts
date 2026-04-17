//var conventions = require('./models/conventions');
//import conventions
import { MissingNameRules, type NamePart, NameTypes } from './models/conventions';

interface NamePartWithValue extends NamePart {
    Value: string | undefined
}

export function format(conventionDefinition: NamePart[], prefix: string, personal: string, middle: string, last: string, suffix: string) {
    //assign values   
    let name = "";
    let conventionDefinitionWithName = assignValues(conventionDefinition, prefix, personal, middle, last, suffix);

    conventionDefinitionWithName.sort((a,b) => { return a.Order > b.Order? 1 : -1 })

    conventionDefinitionWithName.forEach(item => {
        var value = item.Value
        if(value){
            name += item.BeforeSeparator + value + item.AfterSeparator;
        }
        else{
            switch(item.MissingNameRule){
                case MissingNameRules.ShowEmptySpace:
                    name += item.BeforeSeparator + value + item.AfterSeparator;
                break;
                case MissingNameRules.Custom:
                    if(item.MissingNameRuleCustom)
                        name += item.BeforeSeparator + value + item.MissingNameRuleCustom + item.AfterSeparator;
                    else
                        name += item.BeforeSeparator + value + item.AfterSeparator;
                break;
                default:
            }
        }
    });

    return name;
}

function assignValues(conventionDefinition: NamePart[], prefix: string, personal: string, middle: string, last: string, suffix: string) {
    const conventionDefinitionWithName: NamePartWithValue[] = []

    for (const namePart of conventionDefinition) {
        const namePartWithValue: NamePartWithValue = {
            ...namePart,
            Value: undefined
        }
        conventionDefinitionWithName.push(namePartWithValue)
        
    }

    let preffixConvention = conventionDefinitionWithName.find((x) => x.Type === NameTypes.Preffix);
    if (preffixConvention) preffixConvention.Value = prefix;

    var personelConvention = conventionDefinitionWithName.find((x) => x.Type == NameTypes.Personal);
    if (personelConvention)  personelConvention.Value = personal;

    var middleConvention = conventionDefinitionWithName.find((x) => x.Type == NameTypes.Middle);
    if (middleConvention)  middleConvention.Value = middle;

    var familyConvention = conventionDefinitionWithName.find((x) => x.Type == NameTypes.Family);
    if (familyConvention)  familyConvention.Value = last;

    var suffixConvention = conventionDefinitionWithName.find((x) => x.Type == NameTypes.Suffix);
    if (suffixConvention)  suffixConvention.Value = suffix;
    return conventionDefinitionWithName;
}
