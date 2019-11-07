/**
 * Estudo do operador lógico NOT 
 * @author André Barros
 * 
 */

let sw1 = false // variavel de apoio da troca da imagem chave

// false -  representa a chave desligada
// true - representa a chave ligada

function sw() {
    if (sw1 == false) {
        document.getElementById("sw1").src = "swon.png" //mudar a chave
        sw1 = true
    } else {
        document.getElementById("sw1").src = "swoff.png" //voltar a chave
        sw1 = false
    }
    
    // NOT
    if (!sw1){
        document.getElementById("lamp").src = "on.jpg"
    }else {
        document.getElementById("lamp").src = "off.jpg"
    }
}

