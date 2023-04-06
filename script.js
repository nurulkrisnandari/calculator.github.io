let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//INPUTAN ANGKA
const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//INPUTAN OPERATOR
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

//INPUT DESIMAL
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

//KLIK HAPUS 
const del = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//KLIK HAPUS SEMUA
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//===================================================//

//FUNGSI ANGKA
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
    })
})

//FUNGSI OPERATOR
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
    })
})

//FUNGSI =
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//FUNGSI DESIMAL 
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//FUNGSI HAPUS
const delt = document.querySelector('.delete')
delt.addEventListener('click', () => {
    del()
    updateScreen(currentNumber)
})

//FUNGSI HAPUS SEMUA
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

//FUNGSI KALKULASI
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}