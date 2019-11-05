/**
 * JS Aula 3 - Estudo DOM
 * Estudo da função com passagem de parâmetros
 * @author André Barros
 */

 /*

 // Sem Passagem de Parâmetros

 function ligar(){
    document.getElementById("lamp").src = "on.jpg"
 }

 function desligar (){
    document.getElementById("lamp").src = "off.jpg"
 }
 */

 //Com passagem de parâmetros

 let recebe

 function controlar(recebe){
    if (recebe == 1){
        document.getElementById("lamp").src = "on.jpg"
    }else { 
        document.getElementById("lamp").src = "off.jpg"
    }
 }
 
