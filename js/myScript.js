var score1=0;
var score2=0;
var qnum=0;
var teamnow=0;
var t1=1;
var t2=2;
var flag=1;

function myFunction() {
 // document.getElementById("demo").innerHTML = "Paragraph changed.";        
   
    if (document.getElementById("firstanswer").value=="q"){
	    teamnow=t1;
	    //document.getElementById("demo").innerHTML = "t1";    
	    document.getElementById("team1").style.fontWeight="bold";
	    document.getElementById("team2").style.fontWeight="normal";

	    
    } else
    if (document.getElementById("firstanswer").value=="p"){
        teamnow=t2;
        // document.getElementById("demo").innerHTML="t2";
        document.getElementById("team2").style.fontWeight="bold";
        document.getElementById("team1").style.fontWeight="normal";
        
    } 
    //else if ((document.getElementById("firstanswer").value!==="p")||(document.getElementById("firstanswer").value!==="q")) {
    //	alert("You must pick p or q");
    //	document.getElementById("firstanswer").style.focus();
    //}
    var currentq=questionList[qnum];
        if (currentq.typeq==="bl"){
        	document.getElementById("answer").focus();
        }
        if (currentq.typeq==="mc"){
        	document.getElementById("firstanswer").blur();
        }
}

function UpScore(){

	if (teamnow===t2){
		score2++;
		document.getElementById("t2S").innerHTML=score2;
		document.getElementById("team2").style.color="#00FF00";
		document.getElementById("team2point").style.display="inline";
		document.getElementById("actualgame").style.display="none";
	}
	if (teamnow===t1){
		score1++;
		document.getElementById("t1S").innerHTML=score1;
		document.getElementById("team1").style.color="#00FF00";
		document.getElementById("team1point").style.display="inline";
		document.getElementById("actualgame").style.display="none";
	}
	qnum++;
	if (qnum===3){
		winner();
	} 
	setTimeout(function(){Reset()},1450);
	setTimeout(function(){go()},1500);
	setTimeout(function(){goAwayPinata()},1600);
	
	
	
}
function goAwayPinata(){
	document.getElementById("team1point").style.display="none";
	document.getElementById("team2point").style.display="none";
	document.getElementById("actualgame").style.display="inline";
	document.getElementById("firstanswer").focus();
}

function Reset(){
	document.getElementById("firstanswer").value="";
	document.getElementById("answer").value="";
	document.getElementById("firstanswer").focus();
	document.getElementById("mc1").innerHTML="";
	document.getElementById("mc2").innerHTML="";
	document.getElementById("mc3").innerHTML="";
	document.getElementById("mc4").innerHTML="";
	document.getElementById("mc1").style.textDecoration="none";
	document.getElementById("mc2").style.textDecoration="none";
	document.getElementById("mc3").style.textDecoration="none";
	document.getElementById("mc4").style.textDecoration="none";
	document.getElementById("skipthis").style.display="none";
	document.getElementById("team1").style.fontWeight="normal";
	document.getElementById("team2").style.fontWeight="normal";
	

}

function HideInstructions(){
    document.getElementById("beginning").style.display="none";
    document.getElementById("firstanswer").focus();
    document.getElementById("actualgame").style.display="inline";
    qnum=1;
    go();
    
}

function ShowExample(){
	document.getElementById("beginning").style.display="none";
    	document.getElementById("firstanswer").focus();
	document.getElementById("actualgame").style.display="inline";
	qnum=0;
    	go();
}

function go(){
	if (qnum===3){
		winner();
	} 
	// document.getElementById("intro").style.display="none";
    document.getElementById("question#").innerHTML=qnum;
    document.getElementById("team1").style.color="black";
    document.getElementById("team2").style.color="black";
    document.getElementById("firstanswer").focus();
    var currentq=questionList[qnum];
    if (currentq.typeq==="bl"){
    	document.getElementById("bl").style.display="inline";
    	document.getElementById("question").innerHTML=currentq.q;
    	document.getElementById("mc").style.display="none";
    } if (currentq.typeq==="mc"){
    	document.getElementById("bl").style.display="none";
    	document.getElementById("mc").style.display="inline";
    	
    	document.getElementById("question").innerHTML=currentq.qMC;
    	document.getElementById("mc1").innerHTML=currentq.a1;
    	document.getElementById("mc2").innerHTML=currentq.a2;
    	document.getElementById("mc3").innerHTML=currentq.a3;
    	document.getElementById("mc4").innerHTML=currentq.a4;
    	}
    	
    	if ((qnum===1)&& (flag===1)){
    	  	theIntro();
  
    	}

	
    	setTimeout(function(){document.getElementById("skipthis").style.display="inline";},5000);
}

