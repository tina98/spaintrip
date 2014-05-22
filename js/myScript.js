var score=1;

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function UpScore(){
    document.getElementById("team1score").innerHTML=score;
    score++;
}

function HideInstructions(){
    $('div#instructions').hide();
    document.getElementById("instructions").hide;
}
