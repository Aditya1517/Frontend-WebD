

var buttonColours  = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;


$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
});

// we are creating this function out of the nextSequnce because we this function is listening to the click that happpned
$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    // here $(this) refres to current elemnt , here it is button and .attr("id") does the work of getting the value from the id which is stored in the id

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    // console.log(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

})


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }

    }
    else{
        console.log("wrong");

        playSound("wrong")

        $("body").addClass("game-over");
        
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function (){
            $("body").removeClass   ("game-over");
        },200);


        startOver();

    }

}


function nextSequence(){

    userClickedPattern = []; 

    level++;

    var random = Math.random()*4;

    var randomChosenColour =buttonColours[ Math.floor(random)];

    gamePattern.push(randomChosenColour);       // this how we add new elemets to array

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");

    // to add time delay we use timeout function
    setTimeout(function(){
        ("#"+currentColour).removeClass("pressed");
    }, 100);


}



// in js there is no need to specify the datatype of the parameter which we are using 
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
