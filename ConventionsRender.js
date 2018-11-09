var _ = require('lodash');
var conventions = require('./conventions');

exports.format = function(conventionDefinition, prefix, personal, middle, last, suffix)
{    
    //assign values   
    let name = "";
    let conventionDefinitionWithName = assignValues(conventionDefinition, prefix, personal, middle, last, suffix);
    
    _.forEach(_.orderBy(conventionDefinitionWithName, ['Order'], ['asc']), function(item) {
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
    var preffixConvention = _.find(conventionDefinitionWithName, x=> x.Type == conventions.NameTypes.Preffix);
    if (preffixConvention)  preffixConvention['Value'] = prefix;

    var personelConvention = _.find(conventionDefinitionWithName, x=> x.Type == conventions.NameTypes.Personal);
    if (personelConvention)  personelConvention['Value'] = personal;

    var middleConvention = _.find(conventionDefinitionWithName, x=> x.Type == conventions.NameTypes.Middle);
    if (middleConvention)  middleConvention['Value'] = middle;

    var familyConvention = _.find(conventionDefinitionWithName, x=> x.Type == conventions.NameTypes.Family);
    if (familyConvention)  familyConvention['Value'] = last;

    var suffixConvention = _.find(conventionDefinitionWithName, x=> x.Type == conventions.NameTypes.Suffix);
    if (suffixConvention)  suffixConvention['Value'] = suffix;
    return conventionDefinitionWithName;
}