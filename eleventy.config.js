const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const constants = require('./config/constants');

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		viteOptions: {
			publicDir: 'public',
			clearScreen: false,
			server: {
				mode: 'development',
				middlewareMode: true,
			},
			appType: 'mpa',
			build: {
				mode: 'production',
				sourcemap: 'true',
				manifest: true,
			}
		}
	});
	eleventyConfig.addLayoutAlias('theme', 'theme.liquid');
	eleventyConfig.setServerPassthroughCopyBehavior('copy');
	eleventyConfig.addPassthroughCopy("src/assets/js");
	eleventyConfig.addPassthroughCopy("src/assets/css");


	return constants;
}