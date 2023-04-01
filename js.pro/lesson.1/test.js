var questions = [
    {
        question: "Вопрос 1:",
        answers: {
            1: 'Неправильный ответ',
            2: 'Правильный ответ',
            3: 'Неправильный ответ',
            4: 'Неправильный ответ'
        },
        rightAnswer: '2'
    },
    {
        question: "Вопрос 2:",
        answers: {
            1: 'Неправильный ответ',
            2: 'Неправильный ответ',
            3: 'Неправильный ответ',
            4: 'Правильный ответ'
        },
        rightAnswer: '4'
    },
    {
        question: "Вопрос 3:",
        answers: {
            1: 'Правильный ответ',
            2: 'Неправильный ответ',
            3: 'Неправильный ответ',
            4: 'Неправильный ответ'
        },
        rightAnswer: '1'
    },
    {
        question: "Вопрос 4:",
        answers: {
            1: 'Правильный ответ',
            2: 'Неправильный ответ',
            3: 'Неправильный ответ',
            4: 'Неправильный ответ'
        },
        rightAnswer: '1'
    },
    {
        question: "Вопрос 5:",
        answers: {
            1: 'Неправильный ответ',
            2: 'Правильный ответ',
            3: 'Неправильный ответ',
            4: 'Неправильный ответ'
        },
        rightAnswer: '2'
    }
];
var testContainer = document.getElementById('test');
var resultButton = document.getElementById('resultButton');
var resultsContainer = document.getElementById('results');
generateTest(questions, testContainer, resultsContainer, resultButton);
function generateTest(questions, testContainer, resultsContainer, resultButton){
    function showQuestions(questions, testContainer){
        var out = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(var ans_text in questions[i].answers){
                answers.push(
                    '<label><br><input type="radio" name="question'+i+'" value="'+ans_text+'">'
                    + ans_text + ') ' + questions[i].answers[ans_text] + '</label>'
                );
            }
            out.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        testContainer.innerHTML = out.join('');
    }
    function showResults(questions, testContainer, resultsContainer){
        var answerContainers = testContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var rightAnswersNum = 0;
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector
            ('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer==questions[i].rightAnswer){
                answerContainers[i].style.color = 'green';
                rightAnswersNum++;
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        var resultStr;
        if (rightAnswersNum < 3) {
            resultStr = 'Неудовлетворительно';
        } else if(rightAnswersNum == 3){
            resultStr = 'Нужно повторить';
        } else if(rightAnswersNum == 4){
            resultStr = 'Хорошо';
        } else if(rightAnswersNum == 5){
            resultStr = 'Отлично';
        }
        resultsContainer.innerHTML = resultStr;
    }
    showQuestions(questions, testContainer);
    resultButton.onclick = function(){
        showResults(questions, testContainer, resultsContainer);
    }
}