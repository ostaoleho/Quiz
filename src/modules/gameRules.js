import { createQuestionUI, createResultUI } from "./createUI";
import { gameData } from "./data";
import { questions } from "./getData";

export function putData(currentIndex) {
    gameData.questionsData[gameData.currentQuestion]= [
        questions[currentIndex].correct_answer,
        document.querySelector('.selected').innerHTML,
        questions[currentIndex].correct_answer === document.querySelector('.selected').innerHTML ? true : false
    ]
    return gameData;
}

export function selectAnswer() {
    const btnDiv = document.querySelector('.answers-div');
    btnDiv.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            if(btnDiv.querySelector('.selected')) {
                const activeOption = btnDiv.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            btn.classList.add('selected');
        })
    })
}

export function changeQuestion() {
    if (gameData.currentQuestion + 1 < questions.length) {
        gameData.currentQuestion +=1 
        createQuestionUI();
    } else {
        createResultUI();
    }
}

export function mathPercentage() {
    const results = gameData.questionsData.map(el => el[2]);
    const trueElems = results.filter(el => el === true).length;

    const percentage = (100 * trueElems) / results.length;
    return percentage
}

export function amountCorrectFromAll() {
    const results = gameData.questionsData.map(el => el[2]);
    const trueElems = results.filter(el => el === true).length;
    return `You answered ${trueElems} / ${questions.length} correctly`;
}

export function animatedAccordion(panelDiv) {
    if (panelDiv.style.maxHeight) {
        panelDiv.style.maxHeight = null;
    } else {
        panelDiv.style.maxHeight = "200px";
    }
}

export function accordion(panelDiv) {
    console.log(gameData)
    for (let i = 0; i < gameData.questionsData.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = `Question №${i + 1}
        Your answer: "${gameData.questionsData[i][1]}", 
        Correct answer: "${gameData.questionsData[i][0]}"`
        p.classList.add(gameData.questionsData[i][2] ? "true" : "false");
        panelDiv.appendChild(p);
    }
}