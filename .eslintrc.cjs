/* eslint-env node */
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	rules: {
		indent: [2, "tab"],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/ban-types": 1,
	},
};
