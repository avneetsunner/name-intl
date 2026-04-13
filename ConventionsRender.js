var conventions = require('./conventions');

exports.format = function(conventionDefinition, prefix, personal, middle, last, suffix)
{    
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
                case conventions.MissingNameRules.ShowEmptySpace:
                    name += item.BeforeSeparator + value + item.AfterSeparator;
                break;
                case conventions.MissingNameRules.Custom:
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

assignValues = function(conventionDefinition, prefix, personal, middle, last, suffix){
    let conventionDefinitionWithName = conventionDefinition;

    let preffixConvention = conventionDefinitionWithName.find((x) => x.Type === conventions.NameTypes.Preffix);
    if (preffixConvention)  preffixConvention['Value'] = prefix;

    var personelConvention = conventionDefinitionWithName.find((x) => x.Type == conventions.NameTypes.Personal);
    if (personelConvention)  personelConvention['Value'] = personal;

    var middleConvention = conventionDefinitionWithName.find((x) => x.Type == conventions.NameTypes.Middle);
    if (middleConvention)  middleConvention['Value'] = middle;

    var familyConvention = conventionDefinitionWithName.find((x) => x.Type == conventions.NameTypes.Family);
    if (familyConvention)  familyConvention['Value'] = last;

    var suffixConvention = conventionDefinitionWithName.find((x) => x.Type == conventions.NameTypes.Suffix);
    if (suffixConvention)  suffixConvention['Value'] = suffix;
    return conventionDefinitionWithName;
}