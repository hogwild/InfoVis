function onClick() {
if(inputsAreEmpty()){
label.textContent = "Error: one or both input are empty.";// to change the text, there are a few attributions can use: textContent, innerText, or innerHTML
return;
}
updatelabel();
}

function inputsAreEmpty(){
if (getNumber1() === '' || getNumber2() === ''){
return true;
}else{
return false;
}
}

function updatelabel(){
    var addend1 = getNumber1();
    var addend2 = getNumber2();
    if (checkRate(addend1)||checkRate(addend2)){
        var sum = addend1 + addend2;
    }else{
        var sum = parseInt(addend1) + parseInt(addend2);
    }
    label.textContent = addend1 + '+' + addend2 + '=' + sum;
}

function getNumber1(){
    return inputs[0].value;
}

function getNumber2(){
    return inputs[1].value;
}

function checkRate(input){
    var re = /[a-z]/;
    return re.test(input);
}

var inputs = document.querySelectorAll('input');
var label = document.getElementById('p-output-1');
var button = document.querySelector('button');

button.addEventListener('click', onClick); // here 'click' is a HTML DOM events which is defined by HTML DOM
