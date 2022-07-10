module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"no-unused-vars": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"react/no-deprecated": "off",
		"no-case-declarations": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
