let num = [4,9,2,1,3]
num.push(8)

//num.sort()

console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1){
    console.log('Valor nao encontrado')
} else {
    console.log(`O valor está na posicao ${pos}`)
}


