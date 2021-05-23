const quizData = [
    {
        question: "¿Cuantos años tiene Messi?",
        a: "29",
        b: "30",
        c: "33",
        d: "34",
        correct: "c"
    },    {
        question: "¿Cuantos años tiene Ronaldo?",
        a: "25",
        b: "32",
        c: "35",
        d: "36",
        correct: "d"
    },    {
        question: "¿Cuantos años tiene Pelé?",
        a: "80",
        b: "81",
        c: "79",
        d: "85",
        correct: "a"
    },    {
        question: "¿Cuantos años tiene Verón?",
        a: "45",
        b: "46",
        c: "47",
        d: "48",
        correct: "d"
    }
];

const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const sumbitBtn = document.getElementById("sumbit");
const answerClass = document.querySelectorAll(".answer-class");
const sumbitStart = document.getElementById("sumbit-start")
const resetBtn = document.getElementById("reset-quiz");
const scoreTotal = document.getElementById("score-total")

let currentQuiz = 0;
let score=0;

function startQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML =  currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    deselected();
}

function selected(){
    let answer = undefined;
    answerClass.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselected(){
    answerClass.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}
 
sumbitStart.addEventListener('click', () =>{
    document.getElementById("asd").classList.remove("display-none")
    document.getElementById("qwe").classList.add("display-none")
});

sumbitBtn.addEventListener('click', () =>{

    const answer = selected();
    if(answer){
                
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            startQuiz();
            console.log(answer);            
        }else{
            document.getElementById("asd").classList.add("display-none")
            document.getElementById("zxc").classList.remove("display-none")
            scoreTotal.innerHTML +=`${score}`
            // alert("tus respuestas correctas fueron:")
            // alert(`${score}`);
            // location.reload();
        }
    }

    console.log(score);

});

resetBtn.addEventListener('click', () =>{
    location.reload();
});

startQuiz();
