var level = 0;
let gamePattern = [];
let userClickedButton = [];

let buttonColors = ['red','blue','green','yellow'];

//HARD-TASK: Click 5 buttons if it's 5 level 

$(document).keypress(function() {
    //fix function that it callable only 
    //when game is not started
    random_button_generator();
});


$(".btn").click(function() {
    //animation
    var chosenColor = $(this).attr('id'); //yellow
    userClickedButton.push(chosenColor);
    sounds(chosenColor);
    animation(chosenColor);
    random_button_generator();
    checkAnswer();
    // console.log(userClickedButton,'user');
    // console.log(gamePattern,'game');
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
    level++;
    $('h1').text('Level: ' + level);
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    //sound again 
}


function checkAnswer() {
    console.log('clicked ' + userClickedButton[userClickedButton.length-1]);
    console.log('game ',gamePattern[gamePattern.length-1]);

    if (userClickedButton[userClickedButton.length-1] == gamePattern[gamePattern.length-1]) {
        // next sequence
        // stop generating and clicking at the same time 
        console.log('Good');

    } else {
        //bad sound
        //show that game is over with ("Game Over, Press Any Key to Restart")
        //after some time start again 
        console.log('ne good');
    }
    

    // switch (name) {
    //     case name2:
    //         random_button_generator();
    //         break;
    //     default:
    //         var audio2 = new Audio('sounds/wrong.mp3');
    //         audio2.play();
    //         startOver();
    //         break;
    // }
}

function startOver() {
    random_button_generator();
}



