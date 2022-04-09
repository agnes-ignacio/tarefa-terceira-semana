// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorOuMenor(idade) {
    if (idade >= 18) {
        return 'Você é maior de idade.'
    } else {
        return 'Você é menor de idade.'
    }
}
console.log(maiorOuMenor(17))