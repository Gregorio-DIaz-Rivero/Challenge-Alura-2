var isStarted = false
var wordSelected = null
function chargeData() {
    localStorage.setItem(0, "HOLA");
    localStorage.setItem(1, "QUESO");
    localStorage.setItem(2, "PAN");
    localStorage.setItem(4, "AUTO");
    localStorage.setItem(5, "ESQUELETO");
    localStorage.setItem(6, "BARCO");
    getSecretWord()
}


function getSecretWord() {
    wordSelected = (localStorage[Math.floor(Math.random()*localStorage.length)])
    console.log(1)
    isStarted = true
    drawLines(wordSelected)
}

function onlyLeters(){
    //const doc = document.querySelector("canvas")
    document.addEventListener("keydown", e => {
        const letra = e.key
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!']
        if ((letra === letra.toUpperCase() && numbers.indexOf(letra) === -1)) {
            if (wordSelected.indexOf(letra) !== -1){
            var i=0;
            var posiciones = [];
            var cont =0;
            for (i;i<wordSelected.length;i++) {
            if (wordSelected[i] === letra) {
                posiciones[cont] = i;
                 cont++;
                }
            }
            drawCorrectLeter(letra, posiciones);
            } else {
                drawIncorrectLeter(letra);
            }
        }
    })
}