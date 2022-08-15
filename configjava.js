function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('mudar')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('errado')

    }else{
        var fsexo = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsexo[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 18 ){
                img.setAttribute('src','jovem pp.jpg')

            }else if (idade >=18 && idade < 90){
                img.setAttribute('src','cafe manha pp.jpg')
            }
        }else if (fsexo[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 30 ){
                img.setAttribute('src','mulher jovempp.jpg')

            }else if (idade >= 31 && idade < 90){
                img.setAttribute('src','velhapp.jpg')
                
            }
        }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos que voê é ${genero} com a ${idade} anos`
    res.appendChild(img)


}