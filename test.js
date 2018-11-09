const nameintl= require('./index');
var conventions = require('./conventions');

console.log("----------------en-US----------------------------");
let client = nameintl.init("en-US");
let name = client.formatName("", "Avneet", "", "Sunner", "")
console.log(name)

name = client.formatSimple("Avneet", "Sunner")
console.log(name)

console.log("----------------en-CA----------------------------");
client = nameintl.init("en-CA");
name = client.formatName("", "Avneet", "", "Sunner", "")
console.log(name)

name = client.formatSimple("Avneet", "Sunner")
console.log(name)

console.log("----------------en-GB----------------------------");
client = nameintl.init('en-GB');
client.define('en-GB', [
    { Order: 0, Type: conventions.NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 2, Type: conventions.NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 3, Type: conventions.NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "",   MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 1, Type: conventions.NameTypes.Family, BeforeSeparator: "", AfterSeparator: " en_GB Separator ", MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
    { Order: 4, Type: conventions.NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
]);

name = client.formatName("", "Avneet", "", "Sunner", "")
console.log(name)

name = client.formatSimple("Avneet", "Sunner")
console.log(name)

console.log("-------------------locale not found------------------")
client = nameintl.init('en-XX');

name = client.formatName("", "Avneet", "", "Sunner", "")
console.log(name)

name = client.formatSimple("Avneet", "Sunner")
console.log(name)

console.log("-------------------custom callback------------------")
client = nameintl.init('en-XY');
client.defineCustom('en-XY', function(prefix, personal, middle, last, suffix){
    return "Bla: " + personal + last;
});

name = client.formatName("", "Avneet", "", "Sunner", "")
console.log(name)

name = client.formatSimple("Avneet", "Sunner")
console.log(name)