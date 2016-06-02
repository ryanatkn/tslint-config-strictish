# tslint-config-strictish

An opinionated [tslint](https://github.com/palantir/tslint)
config with strict (but not too strict) conventions that are
similar but not identical to
the [TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines),
[Airbnb's style guide](https://github.com/airbnb/javascript),
and [JavaScript Standard Style](https://github.com/feross/standard).

All available options are included in the config file so it's easy to make adjustments.
Most options are enabled, and the few disabled ones have a comment explaining why.

## Usage
    npm install --save-dev https://github.com/ryanatkn/tslint-config-strictish

```javascript
// tslint.json
{
  "extends": ["tslint-config-strictish"],
  "rules": {
    // overrides
  }
}
```

## License
MIT