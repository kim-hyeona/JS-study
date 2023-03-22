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

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult += enteredNumber;
    // currentResult = enteredNumber + 1; 도 currentResult++ 로 축약가능 뺄셈까지 가능
    // 나눗셈 곱셉은 1로 나누거나 곱해도 같은 수가 나오기 때문에 사용하지 않음
    // ++currentResult 연산의 반환 유형에 대해 알고 싶을때 사용 연산이 수정된 값을 반환하게 됨
    createAndWriteOutput('+',initialResult,enteredNumber);
    const logEntries = {
        operation: 'ADD',
        pervResult: initialResult,
        number: enteredNumber
    };
    logEntries.push(logEntries);
    console.log(logEntries.operation)
    console.log(logEntries[0])
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber)
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber)
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


