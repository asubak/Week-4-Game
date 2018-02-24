 /* $(document).ready(function() {
 	var targetNumber = 50;
 	$("#number-to-guess").text(targetNumber);
 	var counter = 0;
 	var numberOptions = [13, 5, 10, 12];
 	for (var i = 0; i < numberOptions.length; i++) {
 		var imageCrystal = $("<img>");
 		imageCrystal.addClass("crystal-image");
 		imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
 		imageCrystal.attr("data-crystalvalue", numberOptions[i]);
 		$("#crystals").append(imageCrystal);
 	}
 	 $(".crystal-image").on("click", function() {
    
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;
    
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
    //$("#try-again").on("click", function() {
         //$("New score: " + counter).empty();
      //});
});
  });
  */
  $( document ).ready(function(){
  // Generates random number to guess
  var Random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $('#scoreToMatch').text(Random);
  
  //Generate random number for each crystal
  var num1= Math.floor(Math.random()*12+1)
  var num2= Math.floor(Math.random()*12+1)
  var num3= Math.floor(Math.random()*12+1)
  var num4= Math.floor(Math.random()*12+1)
  
  // Variables to keep track of wins, losses and total
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  

  $('#wins').text(wins);
  $('#losses').text(losses);

// Reset game
function reset(){
  Random=Math.floor(Math.random()*102+19);
  console.log(Random)
  $('#scoreToMatch').text(Random);
  num1= Math.floor(Math.random()*12+1);
  num2= Math.floor(Math.random()*12+1);
  num3= Math.floor(Math.random()*12+1);
  num4= Math.floor(Math.random()*12+1);
  playerTotal= 0;
  $('#totalScore').text(playerTotal);
} 
// Display wins
function win(){
  alert("Congrats, you won! Try again!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
// Display losses
function lose(){
  alert ("Sorry, you lose! Try again!");
  losses++;
  $('#losses').text(losses);
  reset()
}
// Clicking crystals
$('.red').on ('click', function(){
  playerTotal = playerTotal + num1;
  console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal); 
          //Win & lose conditions
          if (playerTotal == Random){
            win();
          }
          else if ( playerTotal > Random){
            lose();
          }   
        })  
$('.blue').on ('click', function(){
  playerTotal = playerTotal + num2;
  console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal); 
  if (playerTotal == Random){
    win();
  }
  else if ( playerTotal > Random){
    lose();
  } 
})  
$('.yellow').on ('click', function(){
  playerTotal = playerTotal + num3;
  console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal);

  if (playerTotal == Random){
    win();
  }
  else if ( playerTotal > Random){
    lose();
  } 
})  
$('.green').on ('click', function(){
  playerTotal = playerTotal + num4;
  console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal); 
  
  if (playerTotal == Random){
    win();
  }
  else if ( playerTotal > Random){
    lose();
  }
});   
}); 