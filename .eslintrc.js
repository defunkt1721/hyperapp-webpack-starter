module.exports = {
	'extends': 'airbnb-base',
	'plugins': [
		'import',
	],
	'rules': {
		'linebreak-style': 'off',
		'no-unused-vars': [2, {
			'varsIgnorePattern': 'h'
		}],
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'function-paren-newline': 'off'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
	},
	'env': {
		"browser": true,
	}
};