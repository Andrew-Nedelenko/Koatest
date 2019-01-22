module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": "airbnb",
    "rules": {
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 0,
        "no-unexpected-multiline": "warn",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.6.3"
        }
    },
};