"use strict";
/*let message: string = "help"
console.log(message)

let episode: number = 4
console.log("this " + 4)
episode = episode + 1
console.log("next " + episode)

//variavel do tipo any pode atribuir diversas
let teste
teste = 'test'
console.log("imprime " + teste)

teste = 10
console.log("imprime " + teste)

//exemplos de funções
let isEnoughToBeatMF = function (parsecs: number) : boolean { // declaracao normal
    return parsecs <12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to MF? ${isEnoughToBeatMF(distance) ? 'Yes': 'No'}`)

let call = (name: String) => console.log(`Doyoucopy, ${name}?`) //arrow functions
call('R2')

//parametros padroes
function inc (velocidade: number, inc: number = 1) : number {
  return velocidade+inc
}

console.log(`inc (5,1) =  ${inc(5,1)}`)
console.log(`inc (5) =  ${inc(5)}`)
*/
exports.__esModule = true;
//importar uma biblioteca js em app ts slowdash no comando npm init -f
//instalar o lodash     npm install --save lodash@4.14
//npm --intall-dev @type/lodash4.14
var base_ship_1 = require("./base-ship");
var startreta_1 = require("./startreta");
var ship = new base_ship_1.Nave('Hyperdrive');
ship.IperEspaco();
var falcon = new startreta_1.MF();
falcon.IperEspaco();
var trabalho = function (ship) { return ship.container > 2; };
console.log("bom pra trabalho? " + (trabalho(falcon) ? "yes" : "no"));
