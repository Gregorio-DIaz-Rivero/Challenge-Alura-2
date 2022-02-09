var incorrectLeters = []
var indexIncorrectLeters = 0


function generarTablero() {
    document.getElementById("start").hidden = true;
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    pincel.beginPath();

    pincel.fillStyle = "black";
    pincel.moveTo(100,600);
    pincel.lineTo(200,600);
    pincel.lineTo(150,575);
    pincel.lineTo(100,600);
    pincel.stroke();
    pincel.fill()
    pincel.closePath();

    pincel.fillStyle = "#c6a664 "
    pincel.rect(0,0,1200,800)
    pincel.stroke()
    pincel.fill();
    pincel.closePath()
    pincel.fillStyle = "black"
    pincel.fillRect(150,175,3,400)
    pincel.fillRect(150,175,325,3)
    pincel.fillRect(475,175,3,50)

    pincel.font = "35pt Verdana";
    pincel.fillText("Letras Incorrectas", 600, 250);

    getSecretWord()
}

function drawLines(word) {
    var lines = word.length
    var i
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    var cordx = 600;
    for (i=0; i<lines;i++) {
        pincel.fillStyle = "black";
        pincel.fillRect(cordx,600,10,2);
        cordx +=22;
    }
    onlyLeters()
}

function drawCorrectLeter(letra, posiciones) {
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    var i = 0;
    var cordx = 600;
    for (i; i< posiciones.length; i++) {
        pincel.font ="13pt Verdana";
        pincel.fillText(letra, cordx +22*posiciones[i], 600);
    }

}

function drawIncorrectLeter(letra) {
    var cordincorrectx = 600
    if (incorrectLeters.indexOf(letra) === -1) {
        const canvas = document.querySelector("canvas");
        const pincel = canvas.getContext("2d");
        incorrectLeters[indexIncorrectLeters] = letra;
        pincel.font = "20pt Verdana";
        pincel.fillText(letra, cordincorrectx + 24 * indexIncorrectLeters, 300);
        indexIncorrectLeters++;
        drawHorca()
    }
}
function drawHorca(error) {
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    pincel.strokeStyle = "black";
    switch (error){
        case 1:
            pincel.beginPath()
            pincel.lineWidth = 3;
            pincel.arc(475,250,25,0,2*Math.PI);
            pincel.stroke();
            pincel.closePath();
            break;
        case 2:
            pincel.beginPath()
            pincel.fillRect(475,275,3,150);
            pincel.stroke();
            pincel.closePath();
            break;
        case 3:
            pincel.lineWidth = 3;
            pincel.strokeStyle = "black"
            pincel.moveTo(475,300);
            pincel.lineTo(525,375);
            pincel.stroke();
            break;
        case 4:
            pincel.beginPath()
            pincel.strokeStyle = "black"
            pincel.moveTo(475,300);
            pincel.lineTo(425,375);
            pincel.stroke();
            break;
        case 5:
            pincel.lineWidth = 3;
            pincel.strokeStyle = "black"
            pincel.moveTo(476,425);
            pincel.lineTo(525,550);
            pincel.stroke();
            break;
        case 6:
            pincel.lineWidth = 3;
            pincel.strokeStyle = "black"
            pincel.moveTo(475,426);
            pincel.lineTo(425,550);
            pincel.stroke();
            break;
    }
}

function loseGame() {
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    pincel.font = "35pt Verdana";
    pincel.fillStyle = "red";
    pincel.fillText("Perdiste el juego", 350,100);
}

function wonGame() {
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    pincel.font = "35pt Verdana";
    pincel.fillStyle = "green";
    pincel.fillText("Felicitaciónes, ganaste el juego", 310,100);
}