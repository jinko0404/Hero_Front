//선언적 함수
function jsFunc1(){
    var h1Tag = document.querySelector("h3");
    h1Tag.innerHTML = "선언적 Function";
    var p3Tag = document.querySelector("#p1");
    p3Tag.innerHTML = "jsFunc1 함수 실행완료!";
}
//익명함수
var jsFunc2 = function(){
    alert("test");
    var p2Tag = document.querySelector("#p2");
    p2Tag.innerHTML = "jsFunc2 함수 실행완료!";
}

function resultJsFunc4(){
    JsFunc4(23, 11, 13);
    JsFunc4(24, 4, 25);
}

function JsFunc4(num1 , num2 ,num3){
    var result = num1 + num2 + num3;
    var p4Tag = document.querySelector("#p4");
    p4Tag.innerHTML += result + " ";
}

function resultJsFunc5(){
    var p5Tag = document.querySelector("#p5");
    p5Tag.innerHTML += JsFunc5() + "<br>";
}

function JsFunc5(){
    return Math.floor(Math.random() * 10 + 1);
}

function calculator(num1, num2, operator){
    var result = 0;
    switch(operator){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }

    return result;
}

function callFuncTenTimes(otherFunc){
    for(var i = 0; i < 10; i++){
    otherFunc(i);
    }
    //console.log(num);
}


function calleeFunc(num){
    var p6Tag = document.querySelector("#p6");
    p6Tag.innerHTML += (num + 1) + "번째 함수 호출 완료 <br>";
}

function JsFunc6(num){
    console.log((num + 1) + "번째 함수 호출 완료");
}

callFuncTenTimes(JsFunc6);

function jsReturnFunc(){
    var nameTag = document.querySelector("#name");
    var p7Tag = document.querySelector("#p7");
    return function(){
        p7Tag.innerHTML = nameTag.value;
    }();
}