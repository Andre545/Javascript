/**
 * Estudo do operador lógico NOT 
 * @author André Barros
 * 
 */

let sw1 = false // variavel de apoio da troca da imagem chave
let receive
let broken = false

// false -  representa a chave desligada
// true - representa a chave ligada

function sw(receive) {
    if (sw1 == false && receive == 1) {
        document.getElementById("sw1").src = "swon.png" //mudar a chave
        sw1 = true
    } else if (sw1 == true && receive == 1) {
        document.getElementById("sw1").src = "swoff.png" //voltar a chave
        sw1 = false
    }

    if (receive == 2 ){
        document.getElementById("lamp").src = "broken.jpg"
        broken = true
    }
    
    // NOT

    if( broken == false){
        if (!sw1){
            document.getElementById("lamp").src = "on.jpg"
        }else {
            document.getElementById("lamp").src = "off.jpg"
        }
    }
    
    
}

