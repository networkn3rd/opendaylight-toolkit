// Filename: phoenix.js

define([
  'jquery',
  'underscore',
  'backbone'
], function($) {
  var initialize = function() {
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
  }

  return {
    initialize : initialize
  };
});
