function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano){    
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancahomem.png')
            }else if (idade <25){
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if (idade <59){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        }else {
            genero= 'Mulher'
            if (idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancamulher.png')
            }else if (idade <25){
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else if (idade <59){
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'velhamulher.png')
            }
        }
    res.style.textAlign= 'center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }  
}