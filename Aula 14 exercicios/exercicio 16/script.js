function contar(){
    var ini= document.getElementById('txti')
    var fim= document.getElementById('txtf')
    var passo= document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert('[ERROR] Faltam dados')
        res.innerHTML='Impossivel contar'
        
    } else {
        res.innerHTML= 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i < f ){
            //Contagem crescente
           for(let c = i; c <= f; c += p){
               res.innerHTML += ` ${c} \u{1f449}`
            }      
            
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
            
        }
        res.innerHTML += `\u{1f3c1}`
    }

}