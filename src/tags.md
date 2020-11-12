---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss']
permalink: '/tag/{{ tag | slug }}/'
---
<!-- What we’re doing with this page is using the pagination system to create a page for each tag that’s present. We filter out collections that we don’t want to feature by passing an array of collections.-->