module.exports = function (eleventyConfig) {
	// files that are already parsed into the dist folder are copied into our project from here
	eleventyConfig.addPassthroughCopy('./frontend/dist');

	// certain files such as the svg files are not parsed to the dist folder during imagemin image optimization task run by gulp
	eleventyConfig.addPassthroughCopy('./frontend/src');
	eleventyConfig.addPassthroughCopy('./frontend/json');

	return {
		dir: {
			input: 'build',
			output: 'public',
		},
	};
};
