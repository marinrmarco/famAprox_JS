class Juego {
    constructor() {
        this.generarNumero()
    }


    generarNumero(){
        var numero = []
        let num
        debugger
        for(var i = 0; i < 4; i++){
            if (i === 0){
                numero.push(Math.floor(Math.random() * 9 + 1)) //Numero aleatorio entre el 1 y el 9
            }else{  
                do num = Math.floor(Math.random() * 9) //Numero aleatorio entre el 0 y el 9
                while (numero.includes(num))
                numero.push(num)
            }
        }
        console.log(numero)
        return numero
    }
}

function empezarJuego() {
    window.juego = new Juego()
   }