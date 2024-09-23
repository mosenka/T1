export default {
	extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
	rules: {
		'prettier/prettier': true,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'block-no-empty': true,
		'at-rule-empty-line-before': ['always', { ignore: ['first-nested'] }],
		'selector-class-pattern': null,
		'scss/at-function-pattern': /^[a-z][a-zA-Z0-9]*$/,
		'scss/dollar-variable-pattern': /^[a-z][a-zA-Z0-9]*$/,
		'scss/at-mixin-pattern': /^[a-z][a-zA-Z0-9]*$/
	}
}
