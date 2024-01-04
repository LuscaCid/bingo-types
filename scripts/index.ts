const input : HTMLInputElement | null = document.querySelector('#inputQTY')
const displayRange : HTMLSpanElement | null = document.querySelector('#display-range')
const saveChangesButton : HTMLButtonElement | null = document.querySelector("#save-changes")
const sortButton : HTMLButtonElement | null = document.querySelector('#sort-buttton')
let actualValue : number;
let actualNumbersSorted : number []= []

const VerifyArr = (randomNumber : number) : undefined | number =>  {
    
    const thisValueAlreadyExistsInArray = actualNumbersSorted.filter((each) => each === randomNumber)
    if(thisValueAlreadyExistsInArray)return undefined
    return actualNumbersSorted.push(randomNumber)
}

type LastNumMessage = "Ultimo numero possivel"
const lastNumMessage : LastNumMessage = "Ultimo numero possivel"

const sortANewNumber = () : LastNumMessage | void =>{
    let randomNumber : number = Math.round(Math.random() * actualValue)
    let try1 = VerifyArr(randomNumber)
    let count : number = 0
    if(!try1){
        while(!try1){
            count++
            randomNumber = Math.round(Math.random() * actualValue)
            try1 = VerifyArr(randomNumber)
            if(try1)break;
            else if(count > actualValue){
                return lastNumMessage
            } 
        }
    }
}

sortButton?.addEventListener('click', sortANewNumber)

input?.addEventListener('input', () => {
    actualValue = Number(input.value)
    let stringActual : any = String(actualValue)
    if(displayRange){
        displayRange.innerHTML = stringActual.padStart(2 , '0')
    }     
})
//informations will be received from localstorage 
window.document.addEventListener('DOMContentLoaded', () => {
    console.log('incializou')
    actualValue = Number(localStorage.getItem("@Bingo-range"))
})
//info that will be saved when modal clses
const saveChangesFunction = (e : Event) => {
    e.preventDefault()
    localStorage.setItem('@Bingo-range', JSON.stringify(actualValue))
}
saveChangesButton?.addEventListener('click', saveChangesFunction)


