//Para chamar a função aqui, precisamos importa-lá e definir o index.js como o modulo no package.json

import {parImpar} from "../node-package-json-exercicios/exercicios/par-ou-impar.js"
import {pedraPapelTesoura} from "../node-package-json-exercicios/exercicios/pedra-papel-tesoura.js"


//Chamando a função dentro do index.js
parImpar(process.argv[2], Number(process.argv[3]))
pedraPapelTesoura(Number(process.argv[2]))




