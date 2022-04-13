// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorOuMenor(anoDeNascimento) {
    if (ano > 2004) {
        return 'Você é menor de idade.'
    } else {
        return 'Você é maior de idade.'
    }
}
console.log(maiorOuMenor(17))