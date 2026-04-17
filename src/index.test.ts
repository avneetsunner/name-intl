import { test } from 'node:test'
import assert from 'node:assert';
import nameintl  from './index';
import { NameTypes, MissingNameRules} from './models/conventions';

function testHelperFormatName(locale: string, preffix: string, personal: string, middle: string, family: string, suffix: string, expected: string) {
    const client = nameintl(locale);
    const actual = client.formatName(preffix, personal, middle, family, suffix)
    assert.strictEqual(actual, expected)
};

function testHelperFormatNameSimple(locale: string, personal: string, family: string, expected: string) {
    const client = nameintl(locale);
    const actual = client.formatSimple(personal, family)
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
    const client = nameintl('en-XX');
    client.define('en-XX', [
        { Order: 0, Type: NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 2, Type: NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 3, Type: NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "",   MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 1, Type: NameTypes.Family, BeforeSeparator: "", AfterSeparator: " en_XX Separator ", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 4, Type: NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
    ]);

    const actual = client.formatName("", "Avneet", "", "Sunner", "")
    assert.strictEqual(actual, "Sunner en_XX Separator Avneet")
})

test('formatSimple should return defined format', (t) => {
    const client = nameintl('en-XX');
    client.define('en-XX', [
        { Order: 0, Type: NameTypes.Preffix,  BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 2, Type: NameTypes.Personal, BeforeSeparator: "", AfterSeparator: "",  MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 3, Type: NameTypes.Middle,   BeforeSeparator: "", AfterSeparator: "",   MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 1, Type: NameTypes.Family, BeforeSeparator: "", AfterSeparator: " en_XX Separator ", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null },
        { Order: 4, Type: NameTypes.Suffix,   BeforeSeparator: "", AfterSeparator: "", MissingNameRule: MissingNameRules.DontShowEmptySpace, MissingNameRuleCustom: null }
    ]);

    const actual = client.formatSimple("Avneet", "Sunner")
    assert.strictEqual(actual, "Sunner en_XX Separator Avneet")
})

test('formatName should return en-US format when not defined', (t) => {
    const client = nameintl('en-XX');
    const actual = client.formatName("", "Avneet", "", "Sunner", "")
    assert.strictEqual(actual, "Avneet Sunner")
})

test('formatSimple should return en-US format when not defined', (t) => {
    const client = nameintl('en-XX');
    const actual = client.formatSimple("Avneet", "Sunner")
    assert.strictEqual(actual, "Avneet Sunner")
})

test('formatName should return callback format', (t) => {
    const client = nameintl('en-XX');
    client.defineCustom('en-XX', function(prefix: string, personal: string, middle: string, last: string, suffix: string){
        return "Bla: " + personal + last;
    });

    const actual = client.formatName("", "Avneet", "", "Sunner", "")
    assert.strictEqual(actual, "Bla: AvneetSunner")
})

test('formatSimple should return callback format', (t) => {
    const client = nameintl('en-XX');
    client.defineCustom('en-XX', function(prefix: string, personal: string, middle: string, last: string, suffix: string){
        return "Bla: " + personal + last;
    });
    const actual = client.formatSimple("Avneet", "Sunner")
    assert.strictEqual(actual, "Bla: AvneetSunner")
})