function theIntro(){
	document.getElementById("intro").style.display="inline";
	document.getElementById("beginning").style.display="none";
    //document.getElementById("firstanswer").focus();
    document.getElementById("actualgame").style.display="none";
    //qnum=1;
    //go();
}

function goToQ1(){
	document.getElementById("intro").style.display="none";
	flag=2;
	document.getElementById("actualgame").style.display="inline";
	go();
}

function skip(){
	qnum++;
	Reset();
	go();

	
	
}

function check(){
	var currentq=questionList[qnum];
	    if (document.getElementById("answer").value==currentq.a){
		 //document.getElementById("demo").innerHTML = "gotthis.";
		UpScore();
	    }else{
		SwitchTeams();
	    	}

	// else if (currentq.typeq==="mc"){
	// 	checkMC(); //CHANGE THIS SHIT
	// }
}

function checkA(){
	
	currentq=questionList[qnum];
	if ("a1"===currentq.a5){
		UpScore();
	}else{
		document.getElementById("mc1").style.textDecoration="line-through";
		SwitchTeams();
	}
}
function checkB(){
	
	currentq=questionList[qnum];
	if ("a2"===currentq.a5){
		UpScore();
	}else{
		document.getElementById("mc2").style.textDecoration="line-through";
		SwitchTeams();
	}
}
function checkC(){
	
	currentq=questionList[qnum];
	if ("a3"===currentq.a5){
		UpScore();
	}else{
		document.getElementById("mc3").style.textDecoration="line-through";
		SwitchTeams();
	}
}function checkD(){
	
	currentq=questionList[qnum];
	if ("a4"===currentq.a5){
		UpScore();
	}else{
		document.getElementById("mc4").style.textDecoration="line-through";
		SwitchTeams();
	}
}

function SwitchTeams(){
	// document.getElementById("demo").innerHTML="switchh";
	if (teamnow===t1){
	    		teamnow=t2;
        // document.getElementById("demo").innerHTML="t2";
        document.getElementById("team2").style.fontWeight="bold";
        document.getElementById("team1").style.fontWeight="normal";
        document.getElementById("answer").value="";
        document.getElementById("answer").focus();

	    } else if (teamnow===t2){
	    		teamnow=t1;
	    //document.getElementById("demo").innerHTML = "t1";    
	    document.getElementById("team1").style.fontWeight="bold";
	    document.getElementById("team2").style.fontWeight="normal";
	    document.getElementById("answer").value="";
	    document.getElementById("answer").focus();
	    	}
	    
}
//typeq: questionFITB-true, questionMC-false;
	function QuestionFITB (typeq, qnum, q, a){
 	 this.typeq=typeq;
  	 this.qnum=qnum;
  		this.q=q;
  		this.a=a;
  	}

	function QuestionMC (typeq, qnum, qMC, a1, a2, a3, a4, a5){
		this.typeq=typeq;
		this.qnum=qnum;
		this.qMC=qMC;
		this.a1=a1;
		this.a2=a2;
		this.a3=a3;
		this.a4=a4;
		this.a5=a5;

	}

 var q00=new QuestionMC("mc", 0, "Qué clase tomas tú?", "Español 1", "Español 2", "Español 3", "Español 4", "a2");
  var q01=new QuestionFITB("bl", 1, "Tranduce la palabra. The telephone.", "El teléfono");
  var q02=new QuestionFITB("bl", 2, "Tú / contestar / el teléfono. (futuro tense)", "Tú contestarás el teléfono.");
