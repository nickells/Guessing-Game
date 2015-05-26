$(document).ready(function() {

	$('.feedback').hide();
	var numberChoice = Math.floor(Math.random()*100);
 	var wrongTimes = 0;
    $('.button1').on('click', function(){

        var guess = $("input").val();
        var diff = numberChoice - guess;
        var absDiff = Math.abs(diff);
		var signMessage = "";
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
				else if (wrongTimes => 4){
					$(".heartContainer").text(" ");
					$('.feedback').text("You are out of lives");
				}
			if (guess > 100 || guess < 0){ 
				$('.feedback').text('Invalid number!');
			};
			}
		
		if (diff > 0 && guess < 100 && guess > 0){ signMessage = "Try a higher number!"; 
			}
		else if (diff < 0 && guess < 100 && guess > 0){ signMessage = "Try a lower number!";
			};
		

			
        if (absDiff <=100 && absDiff >=75 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re so cold! ' + signMessage);
        }
        else if(absDiff <=74 && absDiff >=50 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re cool! ' + signMessage);
        }
        else if(absDiff <=49 && absDiff >=25 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re getting warm! ' + signMessage);
        }
        else if(absDiff <=24 && absDiff >=1 && guess < 100 && guess > 0){
            $('.feedback').text('You\'re hot! ' + signMessage);
        }
        else if(absDiff == 0 && guess < 100 && guess > 0){
            $('.feedback').text('That\'s it!');
        };
        $('.feedback').slideDown();
    });
	
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
	

    $('#hint').on('click',function(){
		$('.feedback').slideDown();
        $('.feedback').text('The number is ' + numberChoice);

    });
   


	
    $('#reset').on('click',function(){
        var newNumber = Math.floor(Math.random()*100);
        numberChoice = newNumber;
        $('.feedback').slideUp();
		$("input").val(1);
		$(".heartContainer").text("\u2665\u2665\u2665\u2665");

    });

	if ($(.heartContainer).text() == ''){
		$('.feedback').text("You are out of lives");
	};

});