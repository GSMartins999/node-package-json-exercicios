export const parImpar = (parOuImpar,numero) => {
    //Math.floor arredonda um número
   //Mathi.random gera um número aleatório 
    const computadorNumero = Math.floor(Math.random() * (5 - 0 + 1))
    const soma = Number(numero + computadorNumero)
    const resultado = soma % 2 === 0
    if(resultado && parOuImpar === "par"){
        console.log(`A soma dos números é: ${soma}. Você escolheu par e ganhou, parabéns!!!`)
    } else if(!resultado && parOuImpar === "par") {
        console.log(`A soma dos números é: ${soma}. Você escolheu par e perdeu...`)
    } else if(!resultado && parOuImpar === "impar") {
        console.log(`A soma dos números é: ${soma}. Você escolheu impar e ganhou, parababéns!!!`)
    } else {
        console.log(`A soma dos números é: ${soma}. Você escolheu impar e perdeu...`)
    }
    console.log(numero);
}



