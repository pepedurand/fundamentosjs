function apresentar (nome) {
    return `Meu nome é ${nome}`;
}


const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow com mais de uma linha

const somaNumeros = (num1, num2) => {
    if (num1 || num2 > 10) {
        return 'não vou somar';
    } else {
        return num1 + num2;
    }
}

//arrow - rapido e curto 
//declaração - boa pra lógicas mais complexas
//No hoisting, arrow se comporta igual expressao