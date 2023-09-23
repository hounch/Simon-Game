var level = 0;
let gamePattern = [];
let userClickedButton = [];
let clickCounter = 0;
let buttonColors = ['red','blue','green','yellow'];
//HARD-TASK: Click 5 buttons if it's 5 level 

$(document).keypress(function() {
    if (gamePattern.length == 0) {
        random_button_generator();
        animation(gamePattern[0]);
        sounds(gamePattern[0]);
    }
});


$(".btn").click(function() {
    var chosenColor = $(this).attr('id');
    userClickedButton.push(chosenColor);
    sounds(chosenColor);
    animation(chosenColor);
    console.log(userClickedButton,'user'); 
    console.log(gamePattern,'game');
    checkAnswer();
});

function sounds(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animation(name) {
    $("#" + name).addClass('pressed');
    setTimeout(() => {
        $("#" + name).removeClass('pressed');
    }, 300);
}

function random_button_generator() {
    userClickedButton = [];
    level++;
    $('h1').text('Level: ' + level);
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    console.log(gamePattern,'answer');
}

function checkAnswer() {
    //color from userPattern match GamePattern
    console.log(userClickedButton[userClickedButton.length-1],'user good?');
    console.log(gamePattern[userClickedButton.length-1],'game');

    if (userClickedButton[userClickedButton.length-1] == gamePattern[userClickedButton.length-1]) {

        if (userClickedButton.length == gamePattern.length) {
            random_button_generator();
            setTimeout(() => {
                animation(gamePattern[gamePattern.length-1])
            }, 1000);

            // animation(gamePattern[gamePattern.length-1]);
            // for (let i = 0; i < level; i++) {
            //     setTimeout(animation(gamePattern[i]), 1000);            
            // }
            console.log('Good');
        }
    }
     else {
        //bad sound
        var audio2 = new Audio('sounds/wrong.mp3');
        audio2.play();
        //show that game is over with ("Game Over, Press Any Key to Restart")
        $('h1').text('Game Over. Press any key to restart');
        //after some time start again 
        setTimeout(startOver, 2000);
        console.log('ne good');
    }

}

function startOver() {
    userClickedButton = [];
    level = 0;
    gamePattern = [];
}



