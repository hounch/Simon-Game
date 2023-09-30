var level = 0;
let gamePattern = [];
let userClickedButton = [];
let clickCounter = 0;
let buttonColors = ['red','blue','green','yellow'];

//Start a game with pressing a keyboard key
$(document).keypress(function() {
    if (gamePattern.length == 0) {
        random_button_generator();
        animation(gamePattern[0]);
        sounds(gamePattern[0]);
    }
});

//Registering click of the user
$(".btn").click(function() {
    var chosenColor = $(this).attr('id');
    userClickedButton.push(chosenColor);
    sounds(chosenColor);
    animation(chosenColor);
    console.log(userClickedButton,'user'); 
    console.log(gamePattern,'game');
    checkAnswer();
});

//Playing sounds
function sounds(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

//Playing animation
function animation(name) {
    $("#" + name).addClass('pressed');
    setTimeout(() => {
        $("#" + name).removeClass('pressed');
    }, 300);
}

//Generating next button
function random_button_generator() {
    userClickedButton = [];
    level++;
    $('h1').text('Level: ' + level);
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    console.log(gamePattern,'answer');
}

//Checking clicked button
function checkAnswer() {
    //Color from userPattern match GamePattern
    console.log(userClickedButton[userClickedButton.length-1],'user good?');
    console.log(gamePattern[userClickedButton.length-1],'game');

    if (userClickedButton[userClickedButton.length-1] == gamePattern[userClickedButton.length-1]) {

        if (userClickedButton.length == gamePattern.length) {
            random_button_generator();
            function delayAnim(i) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        animation(gamePattern[i])
                        resolve()
                    }, 1000 * (i + 1));
                })
            }

            let promises = []
            // Show previous buttons / game pattern
            for (let i = 0; i < level; i++) {
                promises.push(delayAnim(i))
            }
            console.log('Good');
        }
    }
    
    //If wrong button
     else {
        //Bad sound
        var audio2 = new Audio('sounds/wrong.mp3');
        audio2.play();
        //Show that game is over with ("Game Over, Press Any Key to Restart")
        $('h1').text('Game Over. Press any key to restart');
        //After some time start again 
        setTimeout(startOver, 2000);
        console.log('ne good');
    }

}

//Starting new game
function startOver() {
    userClickedButton = [];
    level = 0;
    gamePattern = [];
}



