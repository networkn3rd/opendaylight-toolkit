// Filename: main.js

require.config({
  paths: {
    "jquery": "/js/ext/jquery/dist/jquery.min",
    "underscore": "/js/ext/underscore/underscore",
    "backbone": "/js/ext/backbone/backbone",
    "models": "/js/models",
    "views": "/js/views",
    "collections": "/js/collections"
  }
});
require([
  'app'
], function(App) {
  new App.initialize();
});
