console.log('phoenix ui framework initialized...');

$(document).ready(function() {
  // load apps into menu
  $.getJSON('/web.json', function(apps) {
    console.log(apps);
    var $li = $(document.createElement('li'));
    var $a = $(document.createElement('a'));
    $a.append('test run').attr('href', '#');
    $li.append($a);

    $('#menu ul').append($li);
  });
});
