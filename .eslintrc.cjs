module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "prettier"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error"],
    "react/prop-types": "warn" 
  }
}
