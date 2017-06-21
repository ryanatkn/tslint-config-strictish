module.exports = {
  defaultSeverity: 'warning',
  rules: {
    'adjacent-overload-signatures': true,
    align: false, // prettier
    'array-type': false, // "array" "array-simple" "generic"
    'arrow-parens': false, // prettier
    'arrow-return-shorthand': [true], // "multiline"
    'await-promise': true, // [true, "Thenable"]
    ban: false, // [true, ["someGlobalMethod"], ["someObject", "someFunction"], ["someObject", "otherFunction", "Optional explanation"]]
    'ban-types': [true, ['Object', 'Use {} instead.'], ['String']],
    'binary-expression-operand-order': true,
    'callable-types': true,
    'class-name': true,
    'comment-format': false,
    'completed-docs': false,
    curly: [true, 'ignore-same-line'], // 'as-needed'
    'cyclomatic-complexity': false,
    deprecation: true,
    encoding: true,
    eofline: false,
    'file-header': false,
    forin: false, // too strict
    'import-blacklist': false, // [true, "rxjs", "lodash"],
    'import-spacing': false, // prettier
    indent: false, // prettier
    'interface-over-type-literal': true,
    // TODO some patterns make the IPrefix useful and consistency may be the best option,
    // despite the TypeScript coding guidelines recommending against this
    'interface-name': [
      false,
      // "always-prefix",
      // "never-prefix",
    ],
    'jsdoc-format': true,
    'label-position': true,
    'linebreak-style': false, // prettier
    'match-default-export-name': true,
    'max-file-line-count': [false, 8999], // too strict
    'max-line-length': false, // prettier
    'member-access': [
      false, // too strict
      // "check-accessor",
      // "check-constructor",
      // "no-public",
    ],
    // TODO not happy with arrow functions being treated as instance fields instead of methods
    // could instead use a bind decorator instead of `aBoundMethod = () => ...`
    'member-ordering': [
      false,
      {
        // "order": "fields-first",
        // "order": "statics-first",
        // "order": "instance-sandwich",
        // alphabetize - docs are broken on this
        order: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    ],
    'new-parens': false, // prettier
    'newline-before-return': false,
    'no-angle-bracket-type-assertion': true,
    'no-any': false, // too strict
    'no-arg': true,
    'no-bitwise': true, // favor explicit type conversions, explicitly disable linter for bitwise
    'no-boolean-literal-compare': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': [true, 2],
    'no-console': [
      // explicitly opt-in to commit console statements
      true,
      // "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group",
      // "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "memory", "profile",
      // "profileEnd", "table", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd",
      // "trace", "warn",
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-default-export': false,
    'no-duplicate-super': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-empty-interface': false,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-import-side-effect': [true, {'ignore-module': '(.html|.css)$'}],
    'no-inferrable-types': [
      true,
      'ignore-params',
      // ignore-properties
    ],
    'no-inferred-empty-object-type': true,
    'no-internal-module': true,
    'no-invalid-template-strings': false, // nah, should be obvious enough
    'no-invalid-this': [true, 'check-function-in-method'],
    'no-irregular-whitespace': false, // prettier
    'no-magic-numbers': false, // [true, -1, 0, 1, 2, 3]
    'no-mergeable-namespace': true,
    'no-misused-new': true,
    'no-namespace': [
      true,
      // "allow-declarations",
    ],
    'no-non-null-assertion': true,
    'no-null-keyword': false, // too strict
    'no-object-literal-type-assertion': true,
    'no-parameter-properties': false, // these are super useful because they get initialized before the constructor body, unlike initialized member vars
    'no-reference': true,
    // "no-reference-import": true, // broken docs
    'no-require-imports': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': false, // tsc handles this
    'no-trailing-whitespace': false, // prettier
    'no-unbound-method': false, // TODO huh?
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': false, // TODO revisit
    'no-unnecessary-type-assertion': true,
    'no-unsafe-any': false, // TODO what?
    'no-unsafe-finally': true,
    'no-unused-expression': [
      true,
      // "allow-fast-null-checks",
      // "allow-new",
      'allow-tagged-template',
    ],
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'no-var-requires': true,
    'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
    'number-literal-format': true,
    'object-literal-key-quotes': false, // prettier
    'object-literal-shorthand': true,
    'object-literal-sort-keys': [false, 'ignore-case'], // too strict
    'one-line': false, // prettier
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'only-arrow-functions': [
      true,
      'allow-declarations',
      'allow-named-functions',
    ],
    'ordered-imports': [
      false, // too strict
      {
        'import-sources-order': 'lowercase-last',
        'named-imports-order': 'lowercase-first',
      },
    ],
    'prefer-conditional-expression': true,
    'prefer-const': [true, {destructuring: 'all'}],
    'prefer-for-of': true,
    'prefer-function-over-method': [
      true,
      'allow-public', // TODO revisit
      'allow-protected', // TODO revisit
    ],
    'prefer-method-signature': true,
    'prefer-object-spread': true,
    'prefer-switch': [true, {'min-cases': 3}],
    'prefer-template': true,
    'promise-function-async': true,
    quotemark: false, // prettier
    radix: true,
    'restrict-plus-operands': false, // too strict
    'return-undefined': false,
    semicolon: false, // prettier
    'space-before-function-paren': false, // prettier
    'strict-boolean-expressions': false, // TODO [true, "allow-null-union", "allow-undefined-union", "allow-string", "allow-number", "allow-boolean-or-undefined"]
    'strict-type-predicates': true,
    'switch-default': true,
    'switch-final-break': false,
    'trailing-comma': false, // prettier
    'triple-equals': [
      true,
      'allow-null-check',
      // "allow-undefined-check",
    ],
    // These typedef rules enforce the same
    // type inference "sweet spot" that the Rust language uses,
    // where function arguments and return values are explicitly typed,
    // and inference is used as much as possible in function bodies.
    typedef: [
      true,
      'call-signature',
      // "arrow-call-signature",
      'parameter',
      // "arrow-parameter",
      'property-declaration',
      // "variable-declaration",
      // "member-variable-declaration",
      // "object-destructuring",
      // "array-destructuring",
    ],
    'typedef-whitespace': [
      true,
      {
        // "nospace" || "onespace" || "space"
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
    ],
    'typeof-compare': true,
    'unified-signatures': true,
    'use-default-type-parameter': true,
    'use-isnan': true,
    'variable-name': [
      true,
      'check-format',
      'allow-leading-underscore',
      // "allow-trailing-underscore",
      'allow-pascal-case', // TODO if the variable is a class, not an instance, prefer PascalCase
      'ban-keywords',
    ],
    whitespace: false, // prettier
  },
};
