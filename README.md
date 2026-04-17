# name-intl

A small JavaScript/TypeScript helper for formatting person names based on locale conventions.

`name-intl` gives you:

- sensible defaults for common locales
- simple formatting for first/last names
- full formatting with prefix/middle/suffix
- custom locale definitions
- callback-based custom formatters

## Installation

```bash
npm install name-intl
```

## Quick Start

```ts
import nameintl from "name-intl";

const client = nameintl("en-US");

console.log(client.formatSimple("Avneet", "Sunner"));
// Avneet Sunner

console.log(client.formatName("Mr.", "Avneet", "Singh", "Sunner", "Sr"));
// Mr. Avneet Singh Sunner, Sr
```

## Default Locales

The package includes built-in conventions for:

- `en-US`
- `en-CA`
- `en-PH`
- `zh-TW`
- `zh-CN`

If a locale is not defined, formatting falls back to `en-US`.

## API

### `nameintl(locale?: string): Client`

Creates and returns a `Client` instance.  
Default locale is `en-US`.

### `Client`

#### `formatSimple(personal: string, family: string): string`

Formats a simple two-part name.

#### `formatName(prefix: string, personal: string, middle: string, family: string, suffix: string): string`

Formats a full name with optional prefix, middle, and suffix.

#### `define(locale: string, conventionDefinition: NamePart[]): void`

Adds or overrides a locale convention.

#### `defineCustom(locale: string, action: CallableFunction): void`

Registers a custom formatter callback for a locale.

### Exported Types and Enums

You can also import:

- `Client`
- `NamePart`
- `NameTypes`
- `MissingNameRules`
- `IDefinitions`
- `getStandardDefinitions`

## Custom Locale Definition

```ts
import nameintl, { NameTypes, MissingNameRules } from "name-intl";

const client = nameintl("en-XX");

client.define("en-XX", [
  {
    Order: 0,
    Type: NameTypes.Preffix,
    BeforeSeparator: "",
    AfterSeparator: "",
    MissingNameRule: MissingNameRules.DontShowEmptySpace,
    MissingNameRuleCustom: null,
  },
  {
    Order: 2,
    Type: NameTypes.Personal,
    BeforeSeparator: "",
    AfterSeparator: "",
    MissingNameRule: MissingNameRules.DontShowEmptySpace,
    MissingNameRuleCustom: null,
  },
  {
    Order: 3,
    Type: NameTypes.Middle,
    BeforeSeparator: "",
    AfterSeparator: "",
    MissingNameRule: MissingNameRules.DontShowEmptySpace,
    MissingNameRuleCustom: null,
  },
  {
    Order: 1,
    Type: NameTypes.Family,
    BeforeSeparator: "",
    AfterSeparator: " Separator ",
    MissingNameRule: MissingNameRules.DontShowEmptySpace,
    MissingNameRuleCustom: null,
  },
  {
    Order: 4,
    Type: NameTypes.Suffix,
    BeforeSeparator: "",
    AfterSeparator: "",
    MissingNameRule: MissingNameRules.DontShowEmptySpace,
    MissingNameRuleCustom: null,
  },
]);

console.log(client.formatSimple("Avneet", "Sunner"));
// Sunner Separator Avneet
```

## Custom Formatter Callback

```ts
import nameintl from "name-intl";

const client = nameintl("en-XX");

client.defineCustom(
  "en-XX",
  (prefix: string, personal: string, middle: string, family: string, suffix: string) => {
    return `Bla: ${personal}${family}`;
  }
);

console.log(client.formatName("", "Avneet", "", "Sunner", ""));
// Bla: AvneetSunner
```

## Development

```bash
npm install
npm run build
npm test
```

Available scripts:

- `npm run build` - build ESM, CJS, and type declarations with `tsup`
- `npm test` - run tests using Node test runner + `tsx`
- `npm run prepublishOnly` - run build and tests before publish

