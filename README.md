# tslint-config-strictish

An opinionated [tslint](https://github.com/palantir/tslint)
config with strict (but not too strict) conventions that are
similar but not identical to
the [TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines),
[Airbnb's style guide](https://github.com/airbnb/javascript),
and [JavaScript Standard Style](https://github.com/feross/standard).

All available options are either included or commented out so it's easy to make adjustments.
Most options are enabled, and the few disabled ones either have a comment explaining why or
are considered unnecessarily strict.

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