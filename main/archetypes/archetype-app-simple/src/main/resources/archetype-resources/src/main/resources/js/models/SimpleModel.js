#set( $symbol_dollar = '$' )
define(['backbone', 'underscore'], function(Backbone, _) {
  var SimpleModel = Backbone.Model.extend({
    defaults : {
    },
    initialize : function() {
    },
    setUrlRoot: function() {
      this.urlRoot = '/${artifactId}/northbound/simple';
    }
  });
  return SimpleModel;
});
