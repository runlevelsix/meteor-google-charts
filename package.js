Package.describe({
  name: 'rl6:meteor-google-charts',
  version: '0.0.3',
  summary: 'Easy Google Charts for Meteor',
  git: 'https://github.com/runlevelsix/meteor-google-charts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('meteor-google-charts.js');
  api.export(['drawChart'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rl6:meteor-google-charts');
  api.addFiles('meteor-google-charts-tests.js');
});
