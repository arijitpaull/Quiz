var quizz = [
    {
        question:"What is the worst case time complexity of merge sort?",
        a:"O(nlogn)",
        b:"O(n^2)",
        c:"O(n)",
        d:"O(n^3)",
        correct: 'a'
    },
    {
        question:"Which one of the following operators cannot be overloaded?",
        a:"+",
        b:"-",
        c:".",
        d:"*",
        correct: 'c'
    },
    {
        question:"Which of the following is not library in C?",
        a:"ctype.h",
        b:"strings.h",
        c:"math.h",
        d:"stdlib.h",
        correct: 'b'
    },
    {
        question:"Which of the following is true about SDL?",
        a:"Used to define internal schema",
        b:"Defines how record will be accessed",
        c:"Defines physical structure of DB",
        d:"All of the above",
        correct: 'd'
    }
]

var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answer = document.querySelectorAll(".answer");
var optionA = document.getElementById("a_value");
var optionB = document.getElementById("b_value");
var optionC = document.getElementById("c_value");
var optionD = document.getElementById("d_value");
var submitbtn = document.getElementById("submit"); 

var currentQue = 0;
var quizScore = 0;

loadQuiz();
function loadQuiz(){
    deselect();
    question.innerHTML = quizz[currentQue].question;
    optionA.innerHTML = quizz[currentQue].a;
    optionB.innerHTML = quizz[currentQue].b;
    optionC.innerHTML = quizz[currentQue].c;
    optionD.innerHTML = quizz[currentQue].d;
}

function deselect() {
    answer.forEach(answer=>answer.checked=false);
}

submitbtn.addEventListener('click',function(){
    var selected;
    answer.forEach(answer=>{
        if(answer.checked){
            selected = answer.id;
        }
    })
    if(selected == quizz[currentQue].correct){
        quizScore++;
    }
    currentQue++;

    if(currentQue == quizz.length){
        document.getElementById("quizdiv").innerHTML = `Your score is ${quizScore} out of ${quizz.length}`;
    } else {
        loadQuiz();
    }
})