export default {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended'
		],
	rules: {
		"prettier/prettier": true,
		"at-rule-no-unknown": null,
		"scss/at-rule-no-unknown": true,
		"block-no-empty": true,
		"at-rule-empty-line-before": 'always',
		"selector-class-pattern": null,
		'max-nesting-depth': 1,
	}
}
