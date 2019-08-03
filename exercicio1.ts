let nota1: number = 5
let nota2: number = 6
let nota3: number = 7
let aprovado: boolean
let msg1: string = "REPROVADO BURRO"
let msg2: string = "APROVADO NAO FAZ MAIS QUE OBRIGACAO"
let notafinal: number = (nota1 + nota2 + nota3) / 3


if ((nota1 + nota2 + nota3) / 3 < 5) {
    aprovado = false
    console.log('${msg1} e a nota: ${notafinal}')
} else {
    aprovado = true
    console.log(msg2 + "nota: " + notafinal)
}


