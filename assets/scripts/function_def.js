const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createOutputMsg(resultBeforeCalc, operator, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function getUserInput(){
    return +userInput.value;
}

function addToLog(
    prevResult, 
    operator, 
    operand, 
    finalResult){
        const logEntry = {
            prevResult: prevResult,
            operator: operator,
            operand: operand,
            finalResult: finalResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
}

function performCalculation(operatorType){

    const enteredNumber = getUserInput();
    if(
        operatorType !== 'ADD' && 
        operatorType !== 'SUBTRACT' &&
        operatorType !== 'MULTIPLY' &&
        operatorType !== 'DIVIDE' ||
        !enteredNumber
    ){
        return;
    }

    const initialResult = currentResult;
    if(operatorType === 'ADD'){
        currentResult += enteredNumber;
        createOutputMsg(initialResult,'+',enteredNumber);
    }
    else if(operatorType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        createOutputMsg(initialResult,'-',enteredNumber);
    }
    else if(operatorType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        createOutputMsg(initialResult,'x',enteredNumber);
    }
    else{
        currentResult /= enteredNumber;
        createOutputMsg(initialResult,'/',enteredNumber);
    }
    addToLog(initialResult,operatorType,enteredNumber,currentResult);
}

function add(){
    performCalculation('ADD');    
}

function subtract(){
    performCalculation('SUBTRACT');
}

function multiply(){
    performCalculation('MULTIPLY');
}

function divide(){
    performCalculation('DIVIDE');
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
  }
  