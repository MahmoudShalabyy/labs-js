
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}

function square(x) {
    return x * x;
  }

  function printVariables(value1 =1, value2=2, value3=3) {

    var localVar = 3;  
    testingVar = 5;

    console.log("localVar:", localVar);
    console.log("testingVar:", testingVar);

     console.log(" print them using (arguments)",arguments);
     
    return [value1, value2, value3];
    
}


let expressionFunction = function(value1, value2, value3) {
    var localVar = 3;
    testingVar = 5;
    return [value1, value2, value3];
}

//Solve Problem in summation() Function

function summationImproved(num1=0,num2=0){
    if(typeof(num1)==="number" && typeof(num2)==="number"){
        return num1 + num2;
    }else{
        return "You Must Enter Numeric Data";
    }
}
