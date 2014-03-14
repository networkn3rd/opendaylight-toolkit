// Filename: app.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'backbone',    // lib/backbone/backbone
  'views/DeviceView',
  'views/DevicePropertiesView'
], function($, _, Backbone, DeviceView, DevicePropertiesView){
  var initialize = function() {
    // test backbone
    var deviceView = new DeviceView(); // this calls initialize which in turn calls render
    var devicePropertiesView = new DevicePropertiesView();
  }

  return {
    initialize : initialize
  };
});

