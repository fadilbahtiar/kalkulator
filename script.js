const numbers=document.querySelectorAll(".number")
const calculatorScreen=document.querySelector(".calculator-screen")
const operators=document.querySelectorAll(".operator")
const equalSign=document.querySelector(".equal-sign")
const AllclearBtn=document.querySelector('.all-clear')
const decimal=document.querySelector('.decimal')
const clearBtn=document.querySelector('.clear')
const percentBtn=document.querySelector('.percentage')
const calcDisplay=document.querySelector('.calculator-display')

let prevNumber=''
let calculatorOperator=''
let currentNumber='0'
let displayString=' '

numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})
const updateScreen=(num)=>{
    calculatorScreen.value=num
    updateDisplay()
}

const updateDisplay=()=>{
    calcDisplay.value=displayString
}

const inputNumber=(num)=>{
    if(currentNumber==='0'){
        currentNumber=num
    }else{
        currentNumber += num
    }  
    displayString+=currentNumber
}

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator= (op)=>{
    if(calculatorOperator===''){
        prevNumber=currentNumber
    }
    calculatorOperator=op
    currentNumber='0'
}

equalSign.addEventListener('click',()=>{
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate=()=>{
    let result=''
    switch(calculatorOperator){
        case '+':
            result=parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case '-':
            result=prevNumber-currentNumber
            break
        case '*':
            result=prevNumber*currentNumber
            break
        case '/':
            result=prevNumber/currentNumber
            break
        default:
            return
    }
    currentNumber=result
    calculatorOperator=''
    displayString=currentNumber
}

AllclearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll=()=>{
    prevNumber=''
    calculatorOperator=''
    currentNumber='0'
    displayString=' '
}

decimal.addEventListener('click',()=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal=(dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

clearBtn.addEventListener('click',()=>{
    // console.log('clear clicked')
    clear()
    updateScreen(currentNumber)
})

const clear=()=>{
    displayString=prevNumber+calculatorOperator;
    console.log(displayString)
    currentNumber='0'    
}

percentBtn.addEventListener('click',()=>{
    calculatePercent();
    updateScreen(currentNumber);
})

function calculatePercent(){
    if(calculatorOperator!==''){
        calculate();
    }  
    currentNumber=currentNumber/100;
}