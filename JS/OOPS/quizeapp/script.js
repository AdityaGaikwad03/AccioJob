const qBox = document.getElementById("q-box");
const aBox = document.getElementById("a-box");
const nextBtn = document.getElementById("next-btn");
const timer = document.getElementById("timer");


const Questiondata = [
    {
        statement: "What is the capital of india?",
        marks: 10,
        time: 15,
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        correctOption: 0
    },
    {
        statement: "What is the capital of France?",
        marks: 20,
        time: 30,
        options: ["Berlin", "London", "Paris", "Rome"],
        correctOption: 2
    }
];

class Question{
    constructor(statement, marks,time){
        this.statement = statement;
        this.marks = marks;
        this.time = time;
    }
    validate(){

    }
    display(){

    }

    startTimer(){
        this.stopTimer(); // clear any existing timer
        let timeLeft = this.time;
        const updateDisplay = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timer.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };
        updateDisplay();
        this._timerInterval = setInterval(() => {
            timeLeft--;
            if(timeLeft <= 0){
                clearInterval(this._timerInterval);
                this._timerInterval = null;
                updateDisplay();
                nextBtn.click();
            } else {
                updateDisplay();
            }
        }, 1000);
    }

    stopTimer(){
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
            this._timerInterval = null;
        }
    }
}

class MCQQuestion extends Question{
    constructor(statement, marks, time, options, correctOption){
        super(statement, marks, time);
        this.options = options;
        this.correctOption = correctOption;
        this.userAnswer = null;
    }
    validate(){
        return this.userAnswer === this.correctOption;
    }
    display(){
        qBox.textContent = this.statement;
        aBox.innerHTML = "";
        this.options.forEach((option, index) => {
            const optionElem = document.createElement("button");
            optionElem.textContent = option;
            optionElem.classList.add('option-btn');
            optionElem.addEventListener("click", () => {
                this.userAnswer = index;
                // clear active class on other buttons and mark this one
                [...aBox.children].forEach(btn => btn.classList.remove("active"));
                optionElem.classList.add("active");
            });
            aBox.appendChild(optionElem);
        });
    }
}



class Quiz{
    constructor(questions){
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalscore = this.questions.reduce((s, q) => s + q.marks, 0);
        this._boundNext = this.next.bind(this);
    }

    start(){
        nextBtn.disabled = false;
        nextBtn.addEventListener('click', this._boundNext);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.showCurrent();
    }

    showCurrent(){
        if (this.currentQuestionIndex === this.questions.length - 1) {
        nextBtn.textContent = "Finish Quiz";
    } else {
        nextBtn.textContent = "Next Question";
    }
        const q = this.questions[this.currentQuestionIndex];
        q.display();
        if (typeof q.startTimer === 'function') q.startTimer();
    }

    next(){
    const currentQ = this.questions[this.currentQuestionIndex];

    if (currentQ.userAnswer === null) {
        alert("Please select an option");
        return;
    }

    if (typeof currentQ.stopTimer === 'function') {
        currentQ.stopTimer();
    }

    if (typeof currentQ.validate === 'function' && currentQ.validate()) {
        this.score += currentQ.marks;
    }

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
        qBox.textContent = `Quiz finished! Score: ${this.score}/${this.totalscore}`;
        aBox.innerHTML = '';
        timer.textContent = '';
        nextBtn.disabled = true;
        nextBtn.textContent = "Quiz Finished";
        nextBtn.removeEventListener('click', this._boundNext);
    } else {
        this.showCurrent();
    }
}
}
const questions = Questiondata.map((q) => {
    const mcqQ = new MCQQuestion(q.statement, q.marks, q.time, q.options, q.correctOption);
    return mcqQ;
});

const quiz = new Quiz(questions);
quiz.start();
