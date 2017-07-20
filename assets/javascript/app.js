var questions = [{
	text: "What is the official name of the community college?",
	correctAnswer: "Greendale",
	image:"assets/images/greendale.jpg",
	a1: {
		display: "A.",
		text:"Greenfield",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "Green City",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "Greendale",
		status: "Correct"
	},
	a4: {
		display: "D.",
		text: "Greenwood",
		status: "Incorrect"
	}
},
{
	text: "What is the name of the local rival college?",
	correctAnswer: "City College",
	image:"assets/images/citycollege.jpg",
	a1: {
		display: "A.",
		text:"City College",
		status: "Correct"
	},
	a2: {
		display: "B.",
		text: "Champion College",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "People's College",
		status: "Incorrect"
	},
	a4: {
		display: "",
		text: "",
		status: ""
	}
},
{
	text: "What was Jeff Winger's profession before he started attending community college?",
	correctAnswer: "Lawyer",
	image:"assets/images/jeffwinger.jpg",
	a1: {
		display: "A.",
		text:"Accountant",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "Architect",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "Doctor",
		status: "Incorrect"
	},
	a4: {
		display: "D.",
		text: "Lawer",
		status: "Correct"
	}
},
{
	text: "What is Abed studying?",
	correctAnswer: "Film",
	image:"assets/images/abed.jpg",
	a1: {
		display: "A.",
		text:"History",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "Film",
		status: "Correct" 
	},
	a3: {
		display: "C.",
		text: "Cookery",
		status: "Incorrect"
	},
	a4: {
		display: "D.",
		text: "Accounting",
		status: "Incorrect"
	}
},
{
	text: "What subject was the study group originally set up for?",
	correctAnswer: "Spanish",
	image:"assets/images/studygroup.jpg",
	a1: {
		display: "A.",
		text:"Science",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "History",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "Spanish",
		status: "Correct"
	},
	a4: {
		display: "D.",
		text: "Math",
		status: "Incorrect"
	}
},
{
	text: "Why did Annie have to drop out of high school?",
	correctAnswer: "She was addicted to Adderall",
	image:"assets/images/annie.jpg",
	a1: {
		display: "A.",
		text:"She got pregnant",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "She was an alcoholic",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "She was addicted to Adderall",
		status: "Correct"
	},
	a4: {
		display: "D.",
		text: "She punched a teacher",
		status: "Incorrect"
	}
},
{
	text: "What was Troy's sport of choice in high school?",
	correctAnswer: "Football",
	image:"assets/images/troy.jpg",
	a1: {
		display: "A.",
		text:"Hockey",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "Football",
		status: "Correct" 
	},
	a3: {
		display: "C.",
		text: "Baseball",
		status: "Incorrect"
	},
	a4: {
		display: "D.",
		text: "Basketball",
		status: "Incorrect"
	}
},
{
	text: "Chang had several roles in the college over the seasons, but what was his first?",
	correctAnswer: "Spanish Teacher",
	image:"assets/images/chang.png",
	a1: {
		display: "A.",
		text:"Janitor",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "Campus Security",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "Student",
		status: "Incorrect"
	},
	a4: {
		display: "D.",
		text: "Spanish Teacher",
		status: "Correct"
	}
},
{
	text: "What is the name of community college's Dean?",
	correctAnswer: "Craig Pelton",
	image:"assets/images/craigpelton.jpg",
	a1: {
		display: "A.",
		text:"Craig Pelton",
		status: "Correct"
	},
	a2: {
		display: "B.",
		text: "Dan Harmon",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "Jon Waters",
		status: "Incorrect"
	},
	a4: {
		display: "D.",
		text: "Lloyd Garland",
		status: "Incorrect"
	}
},
{
	text: "Pierce Hawthorne was heir to a company that produced what?",
	correctAnswer: "Wipes",
	image:"assets/images/pierce.png",
	a1: {
		display: "A.",
		text:"Sandwiches",
		status: "Incorrect"
	},
	a2: {
		display: "B.",
		text: "Microwaves",
		status: "Incorrect" 
	},
	a3: {
		display: "C.",
		text: "Wipes",
		status: "Correct"
	},
	a4: {
		display: "D.",
		text: "Air Conditioners",
		status: "Incorrect"
	}
}]

//-----------------------------Game Code---------------------------------//
var currentQuestion = 0
var tov; //timeout variable
var iv; //interval variable
var correctTotal = 0
var incorrectTotal = 0
var intervalCount = 15
var percentCorrect = 0

$("#playAgain").hide()
$("#startButton").html("Click here to begin.").on("click", function() {
	$("#startButton").hide()
	displayQuestion(questions[currentQuestion])
})

