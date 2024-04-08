function carregar(){
    var msg= document.getElementById('msg')
    var imagem= document.getElementById('imagem')
    var data= new Date
    var hora= data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora >=0 && hora <12){
        //BOM DIA
        imagem.src='manha.png'
        document.body.style.background='#829291'
    }else if(hora >=12 && hora < 18){
        //BOA TARDE
        imagem.src='tarde.png'
        document.body.style.background='#fcc205'
    } else {
        //BOA NOITE
      imagem.src='noite.png'
      document.body.style.background='#f01e39'
    } 
}
