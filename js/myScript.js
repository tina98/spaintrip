var score=1;

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function UpScore(){
    document.getElementById("score").innerHTML=score;
    score++;
}
