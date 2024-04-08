let = valores= [8,1,7,4,2,9]
//valores.sort()
console.log(valores)

//TEMOS 3 FORMAS QUE PODEM SER FEITAS
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

// OU

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

// OU PODEMOS FAZER ASSIM, UMA FORMULA MAIS SIMPLES E ATUAL

for(let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}