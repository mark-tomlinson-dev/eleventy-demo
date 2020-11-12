// Eleventy config file
// markdown files, data files and HTML files should be processed by Nunjucks
// That means that we can now use .html files instead of having to use .njk files.
// .addPassthroughCopy that's how we get the images to the dist folder


module.exports = config => {
  config.addPassthroughCopy('./src/images/');
  // Returns work items, sorted by display order
  const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
  // Returns work items, sorted by display order
  config.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
      x => x.data.featured
    );
  });
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

