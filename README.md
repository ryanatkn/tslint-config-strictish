# tslint-config-strictish

An opinionated [tslint](https://github.com/palantir/tslint)
config with strict (but not too strict!) conventions.

:warning: **DEPRECATED** use
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
instead :warning:

Disables all formatting options that overlap with [prettier](https://github.com/prettier/prettier).

## Usage
    npm install --save-dev ryanatkn/tslint-config-strictish#v5.3.1

```javascript
// tslint.json
{
  "extends": ["tslint-config-strictish"],
  "rules": {
    // overrides
    "curly": false
  }
}
```

## License

public domain ([The Unlicense](license))
