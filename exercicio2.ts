let competidores: number = 10
let qtdefolhas: number = 90
let folhas_competidor: number = 10
let resposta1: string = "suficiente"
let resposta2: string = "insuficiente"

if ((competidores * folhas_competidor) > qtdefolhas) {
    console.log(resposta2)
} else {
    console.log(resposta1)
}