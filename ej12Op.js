/* Crea una función que reciba un array de números y devuelva el mayor de ellos. */


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

function numMayor(array){

    return Math.max(...array);

}
let resultado = numMayor(array);
console.log (resultado);