const input : HTMLInputElement | null = document.querySelector('#inputQTY')
const displayRange : HTMLSpanElement | null = document.querySelector('#display-range')
const saveChangesButton : HTMLButtonElement | null = document.querySelector("#save-changes")
const sortButton : HTMLButtonElement | null = document.querySelector('#sort')

let actualValue : number= 5
let actualNumbersSorted : number[]= [];
//preciso criar um array que receba os numeros sorteados para verificar se ja estao no original
//uma matriz

const VerifyArr = (randomNumber : number) : boolean  =>  {
    const arrLength = actualNumbersSorted.length
    console.log(arrLength)
    if(arrLength < actualValue){
        for(let i =0; i < arrLength; i++){
            if(actualNumbersSorted[i] == randomNumber){
                randomNumber = Math.round(Math.random() * 5)
                VerifyArr(randomNumber)//caso esteja no vetor, retorna a funcao para ser executada dnv
            }
        }
    } else return false 
    return true
}

type LastNumMessage = "Ultimo numero possivel"
const lastNumMessage : LastNumMessage = "Ultimo numero possivel"

const sortANewNumber = () : LastNumMessage | void | number =>{
    const randomNumber : number = Math.round(Math.random() * 2)
    const isPossible : boolean = VerifyArr(randomNumber) 
    if(isPossible)return actualNumbersSorted.push(randomNumber)
    console.log(actualNumbersSorted)
    if(!isPossible)return alert('nao eh mais possivel sortar')
}

sortButton?.addEventListener('click', sortANewNumber)

input?.addEventListener('input', () => {
    actualValue = Number(input.value)
    let stringActual : any = String(actualValue)
    if(displayRange){
        displayRange.innerHTML = stringActual.padStart(2 , '0')
    }     
})
/*
function parseToArrayAgain<T extends string | null >(arrString : T){
    arrString?.split(',').map(element => {
        if(element.includes('['))return Number(element.replace('[', ' '))
        else if(element.includes(']'))return Number(element.replace(']', ' '))
        else return Number(element)  
    }
}*/

//informations will be received from localstorage 
window.document.addEventListener('DOMContentLoaded', () => {
    console.log('incializou')
    actualValue = Number(localStorage.getItem("@Bingo-range"))
    let arrTest : number [] = [1,3,4,5,5,4,4,3,3,4,]
    localStorage.setItem("@test", JSON.stringify(arrTest))
    console.log(localStorage.getItem("@test"))
    const sss  = localStorage.getItem("@test")

    //let actualNumbersSorted = parseToArrayAgain(sss)
    //console.log(actualNumbersSorted)
})


//info that will be saved when modal clses
const saveChangesFunction = (e : Event) => {
    e.preventDefault()
    localStorage.setItem('@Bingo-range', JSON.stringify(actualValue))
}
saveChangesButton?.addEventListener('click', saveChangesFunction)



//ele vai clicar para sortear um novo numero, para isso inicialmente deve-se verificar se nos numeros
/**
 * que ja foram sorteados, n foi sorteado novamente, se for, vai lançar outro sorteio
 */