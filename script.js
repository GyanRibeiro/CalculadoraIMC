// const resultado = () => {
//     const peso = parseFloat(document.querySelector("#peso").value || 0);
//     const altura = parseFloat(document.querySelector("#altura").value || 0);

//     if (peso === 0 || altura === 0) {
//         document.querySelector("#resultado").innerText = "Valor inválido";
//         return; // Sai da função para evitar a execução posterior
//     }

//     const imc = peso / (altura * altura) || 0;
    
//     let resultado;

//     if (imc < 18.5) {
//         resultado = "A baixo do peso";
//     }
//     else if(imc >= 18.5 && imc <=24.9) {
//         resultado = "Peso normal";
//     }
//     else if (imc >= 25 && imc <= 29.9) {
//         resultado = "Sobrepeso"
//     }
//     else if (imc >= 30 && imc <= 34.9) {
//         resultado = "Obesidade Grau 1"
//     }
//     else if(imc >= 35 && imc <= 39.9) {
//         resultado = "Obesidade Grau 2"
//     }
//     else if (imc >= 40) {
//         resultado = "Obesidade Grau 3"
//     }
//     else{
//         alert("Insira um valor válido")
//     }

//     document.querySelector("#resultado").innerText = `Seu IMC é ${imc} (${resultado})`;
// }

// Função para calcular o IMC
const calcularIMC = (peso, altura) => {

    altura /= 100;

    if (peso === 0 || altura === 0) {
        return "Valor inválido";
    }

    const imc = peso / (altura * altura);

    let resultado;

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc <= 24.9) {
        resultado = "Peso normal";
    } else if (imc <= 29.9) {
        resultado = "Sobrepeso";
    } else if (imc <= 34.9) {
        resultado = "Obesidade Grau 1";
    } else if (imc <= 39.9) {
        resultado = "Obesidade Grau 2";
    } else {
        resultado = "Obesidade Grau 3";
    }

    return `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
};

// Função principal chamada pelo botão
const calcular = () => {
    const peso = parseFloat(document.querySelector("#peso").value || 0);
    const altura = parseFloat(document.querySelector("#altura").value || 0);

    const mensagem = calcularIMC(peso, altura);
    exibirResultado(mensagem);
};


// Função para exibir o resultado
const exibirResultado = (mensagem) => {
    const resultadoElement = document.querySelector("#resultado");

    document.querySelector("#resultado").innerText = mensagem;

    // Verifica se a mensagem é "Valor inválido" e aplica a classe "invalid"
    if (mensagem === "Valor inválido") {
        resultadoElement.classList.add("invalid");
    } else {
        resultadoElement.classList.remove("invalid");
    }
};