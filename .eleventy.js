// Eleventy config file
// markdown files, data files and HTML files should be processed by Nunjucks
// That means that we can now use .html files instead of having to use .njk files.


module.exports = config => {
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

