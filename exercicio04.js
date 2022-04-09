// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar(num){
    if (num % 2 === 0){
        return "Par!"
    } else { 
        return "Ímpar!"
    }
}
console.log(parOuImpar(3))