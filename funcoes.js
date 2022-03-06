                    //string

//declarão da função                    
function imprimeTexto (texto) {
    console.log(texto);
}

imprimeTexto (soma());

//a função deve ser chamada

imprimeTexto('oi');
imprimeTexto('oi 2');

//formas de escrever funções
//declaração (esse acima)

function soma () {
    return 2+2;
}

//console.log(soma ());