class Juego {
    constructor() {
        this.numToGuess = [];
        this.numRandom();
    }
}

Juego.prototype.numRandom = function(){     
    let num
    for(let i = 0; i < 4; i++){
        if (i === 0){
            this.numToGuess.push(Math.floor(Math.random() * 9 + 1).toString()) //Numero aleatorio entre el 1 y el 9
        }else{  
            do num = Math.floor(Math.random() * 9) //Numero aleatorio entre el 0 y el 9
            while (this.numToGuess.includes(num.toString()))
            this.numToGuess.push(num.toString())
        }
    }
    console.log(this.numToGuess);
}

 Juego.prototype.testNum = function(numCandidato){
    let numCandidatoArray = Array.from(numCandidato);
    console.log(numCandidatoArray);
    (numCandidatoArray = this.numToGuess) ? console.log("acierto") : console.log("falla");
}

function empezarJuego() {
    game = new Juego();
    //ocultar btnEmpezar
    let btnEmpezar = document.getElementById("btnEmpezar");
    let btnProbar = document.getElementById("btnProbar")
    btnEmpezar.classList.add("hide")
    btnProbar.classList.add("show")
}

function probarNumero(){
    let numCandidato = document.getElementById("nro_candidato").value;
    game.testNum(numCandidato)

}