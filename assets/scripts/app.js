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
    if (calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
    ){
        return
    }
    // AND 연산자는 하위 조건문이 전부 참이여야 참을 반환함

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'
    // ){
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
    

    // OR 연산자를 쓰면 하위 조건문이 참일 경우 전체가 참이 된다

    // return키워드를 함수에서 사용한다는건 함수가 값을 반환한다는 것
    // return뒤에 작성된 코드는 실행되지 않는다는 것

   
    //. if 문에서는 두 개 이상의 블록을 실행하지 않습니다. 조건이 충족되지 않고 (필수 항목이 아닌) else 블록이 없으면 코드가 실행되지 않습니다.
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
    calculateResult('SUBTRACT')
}

function multiply(){
    calculateResult('MULTIPLY')
}

function divide(){
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


