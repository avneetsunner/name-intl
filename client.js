var r = require('./ConventionsRender');
var d = require('./definitions');

exports.locale = 'en-US';

exports.define = function(locale, conventionDefinition){
    d.Definitions[locale] = conventionDefinition;
}

exports.defineCustom = function(locale, action){
    d.CustomDefinitions[locale] = action;
} 

exports.formatName = function(prefix, personal, middle, family, suffix) {
    let a = d.CustomDefinitions[this.locale];
    if (a) 
        return a(prefix, personal, middle, family, suffix);
    else{
        let c = GetConvention(this.locale);
        return r.format(c, prefix, personal, middle, family, suffix);
    }
  }

  exports.formatSimple = function(personal, family) {
    let a = d.CustomDefinitions[this.locale];
    if (a)
        return a("", personal, "", family, "");
    else{
        let c = GetConvention(this.locale);
        return r.format(c, "", personal, "", family, "");
    }
  }

  GetConvention = function(locale){
    let c = d.Definitions[locale];
    if(!c) c = d.Definitions['en-US'];
    return c
  };