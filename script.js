var questions = [
        {
            question: "What is the best way to save money?",
            answers: [
                { option: "A. Keeping all your money in a checking account", correct: false },
                { option: "B. Investing in the stock market", correct: false },
                { option: "C. Putting money into a savings account", correct: true }
            ]
        },
        {
            question: "What is the purpose of a budget?",
            answers: [
                { option: "A. To spend as much money as possible", correct: false },
                { option: "B. To track income and expenses", correct: true },
                { option: "C. To avoid paying taxes", correct: false }
            ]
        },
        {
            question: "How can you earn money to put into your savings account?",
            answers: [
                { option: 'A. By "borrowing" your parents card for money', correct: false },
                { option: "B. By selling lemonade", correct: true },
                { option: "C. By playing video games all day", correct: false }
            ]
        },
        {
            question: "What is a credit card used for?",
            answers: [
                { option: "A. To buy things now and pay for them later", correct: true },
                { option: "B. To save money for emergencies", correct: false },
                { option: "C. To give as a gift to friends", correct: false }
            ]
        },
        {
            question: "How do you pay off credit on a credit card?",
            answers: [
                { option: "A. By paying the credit card company the amount you owe", correct: true },
                { option: "B. By asking your parents to lend you money", correct: false },
                { option: "C. By buying more things with the credit card", correct: false }
            ]
        },
        {
            question: "What is interest on a credit card?",
            answers: [
                { option: "A. Money the bank pays you for using their card", correct: false },
                { option: "B. Money you have to pay the bank for borrowing money", correct: true },
                { option: "C. Money you get from your parents for good grades", correct: false }
            ]
        },
        {
            question: "Why is it important to pay your credit card bill on time?",
            answers: [
                { option: "A. Because the bank will give you more money", correct: false },
                { option: "B. Because you might have to pay extra fees or interest", correct: true },
                { option: "C. Don't do it because it's fun to pay bills late", correct: false }
            ]
        },
        {
            question: "What is a budget?",
            answers: [
                { option: "A. A list of all the toys you want to buy", correct: false },
                { option: "B. A plan for how you will spend and save your money", correct: true },
                { option: "C. A game you play with your friends", correct: false }
            ]
        },
        {
            question: "How can you save money when shopping for toys or clothes?",
            answers: [
                { option: "A. By always buying the most expensive items", correct: false },
                { option: "B. By looking for sales or using coupons", correct: true },
                { option: "C. By asking your parents for more money", correct: false }
            ]
        },
        {
            question: "What is the difference between a debit card and a credit card?",
            answers: [
                { option: "A. Debit cards are for adults, and credit cards are for kids", correct: false },
                { option: "B. Debit cards take money directly from your bank account, while credit cards borrow money from the bank", correct: true },
                { option: "C. There is no difference, they are the same thing", correct: false }
            ]
        },
        {
            question: "How can Capital One help you learn about money?",
            answers: [
                { option: "A. By teaching you how to save and spend wisely through Capital One Jr. programs", correct: true },
                { option: "B. By giving you free toys and games", correct: false },
                { option: "C. By showing you how to buy lots of things you want without saving money", correct: false }
            ]
        }
];

var currentQuestion = 0;
var score = 0;
var timeLeft = 100;
var timer; 

function displayQuestion() {
    var question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;

    var answersHTML = '';
    question.answers.forEach(function(answer) {
        answersHTML += '<input type="radio" name="answer" value="' + answer.correct + '">' + answer.option + '<br>';
    });
    document.getElementById('answers').innerHTML = answersHTML;
}

function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        document.getElementById('result').textContent = 'Please select an answer.';
        return;
    }

    if (selectedAnswer.value === 'true') {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    document.getElementById('questionContainer').innerHTML = '';
    document.getElementById('result').textContent = 'Game Over! Your score is: ' + score + '/' + questions.length;
    document.getElementById('restartButton').style.display = 'block';
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame();
        }
        document.getElementById('timer').textContent = 'Time Left: ' + timeLeft + 's'; // Update timer on the page
    }, 1000);
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 100;
    displayQuestion();
    startTimer();
    document.getElementById('result').textContent = '';
    document.getElementById('restartButton').style.display = 'none';
}

window.onload = function() {
    displayQuestion();
    startTimer();
};