Package.describe({
  name: 'craphtex:search-boxes',
  version: '0.0.2',
  summary: 'Easyily add search boxes to your meteor project',
  git: 'https://github.com/Craphtex/search-boxes.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2');
  api.use('ecmascript');
  api.use('space:template-controller@0.2.1');
  api.mainModule('search_boxes.html', 'client');
  api.mainModule('search_boxes.js', 'client');
});
