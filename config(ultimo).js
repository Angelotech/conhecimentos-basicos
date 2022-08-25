//* breve comentario: este exercicio foi a, respotas do exercico 07 do curso de JS ( ultimo exercicio)
//* bom devido ao fato da hora 00:22 do dia 25-08-22 não sera mais editado e por este motivo o vetor nudi e ficou em cima e as demias varias estão em apenas uma função
// o que aprendemos com este erro: 1.não declare variaveis dentro dd funções se for usar ela em mais lugares do condigo  2.ao usar o number e o .value
// não precisar converter outro caso o createelement cria um novo elemento no html .
//obs: olhe sempre os nomes das divs e coloque o nome certo passei duas horas pra resolver somente isso. :(

var v_guardados = []
var amos = document.getElementById("mostrar")
function gerar(){
    var valores = Number(document.getElementById("n.digitados").value)
    var res = document.getElementById("resultado")
    valores.innerHTML = ''
    var formato = ''
    if(valores <= 0 ||valores > 100){
        window.alert('por favor digite um numero entre 0 e 100')
    }else{
      
       v_guardados.push(Number(valores))
       formato = document.createElement('option')
       valores.innerHTML = ''
       formato.text = `o numero ${valores} foi adicionador`
       res.appendChild(formato)
       var amos = document.getElementById("mostrar")
       amos.innerHTML= ''
    }
//percebeu o uso de 3 variavel em duas funçoes, novamente o erro de não ter separo tiver que declarar nas udas para poder limpar 
}
function finalizar(){
    if(v_guardados.length == 0){
        window.alert(`digite algum numero acima ${v_guardados.length}`)
    }else{
        var amos = document.getElementById("mostrar")
        amos.innerHTML = ''
        var tot = v_guardados.length
        var maior = v_guardados[0]
        var menor = v_guardados[0]
        var soma = 0
        var media = 0
        for(let apos in v_guardados){
            soma += v_guardados[apos]
            if (v_guardados[apos] > maior)
            maior = v_guardados[apos] 
            if (v_guardados[apos] < menor)
            menor = valores[apos]
        }
        media = soma / tot
        amos.innerHTML += `VOCÊ adicionou ${tot} elemtos o maior valor foi ${maior} e menor ${menor} a soma deu ${soma} e a media é ${media}`
    }
   

}



