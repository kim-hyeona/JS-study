const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// input에서 값 가져오기
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// 계산 로그 생성과 작성
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,calcDescription);
}

function writeToLog(
    operationIdentifier,
    pervResult,
    operationNumber,
    newResult
    ) {
        const logEntries = {
            operation:  operationIdentifier,
            pervResult:  pervResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntries);
        console.log(logEntries)
    }

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-'
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*'
    } else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/'
    }
    
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult)
    
    }

function add() {

    calculateResult('ADD')

    // const enteredNumber = getUserNumberInput();
    // const initialResult = currentResult
    // currentResult += enteredNumber;
    // // currentResult = enteredNumber + 1; 도 currentResult++ 로 축약가능 뺄셈까지 가능
    // // 나눗셈 곱셉은 1로 나누거나 곱해도 같은 수가 나오기 때문에 사용하지 않음
    // // ++currentResult 연산의 반환 유형에 대해 알고 싶을때 사용 연산이 수정된 값을 반환하게 됨
    // createAndWriteOutput('+',initialResult,enteredNumber);
    // writeToLog('ADD',initialResult,enteredNumber,currentResult)
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber)
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult)
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber)
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult)
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber)
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


