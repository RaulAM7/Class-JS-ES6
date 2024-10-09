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

let palabra = 'Esto es un string de prueba'


console.log(palabra.startsWith('E'))
console.log(palabra.startsWith('Esto'))
console.log(palabra.startsWith('o', 3))


console.log(palabra.includes('o'))


// Deconstruccion de Objetos

const student = {
    name: 'Ana',
    age: 22,
    studies: 'Maths',
    university: 'ULPGC',
    preferences: {
        music: 'rock',
        sports: 'football',
        videogames: 'wowClassic'
    } 
}

// Normalmente hariamos

/* const nombre = student.name
const edad = student.age
const estudios = student.studies */


// Pero con Deconstructing

const {name:nombre, age:edad, studies:estudios} = student


console.log(nombre)
console.log(edad)
console.log(estudios)

const {preferences: preferencias} = student

console.log(preferencias)

preferencias.music  = 'bachata'

console.log(preferencias)

console.log(student)


// Deconstructing Arrays

let numbers = ["one", "two", "three", "fourth", "fifth"];

let numeros = [, segundo] = numbers

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])