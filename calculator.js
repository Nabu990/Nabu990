// let keys = document.getElementById('plus1')
let display = document.getElementById('display')
function appendToDisplay(input){
    display.value += input;
}
function cleardisplay(){
 display.value = "";
}
function calculate(){
          display.value = eval(display.value);
    
        //  display.value = "error";
}
console.log(input)