#set( $symbol_dollar = '$' )
define(
  [
    'jquery',
    'backbone',
    'underscore',
    '/${artifactId}/web/js/collections/SimpleCollection.js',
    '/${artifactId}/web/js/models/SimpleModel.js',
    '/js/ext/text/text.js!/${artifactId}/web/js/templates/simple.html'
    ], function($, Backbone, _, SimpleCollection, SimpleModel, Template) {
      var View = Backbone.View.extend({
        el: $("#main"),
        initialize: function() {
          var self = this;
          this.collection = new SimpleCollection();
          this.collection.url = '/${artifactId}/northbound/simple'; // TODO
            this.collection.fetch({
              success : function(call, response) {
                console.log('passed collection call to get simple list', response);
                self.render();
              }
            });
        },
        render: function() {
          var that = this;
          var templateArg = [];
          _.map(that.collection.models[0].attributes, function(value, key) {
            var obj = {};
            obj.key = key;
            obj.value = value;
            templateArg.push(obj);
          });
          var compiledTemplate = _.template(Template, 
          {
            simple : templateArg
          });
          $(this.el).append($(compiledTemplate).html());
        },
        events : {
          'click #simpleContainer button' : 'handleSimpleButton',
          'click #simpleTable tbody tr' : 'tableRowClicked'
        },
        handleSimpleButton : function(evt) {
          var self = this;
          var $button = $(evt.currentTarget);
          if ($button.attr('id') == 'simpleButton') {
            console.log('Simple button pressed');
            var simpleModel = new SimpleModel({
              id : $('#simpleInput').val()
            });
            simpleModel.urlRoot = '/${artifactId}/northbound/simple';
            simpleModel.save(null, {
              dataType: 'text',
              success: function(model, response) {
                console.log('submitted.');
              }
            });
          } else if ($button.attr('id') == 'simpleRemoveButton') {
            var id = $('#simpleTable tbody tr.selected').attr('data-id');
            var simpleModel = self.collection.get(id);
            simpleModel.setUrlRoot();
            simpleModel.destroy({
              dataType: 'text',
              success: function() {
                console.log('delete succeeded');
                $('#simpleTable').remove();
                self.updateView();
              },
              error: function() {
                console.log('delete error');
                $('#simpleTable').remove();
                self.updateView();
              }
            });
          } else {
            // cancel button
            $('#simpleInput').val('');
          }
        },
        tableRowClicked : function(evt) {
          $('#simpleTable tbody tr.selected').removeClass('selected');
          var $tr = $(evt.currentTarget);
          $tr.addClass('selected');
        },
        updateView : function() {
          $('#simpleContainer').remove();
          this.initialize();
        }
      });
      return View;
    });
