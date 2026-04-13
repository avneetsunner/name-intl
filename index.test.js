const test = require('node:test');
const assert = require('node:assert');
const nameintl= require('./index');
var conventions = require('./conventions');

function testHelperFormatName(locale, preffix, personal, middle, family, suffix, expected) {
    let client = nameintl.init(locale);
    let actual = client.formatName(preffix, personal, middle, family, suffix)
    assert.strictEqual(actual, expected)
};

function testHelperFormatNameSimple(locale, personal, family,expected) {
    let client = nameintl.init(locale);
    let actual = client.formatSimple(personal, family)
    assert.strictEqual(actual, expected)
};

test('formatName should return en-US format with personal and family name only', (t) => {
    testHelperFormatName("en-US", "", "Avneet", "", "Sunner", "", "Avneet Sunner")    
})

test('formatName should return en-US format with all names', (t) => {
    testHelperFormatName("en-US", "Mr.", "Avneet", "Singh", "Sunner", "Sr", "Mr. Avneet Singh Sunner, Sr")    
})

test('formatSimple should return en-US format', (t) => {
    testHelperFormatNameSimple("en-US", "Avneet", "Sunner", "Avneet Sunner")    
})

test('formatName should return en-CA format', (t) => {
    testHelperFormatName("en-CA", "", "Avneet", "", "Sunner", "", "Avneet Sunner")    
})

test('formatSimple should return en-CA format', (t) => {
    testHelperFormatNameSimple("en-CA", "Avneet", "Sunner", "Avneet Sunner")    
})

test('formatName should return defined format', (t) => {
    let client = nameintl.init('en-XX');
    client.define('en-XX', [
        { Order: 0, Type: conventions.NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 2, Type: conventions.NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 3, Type: conventions.NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "",   MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 1, Type: conventions.NameTypes.Family, BeforeSeparator: "", AfterSeparator: " en_XX Separator ", MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 4, Type: conventions.NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
    ]);

    let actual = client.formatName("", "Avneet", "", "Sunner", "")
    assert.strictEqual(actual, "Sunner en_XX Separator Avneet")
})

test('formatSimple should return defined format', (t) => {
    let client = nameintl.init('en-XX');
    client.define('en-XX', [
        { Order: 0, Type: conventions.NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 2, Type: conventions.NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 3, Type: conventions.NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "",   MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 1, Type: conventions.NameTypes.Family, BeforeSeparator: "", AfterSeparator: " en_XX Separator ", MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 4, Type: conventions.NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: conventions.MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
    ]);

    let actual = client.formatSimple("Avneet", "Sunner")
    assert.strictEqual(actual, "Sunner en_XX Separator Avneet")
})

test('formatName should return en-US format when not defined', (t) => {
    let client = nameintl.init('en-XZ');
    let actual = client.formatName("", "Avneet", "", "Sunner", "")
    assert.strictEqual(actual, "Avneet Sunner")
})

test('formatSimple should return en-US format when not defined', (t) => {
    let client = nameintl.init('en-XZ');
    let actual = client.formatSimple("Avneet", "Sunner")
    assert.strictEqual(actual, "Avneet Sunner")
})

test('formatName should return callback format', (t) => {
    let client = nameintl.init('en-XY');
    client.defineCustom('en-XY', function(prefix, personal, middle, last, suffix){
        return "Bla: " + personal + last;
    });

    let actual = client.formatName("", "Avneet", "", "Sunner", "")
    assert.strictEqual(actual, "Bla: AvneetSunner")
})

test('formatSimple should return callback format', (t) => {
    let client = nameintl.init('en-XY');
    client.defineCustom('en-XY', function(prefix, personal, middle, last, suffix){
        return "Bla: " + personal + last;
    });
    let actual = client.formatSimple("Avneet", "Sunner")
    assert.strictEqual(actual, "Bla: AvneetSunner")
})