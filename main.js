// Arrow function 

function addTwo (a,b) {
    return a+b
}

const addTwoNums = (a,b) => {
    return a + b
}

const addTwoNumbers = (a, b) => (a+b)

console.log(addTwo(2,2))
console.log(addTwoNums(2, 2))
console.log(addTwoNumbers(2, 2))


// Funcion constructora 

function Nums () {
    this.data = [1, 2, 3]

    this.printNumsCallback = function () {
        this.data.forEach((element, index) => {
            console.log(element)
        })
    }
}
let nums = new Nums()
nums.printNumsCallback()


// METODOS DE STRINGS