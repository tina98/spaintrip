var score=1;
var qnum=1;
var currentquestion;

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function UpScore(){
    document.getElementById("team1score").innerHTML=score;
    score++;
}

//   $("#kdoneInstructions").click(function(){
//     $("#beginning").hide();
//   });

// function ShowQuestion(){
//     document.getElementbyId("#question#").innerHTML=qnum;
// }

// function UpQuestion(){
//     qnum++;
//     currentquestion[qnum];
//     ShowQuestion();
// }


// function HideInstructions(){
//     $("#beginnning").fadeOut();
// }

// // function CrossOut(var wrong){
// //     document.getElementById().style.text-decoration="line-through";
// // }

// function InitalizeQuestion(){
//     document.getElementById("#mc1").innerHTML="sdfsdf";
// }

// currentquestion[1]=001;
// currentquestion[2]=002;

// var 001=[];
