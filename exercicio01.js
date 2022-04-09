// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function retornaDiaDaSemana(num) {
    switch (num) {
        case 1:
            return "Hoje é domingo!"
            break
        case 2:
            return "Hoje é segunda-feira!"
            break
        case 3:
            return "Hoje é terça-feira!"
            break
        case 4:
            return "Hoje é quarta-feira!"
            break
        case 5:
            return "Hoje é quinta-feira!"
            break
        case 6:
            return "Hoje é sexta-feira!"
            break
        case 7:
            return "Hoje é sábado!"
            break
    }
}
console.log(retornaDiaDaSemana(3))