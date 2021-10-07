module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    indent: ["error", 2, {
      MemberExpression: 1,
      SwitchCase: 1
    }],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-multiple-empty-lines": ["error"],
    "no-new-symbol": "error",
    "no-undef": ["error"],
    "no-unused-vars": ["warn"],
    "no-console": ["warn"],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "prefer-const": 2,
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "space-infix-ops": ["error"],
    curly: ["error"],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "quote-props": ["error", "as-needed"],
    "arrow-spacing": ["error"],
    "space-before-blocks": ["error", "always"],
    "spaced-comment": ["error", "always"],
    "no-trailing-spaces": ["error"],
    "space-before-function-paren": ["error", "never"],
    eqeqeq: ["warn", "always"],
    "key-spacing": ["error", { mode: "strict" }]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/type-annotation-spacing": "error",
        "no-unused-vars": ["off"],
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              any: {},
              unknown: {}
            }
          }
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/typedef": "error",
        "@typescript-eslint/member-delimiter-style": ["error", {
          multiline: {
            delimiter: "comma",
            requireLast: false
          },
          singleline: {
            delimiter: "comma",
            requireLast: false
          }
        }]
      },
      env: {
        node: true
      },
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint"
      ],
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json"
      }
    }
  ]
}
