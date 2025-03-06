function contar() { // função que é chamada quando apertar o botão contar
    // criaremos 3 variáveis "let", que são a mesma coisa que "var"
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('respos')
    // os nomes do IDs podem ser em aspas duplas ou simples.


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        respos.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
        /* O "ini" é a variável que recebe o valor do "Id txti", sucessivamente para os demais; o "value" é o valor inserido na caixa de texto de início; O "length" é o tamanho do caractere */
    } else {
            respos.innerHTML = 'Contando...'
        // aqui o "innerHTML" renderisa dentro da div que está com o "Id respos"
        // agora vamos ter que criar variáveis numéricas, convertendo com "Number"
            let i = Number(ini.value)
        /* nessa expressão a variável "i" vai receber em formato numérico o valor que for inserido na variável "ini" */
            let f = Number(fim.value)
            let p = Number(passo.value)
        /* Vamos usar uma estrutura de repetição agora; Vamos usar o "for que é mais completa" */

        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f ) {
            for(let c = i; c <= f; c += p) {// contagem crescente
            // essa contagem só funciona se o valor do início for menor que o final
            /* nessa expressão temos que, a variável "let c" recebe o valor inicial da variável "i", enquanto o valor de "c que é o início" for menor ou igual ao fim "f", "c" é concatenado com "p", início com passo */
            respos.innerHTML += `${c} \u{1F449}` // código de emoji  \u{1F449}
            /* Aqui nessa expressão o texto que é renderizado na div "respos" é concatenado com o valor de "c" */
        }
        } else {
            for(let c = i; c >= f; c -= p) { // contagem decrescente
                respos.innerHTML += ` ${c} \u{1F449}`
            }
        }

       
        
        // para concatenar uma bandeirinha no final com o "Contando..."
        respos.innerHTML += `\u{1F3C1}` // final da contagem
    }


}