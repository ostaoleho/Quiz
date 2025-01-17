import { createPopup } from "./createUI";
import { gameData, requestHeadings } from "./data";
export const questions = [];

export async function getHeadings() {
    requestHeadings.questionAmount = document.querySelector('#number').value;
    requestHeadings.category = document.querySelector('#categories').value;
    requestHeadings.difficult = document.querySelector('#difficulty').value;
    requestHeadings.type = document.querySelector('#type').value;

    await getData();
}

export async function getData() {
    gameData.currentQuestion = 0;
    questions.length = 0;
    const data = requestHeadings.questionAmount <= 50 && requestHeadings.questionAmount > 0 
        ?  await fetch(`https://opentdb.com/api.php?amount=${requestHeadings.questionAmount}&category=${requestHeadings.category}&difficulty=${requestHeadings.difficult}&type=${requestHeadings.type}`) 
        : document.body.querySelector('.popup-div') 
            ? (
                document.body.removeChild(document.querySelector('.popup-div')),
                createPopup('Amount should be lower or equal 50 and an integer')
            ) 
            : createPopup('Amount should be lower or equal 50 and an integer');
            
    const dataJSON = await data.json();


    dataJSON.results.forEach(element => {
        questions.push(element);
    });

    return dataJSON.results;
}



