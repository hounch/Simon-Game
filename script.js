$(document).keypress(function() {
    //random_generator also will call sound and animation
    random_button_generator()
});


$(".btn").click(function() {
    //animation
    var chosenColor = $(this).attr('id'); //yellow
    sounds(chosenColor);

    animation(chosenColor);
    random_button_generator();
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

function random_button_generator(name) {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    // save current button
    sounds()
    animation() 
}


function checkAnswer(params) {
    
}

function startOver(params) {
    
}

function level_keeper(params) {
    
}

function next_button(params) {
    
}
