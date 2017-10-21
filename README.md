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

## License
MIT