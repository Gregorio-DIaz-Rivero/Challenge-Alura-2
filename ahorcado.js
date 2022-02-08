var isStarted = false
var wordSelected = null
var error = 0
var corrctas = 0
var used =[]
var contused = 0
var secretswords = 7
function chargeData() {
    localStorage.setItem(0, "HOLA");
    localStorage.setItem(1, "QUESO");
    localStorage.setItem(2, "PAN");
    localStorage.setItem(4, "AUTO");
    localStorage.setItem(5, "ESQUELETO");
    localStorage.setItem(6, "BARCO");
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
        if ((letra === letra.toUpperCase() && numbers.indexOf(letra) === -1) && (error<6 && corrctas<wordSelected.length)) {
            if (wordSelected.indexOf(letra) !== -1 && used.indexOf(letra) ===-1){
                used[contused] = letra;
                contused ++
                var i=0;
                var posiciones = [];
                var cont =0;
                for (i;i<wordSelected.length;i++) {
                if (wordSelected[i] === letra) {
                    posiciones[cont] = i;
                     cont++;
                     corrctas ++
                    }
                }
                drawCorrectLeter(letra, posiciones);
            } else {
                console.log("Ser")
                if (error<6 && wordSelected.indexOf(letra) === -1) {
                    drawIncorrectLeter(letra);
                    error++
                    drawHorca(error);
                    if (error === 6) {
                        loseGame();
                    }
                }
            }
        }
        if (corrctas === wordSelected.length){
            wonGame();
        }
    })
}

function newSecretWord() {
    var exist = false
    var newword = document.getElementById("input-nueva-palabra").value.toUpperCase()
    var i = 0;
    while (i<localStorage.length && exist !== true) {
        if (localStorage.getItem(i) === newword){
            exist = true;
            alert("Esta palabra ya existe")
        }
        i++;
    }
    if (exist === false){
        localStorage.setItem(secretswords, newword)
        secretswords ++
    }
}