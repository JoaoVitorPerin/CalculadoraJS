// função soma

function somar(){
    var valor1 = parseFloat(document.getElementById("valor1Soma").value);
    var valor2 = parseFloat(document.getElementById("valor2Soma").value);

    var soma = (valor1 + valor2);

    document.getElementById("resultado1").value = soma;
}

// função subtração

function subtrair(){
    var valor1 = parseFloat(document.getElementById("valor1Subtracao").value)
    var valor2 = parseFloat(document.getElementById("valor2Subtracao").value)

    var subtracao = (valor1 - valor2);
    
    document.getElementById("resultado2").value = subtracao;
}

// função multiplicação

function multiplicar(){
    var valor1 = parseFloat(document.getElementById("valor1Multiplicacao").value)
    var valor2 = parseFloat(document.getElementById("valor2Multiplicacao").value)

    var multiplicar = (valor1 * valor2);
    
    document.getElementById("resultado3").value = multiplicar;
}

//função divisao

function dividir(){
    var valor1 = parseFloat(document.getElementById("valor1Divisao").value)
    var valor2 = parseFloat(document.getElementById("valor2Divisao").value)

    var dividir = (valor1 / valor2);
    
    document.getElementById("resultado4").value = dividir;
}



// funções para limpar inputs

function limparsoma(){
    document.getElementById("valor1Soma").value = "";
    document.getElementById("valor2Soma").value = "";
    document.getElementById("resultado1").value = "";
}

function limparsubtracao(){
    document.getElementById("valor1Subtracao").value = "";
    document.getElementById("valor2Subtracao").value = "";
    document.getElementById("resultado2").value = "";
}

function limparmultiplicacao(){
    document.getElementById("valor1Multiplicacao").value = "";
    document.getElementById("valor2Multiplicacao").value = "";
    document.getElementById("resultado3").value = "";
}

function limpardivisao(){
    document.getElementById("valor1Divisao").value = "";
    document.getElementById("valor2Divisao").value = "";
    document.getElementById("resultado4").value = "";
}