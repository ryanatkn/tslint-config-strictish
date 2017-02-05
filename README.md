# tslint-config-strictish

An opinionated [tslint](https://github.com/palantir/tslint)
config with strict (but not too strict!) conventions that are
mostly compatible with
the [TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines),
[Airbnb's style guide](https://github.com/airbnb/javascript),
and [JavaScript Standard Style](https://github.com/feross/standard).

All available options are included in the config file so it's easy to make adjustments.
Most options are enabled, and the disabled ones have a comment explaining why.

## Usage
    npm install --save-dev https://github.com/ryanatkn/tslint-config-strictish

```javascript
// tslint.json
{
  "extends": ["tslint-config-strictish"],
  "rules": {
    // overrides
    "curly": true
  }
}
```

Some rules like `no-for-in-array` require typechecking,
which can be enabled like this: `tslint --project tsconfig.json --type-check`.

## License
MIT