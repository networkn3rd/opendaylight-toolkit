#set( $symbol_dollar = '$' )
define(
  [
    'jquery',
    'backbone',
    'underscore',
    '/js/ext/text/text.js!/${artifactId}/js/templates/template.html'
    ], function($, Backbone, _, Template) {
      var View = Backbone.View.extend({
        el: $("#main"),
        initialize: function() {
          var self = this;
          self.render();
        },
        render: function() {
          var that = this;
          var compiledTemplate = _.template(Template, {});
          $(this.el).append($(compiledTemplate).html());
        }
      });
      return View;
    });
