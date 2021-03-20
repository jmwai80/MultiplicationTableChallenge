$(document).ready(function(){
  var inputValue = 0;
  var multiplcationMap = [];
  var timer;

  $("button").click(function(){
    $( ".homeImage" ).hide();
    inputValue = parseInt($("input:text").val());
    var count = inputValue;
    $('.multiplication-table').html('');
    var tr;
    tr = $('<tr></tr>');
    tr.append($('<th>' +'</th>'));
    for (var k=1; k<=inputValue; k++) {
        tr.append($('<td class = "outer">'+ k +'</td>'));
    }
    $('.multiplication-table').append(tr);

    var randomInput = Math.ceil(Math.random() * inputValue);
    var checkInput = true;
    for (var i=1; i<=inputValue; i++) {
        tr = $('<tr></tr>');
        for (var j=1; j<= inputValue; j++) {
          if (j==1){
            tr.append($('<td class = "outer">'+ i +'</td>'));
          }

          if (i === randomInput && checkInput) {
            var correctInput = i*j;
            tr.append($('<td class = ""><input type="text" name="  " form="my_form" class ="tdInput"/></td>'));
            checkInput = false;
          }
          else {
            tr.append($('<td class = "inner">'+ i*j +'</td>'));}
        }

        $('.multiplication-table').append(tr);
    }
    // $('.outer').css('background-color', 'yellow');
    timer = setInterval(function() {

      $("tr td:odd").css( "background-color", "red" );
      $("tr td:even").css( "background-color", "#4d0066" );
      $('.outer').css('background-color', 'yellow');

      count = count - 1;
      if (count === 0){
        clearInterval(timer);
        $( ".multiplication-table" ).hide();
        $( ".countDown").hide();
      }
      $(".countDown").html(count + " SECONDS LEFT")

    }, 1000)


  });



});
