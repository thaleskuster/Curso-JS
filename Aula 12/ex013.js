var agora = new Date()
var Diasem= agora.getDay()
console.log(Diasem)
/*
0 = Domingo
1 = segunda
2 = terca
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
switch(Diasem) {
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('segunda')
        break
    case 2: 
    console.log('terca')
        break
    case 3: 
    console.log ('quarta')
        break
    case 4: 
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break 
    default:
        console.log('ERRO, DIA DA SEMANA INVALIDO!')

}

