module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "react-refresh"],
    rules: {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-max-props-per-line": [
            "error",
            { maximum: 1, when: "always" },
        ],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react-refresh/only-export-components": "warn",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: false,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ],
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}
