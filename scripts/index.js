"use strict";
const input = document.querySelector('#inputQTY');
const displayRange = document.querySelector('#display-range');
const saveChangesButton = document.querySelector("#save-changes");
const sortButton = document.querySelector('#sort');
let actualValue = 5;
let actualNumbersSorted = [];
//preciso criar um array que receba os numeros sorteados para verificar se ja estao no original
//uma matriz
const VerifyArr = (randomNumber) => {
    const arrLength = actualNumbersSorted.length;
    console.log(arrLength);
    if (arrLength < actualValue) {
        for (let i = 0; i < arrLength; i++) {
            if (actualNumbersSorted[i] == randomNumber) {
                randomNumber = Math.round(Math.random() * 5);
                VerifyArr(randomNumber); //caso esteja no vetor, retorna a funcao para ser executada dnv
            }
        }
    }
    else
        return false;
    return true;
};
const lastNumMessage = "Ultimo numero possivel";
const sortANewNumber = () => {
    const randomNumber = Math.round(Math.random() * 2);
    const isPossible = VerifyArr(randomNumber);
    if (isPossible)
        return actualNumbersSorted.push(randomNumber);
    console.log(actualNumbersSorted);
    if (!isPossible)
        return alert('nao eh mais possivel sortar');
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
    let arrTest = [1, 3, 4, 5, 5, 4, 4, 3, 3, 4,];
    localStorage.setItem("@test", JSON.stringify(arrTest));
    console.log(localStorage.getItem("@test"));
    const sss = localStorage.getItem("@test");
    let actualNumbersSorted = sss === null || sss === void 0 ? void 0 : sss.split(',').map(element => {
        if (element.includes('['))
            return Number(element.replace('[', ' '));
        else if (element.includes(']'))
            return Number(element.replace(']', ' '));
        else
            return Number(element);
    });
    console.log(actualNumbersSorted);
});
//info that will be saved when modal clses
const saveChangesFunction = (e) => {
    e.preventDefault();
    localStorage.setItem('@Bingo-range', JSON.stringify(actualValue));
};
saveChangesButton === null || saveChangesButton === void 0 ? void 0 : saveChangesButton.addEventListener('click', saveChangesFunction);
//ele vai clicar para sortear um novo numero, para isso inicialmente deve-se verificar se nos numeros
/**
 * que ja foram sorteados, n foi sorteado novamente, se for, vai lançar outro sorteio
 */ 
