export const pedraPapelTesoura = (pedraPapelTesoura) => {
    //Math.floor arredonda um número
   //Mathi.random gera um número aleatório 
    const computadorNumero = Math.floor(Math.random() * (3 - 1))+1
    const escolha = Number(pedraPapelTesoura)

//1 - pedra 
//2 - papel 
//3 - tesoura

    if(computadorNumero === escolha){
        console.log(`Vocês escolheram a mesma coisa. Deu empate!!!`)
    } else if(computadorNumero === 1 && computadorNumero !== escolha && escolha === 2) {
        console.log(`Você escolheu papel, e o computador escolheu pedra. Você ganhou`)
    } else if(computadorNumero === 2 && computadorNumero !== escolha && escolha === 3){
        console.log(`Você escolheu tesoura, e o computador escolheu papel. Você ganhou`)
    } else if(computadorNumero === 3 && computadorNumero !== escolha && escolha === 1){
        console.log(`Você escolheu tesoura, e o computador escolheu pedra. Você perdeu`)
    } else if(escolha === 1 && escolha !== computadorNumero && computadorNumero === 2) {
        console.log(`Você escolheu pedra, e o computador escolheu papel. Você perdeu`)
    } else if(escolha === 2 && escolha !== computadorNumero && computadorNumero === 3){
        console.log(`Você escolheu papel, e o computador escolheu tesoura. Você perdeu`)
    } else if(escolha === 3 && escolha !== computadorNumero && computadorNumero === 1){
        console.log(`Você escolheu tesoura, e o computador escolheu pedra. Você ganhou`)
    } else if(pedraPapelTesoura === 0){
        console.log("Você não passou um valor válido, por favor passe um número de 1 a 3. Sendo: 1 - pedra, 2 - papel, 3 - tesoura");
    }
     else {
        return 0;
    }
}