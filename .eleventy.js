// Eleventy config file
// markdown files, data files and HTML files should be processed by Nunjucks
// That means that we can now use .html files instead of having to use .njk files.
// .addPassthroughCopy that's how we get the images to the dist folder


module.exports = config => {
  config.addPassthroughCopy('./src/images/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};

