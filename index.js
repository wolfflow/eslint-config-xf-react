module.exports = {
  extends: [
    "airbnb",
    "eslint-config-react-app",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "import/no-duplicates": 0,
        "no-duplicate-imports": "off",
        "react/prop-types": 0
      }
    }
  ],

  plugins: ["prettier", "jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "react/no-multi-comp": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/destructuring-assignment": 0,
    "react/no-access-state-in-setstate": 1,
    "react/no-did-update-set-state": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-fragments": 0,
    "react/static-property-placement": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/state-in-constructor": 0,
    "react/sort-comp": 0,
    "react/forbid-prop-types": [
      "warn",
      {
        forbid: ["any"]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/order": 1,
    "import/first": 1,
    "import/newline-after-import": 1,
    "prefer-object-spread": 0,
    "max-classes-per-file": 0,
    "no-debugger": 1,
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "info"]
      }
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "no-mixed-operators": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-increment-decrement": 0,
    "prefer-destructuring": 0,

    camelcase: 0,
    "prettier/prettier": 1
  }
};
