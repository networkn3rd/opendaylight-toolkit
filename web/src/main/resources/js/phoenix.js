// Filename: phoenix.js

define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var initialize = function() {
    // attach phoenix overlay bar
    var $overlay = $(document.createElement('div'))
    .attr('id', 'phoenix-overlay');
    var $brand = $(document.createElement('div'))
    .attr('id', 'phoenix-brand');
    var $menu = $(document.createElement('div'))
    .attr('id', 'phoenix-menu')
    .addClass('pure-menu pure-menu-open pure-menu-horizontal');
    var $ul = $(document.createElement('ul'));
    var $li = $(document.createElement('li'))
    .addClass('pure-menu-selected');
    var $a = $(document.createElement('a'))
    .attr('href', '#')
    .append('Home');
    $li.append($a);
    $ul.append($li);
    $menu.append($ul);

    $overlay.append($brand).append($menu);
    $('body').prepend($overlay);

    // load apps into menu
    $.getJSON('/web.json', function(apps) {
      console.log(apps);
      $.each(apps, function(key, app) {
        var $li = $(document.createElement('li'));
        var $a = $(document.createElement('a'));
        $a.append(app.name).attr('href', '#');
        $a.click(function() {
          $(this).closest('ul').find('li').removeClass('pure-menu-selected');
          $(this).closest('li').addClass('pure-menu-selected');
          //$('#main').load('/'+key); TODO
        });
        $li.append($a);

        $('#phoenix-menu ul').append($li);
      });
    });

    $('#phoenix-menu .pure-menu-selected').click(function() {
      $(this).closest('ul').find('li').removeClass('pure-menu-selected');
      $(this).closest('li').addClass('pure-menu-selected');
      /*
      $('#main').empty();
      $('#main').text('OpenDaylight Phoenix');
      */
    });
  }

  return {
    initialize : initialize
  };
});
