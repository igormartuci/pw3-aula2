var nota1 = 5;
var nota2 = 6;
var nota3 = 7;
var aprovado;
var msg1 = "REPROVADO BURRO";
var msg2 = "APROVADO NAO FAZ MAIS QUE OBRIGACAO";
var notafinal = (nota1 + nota2 + nota3) / 3;
if ((nota1 + nota2 + nota3) / 3 < 5) {
    aprovado = false;
    console.log('${msg1} e a nota: ${notafinal}');
}
else {
    aprovado = true;
    console.log(msg2 + "nota: " + notafinal);
}
