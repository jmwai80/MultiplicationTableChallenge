$(document).ready(function(){
  var inputValue = 0;
  // var multiplcationMap = [];
  var timer;
  var UserValue = 0;
  var correctInputVal = 0;
  $( ".correct" ).hide();
  $( ".incorrect" ).hide();
  $("button").click(function(){
    $( ".homeImage" ).hide();
    inputValue = parseInt($("input:text").val());
    var count = inputValue;
    $('.multiplication-table').html('');
    var tr;
    tr = $('<tr></tr>');
    tr.append($('<td class = "outer animated">' +'</td>'));
    for (var k=1; k<=inputValue; k++) {
        tr.append($('<td class = "outer">'+ k +'</td>'));
    }
    $('.multiplication-table').append(tr);

    var randomInput = Math.ceil(Math.random() * inputValue);
    var randomInput2 = Math.ceil(Math.random() * inputValue);
    alert(randomInput);
    var checkInput = true;
    var correctVal = false;
    for (var i=1; i<=inputValue; i++) {
        tr = $('<tr></tr>');
        for (var j=1; j<= inputValue; j++) {
          if (j==1){
            tr.append($('<td class = "outer">'+ i +'</td>'));
          }

          if (i === randomInput && j===randomInput2 && checkInput) {
            correctInputVal = i*j;
            tr.append($('<td class = ""><input type="text" id="InputField" name="  " form="my_form" class ="tdInput"/></td>'));
            checkInput = false;
          }
          else {
            tr.append($('<td class = "inner">'+ i*j +'</td>'));}
        }

        $('.multiplication-table').append(tr);
    }

    var isEven = true;
    if (inputValue % 2 != 0) {
      $("tr:even td:odd").css( "background-color", "red" );
      $("tr:even td:even").css( "background-color", "blue" );
      $("tr:odd td:odd").css( "background-color", "blue");
      $("tr:odd td:even").css( "background-color", "red" );
      isEven = false;
    }
    else {
      $("tr td:odd").css( "background-color", "red" );
      $("tr td:even").css( "background-color", "#4d0066" );
    }
    $('.outer').css('background-color', 'yellow');

    var change = true;
    var a = $("tr td:odd").css( "background-color");
    timer = setInterval(function() {
      count = count - 1;

      if (count === 0){

        clearInterval(timer);
        var key = parseInt($('#InputField').val());

        if (key === correctInputVal) {
           $(".correct").show();
        }
        else {
            $(".incorrect").show();
        }
        var delay = setTimeout(function() {
            $(".homeImage").show();
            $( ".correct" ).hide();
            $( ".incorrect" ).hide();
            location.reload();


         },4000)
        // alert("user val " + key);
        // alert("correctInput " + correctInputVal)
        $( ".multiplication-table" ).hide();
        $( ".countDown").hide();
       

      }

      if (count % 3 == 0) { 
        if (isEven) {
          if (a === "rgb(255, 255, 0)" && change) {
            $("tr td:odd").css( "background-color", "#4d0066" );
            $("tr td:even").css( "background-color", "red" );
            $('.outer').css('background-color', 'yellow');
            change = false;
            
           
          }
          else {
            $("tr td:odd").css( "background-color", "red" );
            $("tr td:even").css( "background-color", "#4d0066" );
            $('.outer').css('background-color', 'yellow');
            change = true;
          }
        }
        else {
          if (a === "rgb(255, 255, 0)" && change) {
            $("tr:even td:odd").css( "background-color", "#4d0066" );
            $("tr:even td:even").css( "background-color", "red" );
            $("tr:odd td:odd").css( "background-color", "red");
            $("tr:odd td:even").css( "background-color", "#4d0066" );
            $('.outer').css('background-color', 'yellow');
            change = false;
            
           
          }
          else {
            $("tr:even td:odd").css( "background-color", "red" );
            $("tr:even td:even").css( "background-color", "#4d0066" );
            $("tr:odd td:odd").css( "background-color", "#4d0066");
            $("tr:odd td:even").css( "background-color", "red" );
            $('.outer').css('background-color', 'yellow');
            change = true;
          }

        }
      }
      $(".countDown").html(count + " SECONDS LEFT")

    }, 1000)


  });

});
