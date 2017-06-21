module.exports = {
  "defaultSeverity": "warning",
  "rules": {
    "adjacent-overload-signatures": true,
    "align": [
      true,
      "parameters",
      "arguments",
      "statements",
    ],
    "array-type": false, // "array" "array-simple" "generic"
    "arrow-parens": [true, "ban-single-arg-parens"],
    "arrow-return-shorthand": [true], // "multiline"
    "await-promise": true,
    "ban": false, // [true, ["someGlobalMethod"], ["someObject", "someFunction"], ["someObject", "otherFunction", "Optional explanation"]]
    "ban-types": [
      true,
      ["Object", "Use {} instead."],
      ["String"]
    ],
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space",
      // "check-lowercase",
      // "check-uppercase",
    ],
    "completed-docs": false,
    "curly": [
      true,
      "ignore-same-line"
    ],
    "cyclomatic-complexity": false,
    "eofline": false, // annoying, so turned off despite this: http://stackoverflow.com/questions/4700312/empty-new-line-at-the-end-of-the-java-source-files
    "file-header": false, // no need
    "forin": false, // too strict
    "import-blacklist": false, // [true, "rxjs", "lodash"],
    "import-spacing": true,
    "indent": [ // "one is right and the other is wrong" -Richard Hendricks
      true,
      "spaces",
      // "tabs",
    ],
    "interface-over-type-literal": false,
    // TODO some patterns make the IPrefix useful and consistency may be the best option,
    // despite the TypeScript coding guidelines recommending against this
    "interface-name": [
      false,
      // "always-prefix",
      // "never-prefix",
    ],
    "jsdoc-format": true,
    "label-position": true,
    "linebreak-style": [
      true,
      "LF",
      // "CRLF",
      // "CR",
    ],
    "match-default-export-name": true,
    "max-file-line-count": [false, 300], // too strict
    "max-line-length": [
      true,
      100,
    ],
    "member-access": [
      false, // too strict
      // "check-accessor",
      // "check-constructor",
      // "no-public",
    ],
    // TODO not happy with arrow functions being treated as instance fields instead of methods
    // could instead use a bind decorator instead of `aBoundMethod = () => ...`
    "member-ordering": [
      false,
      {
        // "order": "fields-first",
        // "order": "statics-first",
        // "order": "instance-sandwich",
        // alphabetize - docs are broken on this
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
    "newline-before-return": false,
    "no-angle-bracket-type-assertion": true,
    "no-any": false, // too strict
    "no-arg": true,
    "no-bitwise": true, // favor explicit type conversions
    "no-boolean-literal-compare": false, // seem to need this for type narrowing sometimes, might be fixed in typescript tho?
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": [true, 2],
    "no-console": [ // explicitly opt-in to commit console statements
      true,
      // doesn't seem to support a regexp or catch-all here, pulled from Chrome/FF
      "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group",
      "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "memory", "profile",
      "profileEnd", "table", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd",
      "trace", "warn",
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-default-export": false, // too strict
    "no-duplicate-super": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-empty-interface": false,
    "no-eval": true,
    "no-floating-promises": true, // TODO hmmm
    "no-for-in-array": true,
    "no-import-side-effect": [
      true,
      { "ignore-module": "(\.html|\.css)$" }
    ],
    "no-inferrable-types": [
      true,
      "ignore-params",
      // ignore-properties
    ],
    "no-inferred-empty-object-type": true,
    "no-internal-module": true,
    "no-invalid-template-strings": false, // nah, should be obvious enough
    "no-invalid-this": [
      true,
      "check-function-in-method",
    ],
    "no-magic-numbers": false, // [true, -1, 0, 1, 2, 3]
    "no-mergeable-namespace": true,
    "no-misused-new": true,
    "no-namespace": [
      true,
      // "allow-declarations",
    ],
    "no-non-null-assertion": true,
    "no-null-keyword": false, // too strict
    "no-parameter-properties": false, // these are super useful because they get initialized before the constructor body, unlike initialized member vars
    "no-reference": true,
    // "no-reference-import": true, // broken docs
    "no-require-imports": true,
    "no-shadowed-variable": true,
    "no-sparse-arrays": true,
    "no-string-literal": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": [
      true,
      "ignore-comments"
      // "ignore-jsdoc"
      // "ignore-template-strings"
    ],
    "no-unbound-method": false, // TODO huh?
    "no-unnecessary-callback-wrapper": true,
    "no-unnecessary-initializer": true,
    "no-unnecessary-qualifier": false, // TODO revisit
    "no-unsafe-any": false, // TODO what?
    "no-unsafe-finally": true,
    "no-unused-expression": [
      true,
      // "allow-fast-null-checks",
      // "allow-new",
      "allow-tagged-template",
    ],
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "no-var-requires": true,
    "no-void-expression": [
      true,
      "ignore-arrow-function-shorthand"
    ],
    "object-literal-key-quotes": [true, "consistent-as-needed"],
    "object-literal-shorthand": true,
    "object-literal-sort-keys": false, // too strict
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
    "only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],
    "ordered-imports": [
      false, // too strict
      {
        "import-sources-order": "lowercase-last",
        "named-imports-order": "lowercase-first"
      }
    ],
    "prefer-const": [
      true,
      { destructuring: "all" }
    ],
    "prefer-for-of": true,
    "prefer-function-over-method": [
      true,
      "allow-public", // TODO revisit
      "allow-protected" // TODO revisit
    ],
    "prefer-method-signature": true,
    "prefer-template": true,
    "promise-function-async": true,
    "quotemark": [
      true,
      "single",
      // "double",
      // "jsx-single",
      "jsx-double",
      // "avoid-escape",
    ],
    "radix": true,
    "restrict-plus-operands": false, // too strict
    "return-undefined": false, // nah
    "semicolon": [
      true,
      "always",
      // "never",
      // "ignore-interfaces",
      "ignore-bound-class-methods"
    ],
    "space-before-function-paren": [
      true,
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "strict-boolean-expressions": false, // TODO [true, "allow-null-union", "allow-undefined-union", "allow-string", "allow-number"]
    "strict-type-predicates": true,
    "switch-default": true,
    "trailing-comma": [
      true,
      { // "always" | "never"
        "multiline": "always",
        "singleline": "never",
      },
    ],
    "triple-equals": [
      true,
      "allow-null-check",
      // "allow-undefined-check",
    ],
    // These typedef rules enforce the same
    // type inference "sweet spot" that the Rust language uses,
    // where function arguments and return values are explicitly typed,
    // and inference is used as much as possible in function bodies.
    "typedef": [
      true,
      "call-signature",
      // "arrow-call-signature",
      "parameter",
      // "arrow-parameter",
      "property-declaration",
      // "variable-declaration",
      // "member-variable-declaration",
      // "object-destructuring",
      // "array-destructuring",
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
    "typeof-compare": true,
    "unified-signatures": true,
    "use-isnan": true,
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      // "allow-trailing-underscore",
      "allow-pascal-case", // TODO if the variable is a class, not an instance, prefer PascalCase
      "ban-keywords",
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-module",
      "check-operator",
      "check-preblock",
      "check-separator",
      "check-type",
      "check-typecast",
    ],
  },
};
