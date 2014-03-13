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
    console.log('init');
    // load apps into menu
    $.getJSON('/web.json', function(apps) {
      console.log(apps);
      $.each(apps, function(key, app) {
        var $li = $(document.createElement('li'));
        var $a = $(document.createElement('a'));
        $a.append(app.name).attr('href', '#');
        //$a.attr('href', '/'+key);
        $a.click(function() {
          $(this).closest('ul').find('li').removeClass('pure-menu-selected');
          $(this).closest('li').addClass('pure-menu-selected');
          $('#main').load('/'+key);
        });
        $li.append($a);

        $('#menu ul').append($li);
      });
    });
    $('#main').text('OpenDaylight Phoenix');
    $('#menu .pure-menu-selected').click(function() {
      $(this).closest('ul').find('li').removeClass('pure-menu-selected');
      $(this).closest('li').addClass('pure-menu-selected');
      $('#main').empty();
      $('#main').text('OpenDaylight Phoenix');
    });

    // test backbone
    var deviceView = new DeviceView(); // this calls initialize which in turn calls render
    var devicePropertiesView = new DevicePropertiesView();
  }

  return {
    initialize : initialize
  };
});

