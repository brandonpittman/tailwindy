const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
	postcssImport(),
	tailwindcss(),
	postcssPresetEnv({stage: 0})
]

if (process.env.NODE_ENV === 'production') {
	plugins.push(
		purgecss({
			content: ['./dist/**/*.html'],
			extractors: [
				{
					extractor: class TailwindExtractor {
						static extract(content) {
							return content.match(/[A-Za-z0-9-_:\/]+/g) || []
						}
					},
					extensions: ['css', 'html', 'vue', 'js', 'jsx', 'pug', 'ts', 'tsx'],
				},
			]
		})
	)
}

module.exports = {
	plugins
}
