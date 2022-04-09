// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function DizMaior(num1, num2) {
    if (num1 === num2) {
        return 'Os números são iguais!'
    } else if (num1 > num2) {
        return 'O primeiro número é maior'
    } else { 
        return 'O segundo número é maior'
    }
}
console.log(DizMaior(3, 7))
