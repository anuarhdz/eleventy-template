module.exports = {
	dir: {
		input: 'src',
		output: 'dist',
		includes: '_includes',
		layouts: '_layouts',
		data: '_data',
	},
	passthroughFileCopy: true,
	markdownTemplateEngine: 'liquid',
	templateEngineOverride: 'liquid',
	htmlTemplateEngine: 'liquid',
	templateFormats: ['liquid'],
};