var q03=new QuestionMC("mc", 3, "¿Quién te llama?", "El amigo", "El mesero", "El cocinero", "La dependienta", "a1");
var q04=new QuestionFITB("bl", 4, "El señor manda el documento por _______.", "El fax");
var q05=new QuestionMC("mc", 5, "¿Cómo llega el España?", "Por el taxi", "Por el avión", "Ir a pie", "Por el coche", "a2");
var q06=new QuestionMC("mc", 6, "¿Qué no necesita en el aeropuerto?", "El billete", "El pasaporte", "La tarjeta", "La cama", "a4");
var q07=new QuestionMC("mc", 7, "España es  _______.", "El destino", "El aeropuerto", "La muchacha", "Extranjero", "a1");
var q08=new QuestionFITB("bl", 8, "Tú / subir / al tren en España. (futuro tense)", "Tú subirás al tren en España.");
var q09=new QuestionMC("mc", 9, "El tren-7:00 A.M. El tren sale a siete del la mañana. El tren sale______.", "A ocho del noche", "A tiempo", "Con retraso", "Con una demora", "a2");
var q10=new QuestionFITB("bl", 10, "El tren / rápido / el aútobus. (compare)", "El tren es más rápido que el aútobus.");
var q11=new QuestionFITB("bl", 11, "Yo / salir / la estación de ferrocarril.  (preterite tense)", "Yo salí la estación de ferrocarril.");
var q12=new QuestionFITB("bl", 12, "Tranduce las palabras. Where do you go to watch a movie?", "¿Dónde vas a ver una película?");
var q13=new QuestionMC("mc", 13, "¿Dónde vas a ver una película?", "El muchacho", "El restaurante", "El cine", "La casa americano", "a3");
var q14=new QuestionFITB("bl", 14, "Tranduce las palabras. Later, I will go to the museum.", "Luego, yo iré al museo.");
var q15=new QuestionMC("mc", 15, "El actor y la actriz están en ______.", "El restaurante", "La escena", "El escenario", "El arte", "a2");
var q16=new QuestionMC("mc", 16, "¿Dónde vas tú para la ropa nueva?", "La ropa de tienda", "La estación", "La escuela", "La casa", "a1");
var q17=new QuestionFITB("bl", 17, "Hace frío.  ¿Qué necesitas para los manos?", "Los guantes");
var q18=new QuestionFITB("bl", 18, "Un hipermercado / grande / un colmado. (compare)", "Un hipermercado es más grande que un colmado.");
var q19=new QuestionFITB("bl", 19, "Una cadena de oro / caro / una pulsera de plástico. (compare)", "Una cadena de oro es más cara que una pulsera de plástico.");
var q20=new QuestionMC("mc", 20, "¿Dónde pones una cadena?", "El dedo", "La mano", "La cara", "El cuello", "a4");
var q21=new QuestionFITB("bl", 21, "I want some food. (Tranduce en preterite tense)", "Yo quise algunas comidas.");
var q22=new QuestionMC("mc", 22, "Tú muy cansado(a). ¿Dónde tú irás?", "El parque", "El hotel", "La tienda", "La estación", "a2");
var q23=new QuestionMC("mc", 23, "Tú necistas _______ para el hotel.", "La reservación", "La salida", "La llegada", "El coche", "a1");
var q24=new QuestionMC("mc", 24, "Tú sabir/conocer el número de cuarto. (choose and conjugate verb in present tense)", "Sabas", "Conocas", "Sabes", "Conoces", "a3");
var q25=new QuestionFITB("bl", 25, "Tú te dormirse cuando tú está en el cuarto. (Conjugate in present tense)", "Tú te duermes cuando tú estás en el cuarto.");


var questionList=[q00, q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25];
// var questionList=[q00, q01, q02, q03];

function addAccent(punc){
	// document.getElementById("demo").innerHTML="sdfsf";
	document.getElementById("answer").value=document.getElementById("answer").value+punc;
	document.getElementById("answer").focus();
	
}

function instrucs(){
	alert("Once the question shows up, team 1 hits 'Q' or team 2 hits ''P' on the keyboard to answer first. Then, they answer the question. If it's a fill in the blank question, then the team presses submit to check the answer. If it's correct, a point automatically gets added to the right team and the question advances. If it's incorrect, the other team gets to go. The teams keep switching back and forth until one team gets it right, or until someone hits the skip button. The skip button shows up after 5 seoncds of the question showing up so people won't give up right away. There's 25 total questions. Whichever team gets the most points win the game. ");
}

function homee(){
	alert("The goal of this online programmed game is to continue to explore Spain until you get tired and need to end your trip at a hotel. The game begins in Michigan, with your team finding out you won a free trip to Spain. To progress through the game, one representative from your team answers the questions. There's various types of questions, including multiple choice, sentence completition, verb conjugation, etc. relating to many different Spanish topics you have learned in Spanish 2. The team that has the most questions answered correctly at the end of the game wins.");
}

function shoutout(){
	alert("Huge thanks to Aashna for taking the time to write all these questions, to Mrs. Remy for this fun project and teaching us a semester's worth of Spanish, and to the Thunderchicken programmers for beta-testing this!");
}

function winner(){
	document.getElementById("actualgame").style.display="none";
	
	document.getElementById("WINNING").style.display="inline";
		document.getElementById("team1point").style.display="none";
	document.getElementById("team2point").style.display="none";
	if (score1>score2){
		document.getElementById("actualwinner").innerHTML="Team 1 is the winner! ";
	}
	if (score2>score1){
		document.getElementById("actualwinner").innerHTML="Team 2 is the winner! ";
	}
	if (score2===score1){
		document.getElementById("actualwinner").innerHTML="Both teams are the winners! ";
	}
}
