# tslint-config-strictish

An opinionated [tslint](https://github.com/palantir/tslint)
config with strict (but not too strict!) conventions.

Disables all formatting options that overlap with [prettier](https://github.com/prettier/prettier).

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