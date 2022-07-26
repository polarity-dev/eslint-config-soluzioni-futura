module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    requireConfigFile: false
  },
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": ["error"],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    curly: ["error"],
    eqeqeq: ["warn", "always"],
    indent: ["error", 2, {
      MemberExpression: 1,
      SwitchCase: 1
    }],
    "key-spacing": ["error", { mode: "strict" }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "no-console": ["warn"],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-multiple-empty-lines": ["error"],
    "no-new-symbol": "error",
    "no-trailing-spaces": ["error"],
    "no-undef": ["error"],
    "no-unused-vars": ["warn"],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "prefer-const": 2,
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "spaced-comment": ["error", "always"]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
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
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/member-delimiter-style": ["error", {
          multiline: {
            delimiter: "none",
            requireLast: false
          },
          singleline: {
            delimiter: "comma",
            requireLast: false
          }
        }],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "error",
        "no-unused-vars": ["off"]
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
