//Variables de numberos
let numero2 = document.getElementById(number2);
let numero3 = document.getElementById(number3);
let numero4 = document.getElementById(number4);
let numero5 = document.getElementById(number5);
let numero6 = document.getElementById(number6);
let numero7 = document.getElementById(number7);
let numero8 = document.getElementById(number8);
let numero9 = document.getElementById(number9);
let numero0 = document.getElementById(number0);

//Variables de operaciones
let plus = document.getElementById(sumar);
let minus = document.getElementById(restar);
let multiplicacion = document.getElementById(multiplicar);
let division = document.getElementById(dividir);
let igual = document.getElementById(same);

let contenedor = document.getElementById(show_numbers);

//let cadena_texto = new String("Hola Mundo");
//console.log(cadena_texto); 
//let a = 3; 
//let b = new Number(5);
//let c = 5.2984375023;
//console.log(a, c.toFixed(2));


document.getElementById(number1).addEventListener('click', function() {
    contenedor.textContent += 1;    
})