let buttonColours=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];
function nextSequence()
{
    let randomNumber= Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function()
{
    let userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function playSound(name)
{
    let audio= new Audio("/patternMemory/sounds/" + name + ".mp3");
    audio.play();
}

$(document).keypress(nextSequence());