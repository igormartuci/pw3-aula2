let nt1: number = 10
let nt2: number = 5
let nt3: number = 7

/* let media = function(n1:number, n2:number, n3:number) : number {
    return (n1 + n2 + n3) / 3
} */

let media = (n1:number, n2:number, n3:number) => (n1 + n2 + n3) / 3

/* if (media(5,6,7) < 5) {
    console.log("reprovado")
} else {
    console.log("aprovado")
} */

console.log(`A média é ${media(nt1,nt2,nt3)}`)