# tslint-config-strictish

An opinionated [tslint](https://github.com/palantir/tslint)
config with strict (but not too strict!) conventions.

Disables all formatting options that overlap with [prettier](https://github.com/prettier/prettier).

## Usage
    npm install --save-dev ryanatkn/tslint-config-strictish#v5.3.1

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
