/**
 * Cálculo do IMC
 * @author André Barros
 */

// Variáveis globais
let Altura, Peso, Imc

function calcular() {
    Altura = Number(frmImc.txtAltura.value.replace(",","."))
    Peso = Number(frmImc.txtPeso.value.replace(",","."))
    Imc = Peso /(Altura * Altura) 
    frmImc.txtImc.value = Imc.toFixed(2)
}

// imc = peso / (Math.pow, 2)