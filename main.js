let bill = 0
let tipPercentage = 0 
let numberOfPeople = 
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill")
    calculate()
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = documen.querySelector("#people").ValueAsNumber
    calculate()
}

function receiveTipPercentageValue(value) {
    if (buttonSelected!== null){
        buttonSelected.classList.remove("button-selected")
        calculate()
}
   let customTipImput = document.querySelector("#custom-tip").ValueAsNumber
    
   console.log(customTipImput)

   if (customTipImput!==""){
    customTipImput.value =  ""

   }


    tipPercentage = value / 100
    console.log(tipPercentage)

    buttonSelected = document.querySelector('#button-${value}')
    buttonSelected.classList.add("buttonSelected")
}

function receiveCustonTipPercentageValue(){
  buttonSelected = null 
 }

 tipPercentage = document.querySelector("#custom-Tip").ValueAsNumber / 100
 calculate()

}

function calculate(){
  if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0)
    let amoutStrong = document.querySelector(".amout strong")
    let tipAmoutPerson = (bill * tipPercentage) / numberOfPeople
    amoutStrong.innerText = '$${tipAmoutPerson.toFixed(2)}'

    let totalStrong = document.querySelector(".total strong")
    let totalPerson = (bill / numberOfPeople) + tipAmoutPerson
    totalStrong.innerText = '$${totalPerson.toFixed(2)}'


   } else {
    console.log("preencha tudo")
   }
 }
  
 function reset(){
    document.querySelector("#bill").value = ""
    
    numberOfPeople = 0
    document.querySelector("#people").value = ""

    tipPercentage = 0
    removeButtonSeectedClass()

    let customTipImput = document.querySelector("#custom-tip").ValueAsNumber
    
   console.log(customTipImput)

   if (customTipImput!==""){
    customTipImput.value =  ""
}

 } document.querySelector(".amout strong").innerText = "$0.00"
document.querySelector(".total strong").innerText = "$0.00"

function removeButtonSeectedClass(){
    if (buttonSelected!== null){
        buttonSelected.classList.remove("button-selected")

}
