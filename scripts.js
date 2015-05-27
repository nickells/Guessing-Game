
$(document).ready(function () {

	$('.feedback').hide();
	var numberChoice = Math.floor(Math.random()*100);
 	var wrongTimes = 0;
	var allGuesses = [];
    $('.button1').on('click', function(){

        var guess = $("input").val();
        var diff = numberChoice - guess;
        var absDiff = Math.abs(diff);
		var signMessage = "";
		

		allGuesses.push(guess);
		
		$('.list').append("<br>" + guess );
		for(var x=0; x <= (allGuesses.length-2); x++){
			if (allGuesses[x] == guess){
				alert("Repeat guess!"); 
//				I turned this feature off because it wasn't working quite correctly and ended up being intrusive
			}
		};
		
		$('.bar').animate({width: 375-(375*(absDiff*.01))}, 1000);
//wrong answer		
		if (diff != 0){
			wrongTimes = wrongTimes + 1;
				if (wrongTimes == 1){
					$(".heartContainer").text("\u2665\u2665\u2665");
				}
				else if (wrongTimes == 2){
					$(".heartContainer").text("\u2665\u2665");
				}
				else if (wrongTimes == 3){
					$(".heartContainer").text("\u2665");
				}
				else if (wrongTimes >= 4){
					$(".heartContainer").text(" ");
					alert("You are out of lives. Reset and try again.");
				}
			if (guess > 100 || guess < 0){ 
				$('.feedback').text('Invalid number!');
			};
			}
		//i know all this logic could be a lot cleaner. i tried to edit it and got confused.
		if (diff > 0 && guess < 100 && guess > 0){ signMessage = "Try a higher number!"; 
			}
		else if (diff < 0 && guess < 100 && guess > 0){ signMessage = "Try a lower number!";
			};
			
        if (absDiff <=100 && absDiff >=75 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re so cold! ' + signMessage);
			$('.bar').animate({'backgroundColor': '#00F'}, 500);
			$('.list').append(" (Cold)");

        }
        else if(absDiff <=74 && absDiff >=50 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re cool! ' + signMessage);
			$('.bar').animate({'backgroundColor': '#A0F'}, 500);
			$('.list').append(" (Cool)");

			
        }
        else if(absDiff <=49 && absDiff >=25 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re getting warm! ' + signMessage);
			$('.bar').animate({'backgroundColor': '#F0A'}, 500);
			$('.list').append(" (Warm)");

        }
        else if(absDiff <=24 && absDiff >=1 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re hot! ' + signMessage);
			$('.bar').animate({'backgroundColor': '#F06'}, 500);
			$('.list').append(" (Hot!)");

        }
		
//right answer
        else if(absDiff == 0 && guess < 100 && guess > 0){
            $('.feedback').text('That\'s it!');
			$('.bar').animate({'backgroundColor': '#F00'}, 500);
			$('#form').css({'background': 'radial-gradient(at top, #F00, #C00, #A00, #400)'}, 500);
        };
        $('.feedback').slideDown();
    });
//button colors etc
	$('#reset').on('mousedown', function(){
	    $('.guess').css({'background-color':'red'});
 	});
	$('#reset').on('mouseup', function(){
	    $('.guess').css({'background-color':'white'});
 	});
	
	$('.button1').on('mousedown', function(){
	    $('.guess').css({'background-color':'limegreen'});
 	});
	$('.button1').on('mouseup', function(){
	    $('.guess').css({'background-color':'white'});
 	});
	
//hint
    $('#hint').on('click',function(){
		$('.feedback').slideDown();
        $('.feedback').text('The number is ' + numberChoice);

    });
   

//reset button
	
    $('#reset').on('click',function(){
		$('.list').text("Previous guesses:");
		wrongTimes = 0;
        var newNumber = Math.floor(Math.random()*100);
        numberChoice = newNumber;
        $('.feedback').slideUp();
		$("input").val(1);
		$(".heartContainer").text("\u2665\u2665\u2665\u2665");
		$('.bar').animate({'width': '200' ,'background-color': '#F0A'});
		allGuesses = [];
		$('#form').css({'background': 'linear-gradient( #666666, #444444)'}, 500);


    });


});