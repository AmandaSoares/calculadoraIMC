const btn_calcular = document.querySelector('.btn_calcular')
btn_calcular.addEventListener('click', calcular)

const resultado = document.querySelector('.resultado')

// seleção de cada classficação do IMC 
const obesidade_grau_um = document.querySelector('.obesidade_grau_um')
const abaixo_do_peso = document.querySelector('.abaixo_do_peso')
const peso_normal = document.querySelector('.peso_normal')
const levemente_acima_do_peso = document.querySelector('.levemente_acima_do_peso')
const obesidade_grau_dois = document.querySelector('.obesidade_grau_dois')
const obesidade_grau_tres = document.querySelector('.obesidade_grau_tres')
// 
let imc

function calcular() {
    altura = document.querySelector('#altura').value
    peso = document.querySelector('#peso').value
    if (altura.length === 0 || peso.length === 0) {
        alert('Por favor, preencha todos os campos')
    }
    else {
        altura = altura / 100
        imc = peso / (altura * altura)
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`
        classificacaoIMC()
    }
}

// classificar o IMC e atribuir uma cor diferente para cada um
function classificacaoIMC() {
    resetarCorDasTrs()
    switch (true) {
        case (imc < 18.50):
        abaixo_do_peso.style.backgroundColor = 'red'
        break;

        case (imc >= 18.50 && imc <= 24.90):
        peso_normal.style.backgroundColor = 'green'
        break;

        case (imc >= 25.0 && imc <= 29.9):
        levemente_acima_do_peso.style.backgroundColor = 'yellow'
        break;

        case (imc >= 30.0 && imc <= 34.9):
        obesidade_grau_um.style.backgroundColor = 'red'
        break;

        case (imc >= 35.0 && imc <= 39.9):
        obesidade_grau_dois.style.backgroundColor = 'red'
        break;

        case (imc >= 40.0):
        obesidade_grau_tres.style.backgroundColor = 'red'
        break;
    }
}

// Função para resolver o problema de cores em linhas <tr> após a atualização do IMC.
// Anteriormente, ao calcular um novo IMC, as cores das linhas correspondentes às classificações de IMC não eram redefinidas, resultando em cores persistentes de IMCs anteriores.
function resetarCorDasTrs() {
    abaixo_do_peso.style.backgroundColor = '';
    peso_normal.style.backgroundColor = '';
    levemente_acima_do_peso.style.backgroundColor = '';
    obesidade_grau_um.style.backgroundColor = '';
    obesidade_grau_dois.style.backgroundColor = '';
    obesidade_grau_tres.style.backgroundColor = '';
}

