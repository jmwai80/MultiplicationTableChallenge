/* Theodora Moldovan, John Mwai, Alice Pendergast
Programming Assignment 3
Multiplication Table Challenge
COM 214
3/25/21 */
$(document).ready(function(){
  /* Initialize binary variables for input */
  var inputValue = 0;
  // var multiplcationMap = [];
  var timer;
  var UserValue = 0;
  var correctInputVal = 0;
  /* Hide correct and incorrect feedback for user */
  $( ".correct" ).hide();
  $( ".incorrect" ).hide();
  $( ".countDown" ).hide();
  /* Create function actions for when button is clicked */
  $("button").click(function(){
    $( ".homeImage" ).hide();
    /* hide intro image */
    inputValue = parseInt($("input:text").val());
    /* set counter variable to user input value */
    var count = inputValue;
    /* Create multiplication table by writing to html file */
    $('.multiplication-table').html('');
    var tr;
    tr = $('<tr></tr>');
    tr.append($('<td class = "outer animated">' +'</td>'));
    for (var k=1; k<=inputValue; k++) {
        tr.append($('<td class = "outer">'+ k +'</td>'));
    }
    /* append columns to table */
    $('.multiplication-table').append(tr);

    
    /*var randomInput = Math.ceil(Math.random() * inputValue);*/
    /*sets the two random inputs to get a random row and colomn to have the multiplication be in*/
    var randomInput= Math.floor(Math.random()*Math.floor(inputValue))
    var randomInput2= Math.floor(Math.random()*Math.floor(inputValue))
   

    /* set random value for input cell */
    /* initialize binary variables for checking input and checking correctness */
    var checkInput = true;
    var correctVal = false;
    for (var i=1; i<=inputValue; i++) {
        tr = $('<tr></tr>');
        for (var j=1; j<= inputValue; j++) {
          if (j==1){
            tr.append($('<td class = "outer">'+ i +'</td>'));
          }

          /*checks to see if the input is within the table and will the input value is correct*/
          if (i === randomInput && checkInput && j===randomInput2) {
            correctInputVal = i*j;
            tr.append($('<td class = ""><input type="text" id="InputField" name="  " form="my_form" class ="tdInput"/></td>'));
            checkInput = false;
          }
          else {
            tr.append($('<td class = "inner">'+ i*j +'</td>'));}
        }

        /* append new column with random input cell to table */
        $('.multiplication-table').append(tr);
    }

    var isEven = true;

    //REMAINING 
    if (inputValue > 20) {
      alert("Please input value less than 21")
      location.reload();
      //display error message indicating value greater than 20
      //refresh page
    }
    if (!Number.isInteger(inputValue) || inputValue % 1 !== 0) {
      alert("value is not an Interger! Try Again!")
      location.reload();
      //display error message indicating value is not int
      //refresh page
    }

    /* creating sequence for table cells color based on odd/even input */
    if (inputValue % 2 != 0) {
      $("tr:even td:odd").css( "background-color", "#7799dd" );
      $("tr:even td:even").css( "background-color", "#00ffbb" );
      $("tr:odd td:odd").css( "background-color", "#00ffbb");
      $("tr:odd td:even").css( "background-color", "#7799dd" );
      isEven = false;
    }
    else { /*if the number is not divisible by 2, run this color pattern */
      $("tr td:odd").css( "background-color", "#7799dd" );
      $("tr td:even").css( "background-color", "#00ffbb" );
    }
    $('.outer').css('background-color', 'yellow'); /* set color for table horizontal and vertical header */

    var change = true;
    var a = $("tr td:odd").css( "background-color");
    /* Setting interval function for countdown timer */
    timer = setInterval(function() {
      $( ".countDown").show();
      count = count - 1;

      if (count === 0){

        clearInterval(timer);
        var key = parseInt($('#InputField').val());
        /* evaluate user input from cell field */
        /* check for input correctness and display correct/incorrect message */

        if (key === correctInputVal) {
           $(".correct").show();
        }
        else {
            $(".incorrect").show();
        }
        /* hide message and display intro image after a set interval */
        var delay = setTimeout(function() {
            $(".homeImage").show();
            $( ".correct" ).hide();
            $( ".incorrect" ).hide();
            location.reload();


         },4000)
        // alert("user val " + key);
        // alert("correctInput " + correctInputVal)
        /* hide countdown and table after timeout interval */
        $( ".multiplication-table" ).hide();
        $( ".countDown").hide();
       

      }

      /* creating cell color change sequence based on odd/even input */
      if (count % 3 == 0) { 
        if (isEven) { /*if the number is odd, run this color change pattern */
          if (a === "rgb(255, 255, 0)" && change) {
            $("tr td:odd").css( "background-color", "#00ffbb" );
            $("tr td:even").css( "background-color", "#7799dd" );
            $('.outer').css('background-color', '#b0c4de');
             change = false;
           
           
          }
          else {
            $("tr td:odd").css( "background-color", "#7799dd" );
            $("tr td:even").css( "background-color", "#00ffbb" );
            $('.outer').css('background-color', 'yellow');
            change = true;
          }
        }
        else { /*if the number is odd, run this color change pattern */
          if (a === "rgb(255, 255, 0)" && change) {
            $("tr:even td:odd").css( "background-color", "#00ffbb" );
            $("tr:even td:even").css( "background-color", "#7799dd" );
            $("tr:odd td:odd").css( "background-color", "#7799dd");
            $("tr:odd td:even").css( "background-color", "#00ffbb" );
            $('.outer').css('background-color', 'yellow');
            change = false;
            
           
          }
          else {
            $("tr:even td:odd").css( "background-color", "#7799dd" );
            $("tr:even td:even").css( "background-color", "#00ffbb" );
            $("tr:odd td:odd").css( "background-color", "#00ffbb");
            $("tr:odd td:even").css( "background-color", "#7799dd" );
            $('.outer').css('background-color', 'yellow');
            change = true;
          }

        }
      }

      $(".countDown").html(count + " SECONDS LEFT")
      /* update countdown information in html file */  

    }, 1000)


  });

});
