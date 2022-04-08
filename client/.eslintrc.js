// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
   
    "extends": "plugin:prettier/recommended",
    "rules": {
        "prettier/prettier": [
          "warn",
          {
            "printWidth": 120,
            "singleQuote": true,
            "trailingComma": "es5",
            "bracketSpacing": true,
            "bracketSameLine": true,
            "semi": true,
            "useTabs": false
          }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
      },
}
