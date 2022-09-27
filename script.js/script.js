function verificarPeso() {

    let seuPeso = document.querySelector("#peso").value
    let resul = document.querySelector("#resul")


    
    if(seuPeso >= 95) {
        resul.innerHTML = 'Você é Peso-Pesado'

    } else if(seuPeso >= 80 ) {
        resul.innerHTML ='Você é Peso-Médio'

    } else if(seuPeso >= 70 ) {
        resul.innerHTML ='Você é Peso-Leve'

    } else if(seuPeso >= 65) {
        resul.innerHTML = 'Você é Peso-Pena'

    } else if(seuPeso >= 61) {
        resul.innerHTML = 'Você é Peso-Galo'

    } else if(seuPeso >= 56) {
        resul.innerHTML = 'Você é Peso-Mosca'

    } else if(seuPeso == 52) {
        resul.innerHTML = 'Você é Peso-Palha'

    } else {
        resul.innerHTML='Sem categoria ):'
    }
}

