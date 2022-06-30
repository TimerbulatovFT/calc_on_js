var number1Input = document.getElementById('number1');
var number2Input = document.getElementById('number2');
var getNumber = function(numberInput){
    var valueasNumber = parseInt(numberInput.value);
    return valueasNumber;
}
var getNumbers = function(){
    var number1=getNumber(number1Input);
    var number2=getNumber(number2Input);
    return result = {
    num1:number1,
    num2:number2
}}
var onOperationBtnClick = function(e){
    var pressedValue = e.target.value;
    var numbersValueObj = getNumbers();
    var result;
    if (pressedValue == "+"){
        result = numbersValueObj.num1 + numbersValueObj.num2;
    } else if (pressedValue == "-"){
        result = numbersValueObj.num1 - numbersValueObj.num2;
    } else if (pressedValue == "*"){
        result = numbersValueObj.num1 * numbersValueObj.num2;
    } else if (pressedValue == "/"){
        result = numbersValueObj.num1 / numbersValueObj.num2;
    }
    alert(result);
}
var addOperationListenerForButtonByID = function operationBtn(id){
    var btn = document.getElementById(id);
    btn.addEventListener('click',onOperationBtnClick);        
}
var operationsBtnArray = document.querySelectorAll('[type="button"]');
operationsBtnArray.forEach(element => {
    addOperationListenerForButtonByID(element.id);
});