function displayQuestion(questionNum) {
if (currentQuestion<10) {
	$("#result").html("")
	$("#gameEnd").html("")
	$("#image").html("")
	$("#question").html(questionNum.text)
	$("#displayCorrect").html("Correct: "+correctTotal)
	$("#displayIncorrect").html("Incorrect: "+incorrectTotal)
	tov = setTimeout("displayResultOutOfTime()",16000)
	timer()
	
	$("#answer1").html(questionNum.a1.display+" "+questionNum.a1.text).on("click", function() {
		clearTimeout(tov)
		clearInterval(iv)
		$(".answers").off()
		if (questionNum.a1.status==="Correct") {
			displayResultCorrect()
		} else displayResultIncorrect()
	})
	$("#answer2").html(questionNum.a2.display+" "+questionNum.a2.text).on("click", function() {
		clearTimeout(tov)
		clearInterval(iv)
		$(".answers").off()
		if (questionNum.a2.status==="Correct") {
			displayResultCorrect()
		} else displayResultIncorrect()
	})
	$("#answer3").html(questionNum.a3.display+" "+questionNum.a3.text).on("click", function() {
		clearTimeout(tov)
		clearInterval(iv)
		$(".answers").off()
		if (questionNum.a3.status==="Correct") {
			displayResultCorrect()
		} else displayResultIncorrect()
	})
	$("#answer4").html(questionNum.a4.display+" "+questionNum.a4.text).on("click", function() {
		clearTimeout(tov)
		clearInterval(iv)
		$(".answers").off()
		if (questionNum.a4.status==="Correct") {
			displayResultCorrect()
		} else displayResultIncorrect()
	})
}
else {
	$(".answers").off()
	clearTimeout(tov)
	clearInterval(iv)
	$("#playAgain").show()
	percentCorrect=correctTotal/questions.length*100
	$("#percentCorrect").html("You got "+percentCorrect+"%")
	$("#displayCorrect").html("")
	$("#displayIncorrect").html("")
	$("#image").html("")
	$("#timer").hide()
	$("#question").hide()
	$(".answers").hide()
	$("#result").html("")
	$("#gameEnd").html("You have completed the Trivia Quiz.")
	$("#playAgain").html("Play Again?").on("click",function(){
		$("#playAgain").off()
		currentQuestion=0
		correctTotal = 0
		incorrectTotal = 0
		$("#percentCorrect").html("")
		$("#displayIncorrect").html("Incorrect: "+incorrectTotal)
		$("#displayCorrect").html("Correct: "+correctTotal)
		$("#timer").show()
		$("#question").show()
		$(".answers").show()
		$("#playAgain").hide()
		displayQuestion(questions[currentQuestion])
	})
}
}

function displayResultIncorrect() {
	$("#result").html("Incorrect. The correct answer was '"+questions[currentQuestion].correctAnswer+".'")
	$("#image").html("<img src="+questions[currentQuestion].image+" style='width:auto;height:300px;border:solid black 8px'>")
	currentQuestion++
	incorrectTotal++
	$("#displayIncorrect").html("Incorrect: "+incorrectTotal)
	console.log(currentQuestion)
	setTimeout("displayQuestion(questions[currentQuestion])",7000)
}
function displayResultCorrect() {
	$("#result").html("Correct!")
	$("#image").html("<img src="+questions[currentQuestion].image+" style='width:auto;height:300px;border:solid black 8px'>")
	currentQuestion++
	correctTotal++
	$("#displayCorrect").html("Correct: "+correctTotal)
	console.log(currentQuestion)
	setTimeout("displayQuestion(questions[currentQuestion])",7000)

}
function displayResultOutOfTime() {
	$("#result").html("You ran out of time. The correct answer was '"+questions[currentQuestion].correctAnswer+".'")
	$("#image").html("<img src="+questions[currentQuestion].image+" style='width:auto;height:300px;border:solid black 8px'>")
	$(".answers").off()
	clearTimeout(tov)
	clearInterval(iv)
	currentQuestion++
	incorrectTotal++
	$("#displayIncorrect").html("Incorrect: "+incorrectTotal)
	console.log(currentQuestion)
	setTimeout("displayQuestion(questions[currentQuestion])",7000)
}

function timer() {
	clearInterval(iv)
	intervalCount = 15
	$("#timer").html("Time Remaining: "+intervalCount+" seconds")
	iv = setInterval(function(){
		intervalCount = intervalCount-1
		$("#timer").html("Time Remaining: "+intervalCount+" seconds")
	},1000)
}
