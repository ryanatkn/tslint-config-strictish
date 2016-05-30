module.exports = {
  "rules": {
    "align": [
      true,
      "parameters",
      "arguments",
      "statements",
    ],
    "ban": false,
    "class-name": true,
    "comment-format": [
      true,
      "check-space",
      // "check-lowercase",
      // "check-uppercase",
    ],
    "curly": true,
    "eofline": true, // may be annoying depending on text editor, but see rationale here: http://stackoverflow.com/questions/4700312/empty-new-line-at-the-end-of-the-java-source-files
    "forin": false,
    "indent": [ // "one is right and the other is wrong" -Richard Hendricks
      true,
      "spaces",
      // "tabs",
    ],
    // TODO some patterns make the IPrefix useful and consistency may be the best option,
    // despite the TypeScript coding guidelines recommending against this
    "interface-name": [
      false,
      "always-prefix",
      // "never-prefix",
    ],
    "jsdoc-format": true,
    "label-position": true,
    "label-undefined": true,
    "max-line-length": [
      true,
      100,
    ],
    "member-access": [
      true,
      "check-accessor",
      "check-constructor",
    ],
    // TODO not happy with arrow functions being treated as instance fields instead of methods
    // could instead a bind decorator instead of `aBoundMethod = () => ...`
    "member-ordering": [
      false,
      {
        // "order": "fields-first",
        // "order": "statics-first",
        // "order": "instance-sandwich",
        "order": [      
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
        ],
      },
    ],
    "new-parens": true,
    "no-angle-bracket-type-assertion": true,
    "no-any": false,
    "no-arg": true,
    "no-bitwise": true, // favor explicit type conversions
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": false,
    "no-console": [ // explicitly opt-in to commit console statements
      true,
      // doesn't seem to support a regexp or catch-all here, pulled from Chrome/FF
      "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group",
      "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "memory", "profile",
      "profileEnd", "table", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd",
      "trace", "warn",
    ],
    "no-construct": true,
    "no-constructor-vars": true,
    "no-debugger": true,
    "no-default-export": false,
    "no-duplicate-key": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-inferrable-types": [
      true,
      "ignore-params",
    ],
    "no-internal-module": true,
    "no-invalid-this": [
      true,
      "check-function-in-method",
    ],
    "no-namespace": [
      true,
      // "allow-declarations",
    ],
    "no-null-keyword": false, // goes against TypeScript coding guidelines but eh
    "no-reference": true,
    "no-require-imports": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unreachable": true,
    "no-unused-expression": true,
    "no-unused-variable": [
      true,
      "check-parameters",
      "react",
      {"ignore-pattern": "^_"}, // prefix params with an underscore to mark them as ignored
    ],
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "no-var-requires": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-finally",
      "check-open-brace",
      "check-whitespace",
    ],
    "one-variable-per-declaration": [
      true,
      "ignore-for-loop",
    ],
    "quotemark": [
      true,
      "single",
      // "double",
      // "jsx-single",
      "jsx-double",
      // "avoid-escape",
    ],
    "radix": true,
    "semicolon": [
      true,
      "always",
      // "never",
    ],
    "switch-default": true,
    "trailing-comma": [
      true,
      { // "always" || "never"
        "multiline": "always",
        "singleline": "never",
      },
    ],
    "triple-equals": [
      true,
      "allow-null-check",
      // "allow-undefined-check",
    ],
    "typedef": [
      true,
      "call-signature",
      "parameter",
      "arrow-parameter",
      "property-declaration",
      // "variable-declaration",
      // "member-variable-declaration", // TODO doesn't work with arrow functions, ideally turned on
    ],
    "typedef-whitespace": [
      true,
      { // "nospace" || "onespace" || "space"
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace",
      },
    ],
    "use-isnan": true,
    "use-strict": [ // is now emitted by TypeScript compiler, see https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#modules-are-now-emitted-with-a-use-strict-prologue
      false,
      "check-module",
      // "check-function",
    ],
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore", // TODO ideally this is turned off, but _ prefix is used to mark ignored function params for rule "no-unused-variable"
      // "allow-trailing-underscore",
      "allow-pascal-case", // TODO if the variable is a class, not an instance, prefer PascalCase
      "ban-keywords",
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-type",
      "check-typecast",
    ],
  },
};
