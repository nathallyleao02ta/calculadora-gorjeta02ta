let bill = 0
let tipPercentage = 0 
let numberOfPeople = 
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill")
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = documen.querySelector("#people").ValueAsNumber
}

function receiveTipPercentageValue(value) {
    if (buttonSelected!== null){
        buttonSelected.classList.remove("button-selected")
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
  if (buttonSelected!== null){
  buttonSelected.classList.remove("button-selected")
  buttonSelected = null 
 }

 tipPercentage = document.querySelector()

}
   
