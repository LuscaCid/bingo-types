"use strict";
const input = document.querySelector('#inputQTY');
const displayRange = document.querySelector('#display-range');
const saveChangesButton = document.querySelector("#save-changes");
const sortButton = document.querySelector('#sort-buttton');
let actualValue;
let actualNumbersSorted = [];
const VerifyArr = (randomNumber) => {
    const thisValueAlreadyExistsInArray = actualNumbersSorted.filter((each) => each === randomNumber);
    if (thisValueAlreadyExistsInArray)
        return undefined;
    return actualNumbersSorted.push(randomNumber);
};
const lastNumMessage = "Ultimo numero possivel";
const sortANewNumber = () => {
    let randomNumber = Math.round(Math.random() * actualValue);
    let try1 = VerifyArr(randomNumber);
    let count = 0;
    if (!try1) {
        while (!try1) {
            count++;
            randomNumber = Math.round(Math.random() * actualValue);
            try1 = VerifyArr(randomNumber);
            if (try1)
                break;
            else if (count > actualValue) {
                return lastNumMessage;
            }
        }
    }
};
sortButton === null || sortButton === void 0 ? void 0 : sortButton.addEventListener('click', sortANewNumber);
input === null || input === void 0 ? void 0 : input.addEventListener('input', () => {
    actualValue = Number(input.value);
    let stringActual = String(actualValue);
    if (displayRange) {
        displayRange.innerHTML = stringActual.padStart(2, '0');
    }
});
//informations will be received from localstorage 
window.document.addEventListener('DOMContentLoaded', () => {
    console.log('incializou');
    actualValue = Number(localStorage.getItem("@Bingo-range"));
});
//info that will be saved when modal clses
const saveChangesFunction = (e) => {
    e.preventDefault();
    localStorage.setItem('@Bingo-range', JSON.stringify(actualValue));
};
saveChangesButton === null || saveChangesButton === void 0 ? void 0 : saveChangesButton.addEventListener('click', saveChangesFunction);
