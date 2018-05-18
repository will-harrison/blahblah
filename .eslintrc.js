module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
};