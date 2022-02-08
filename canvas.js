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
    pincel.moveTo(150,175);
    pincel.lineTo(150,575);
    pincel.closePath();
    pincel.stroke();
    pincel.fill()

    pincel.fillStyle = "#c6a664 "
    pincel.rect(0,0,1200,800)


    pincel.stroke()
    pincel.fill();


    pincel.closePath();
    chargeData()
}

function drawLines(word) {
    console.log(word)
    var lines = word.length
    var i
    const canvas = document.querySelector("canvas");
    const pincel = canvas.getContext("2d");
    var cordx = 250;
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
    var cordx = 250;
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
        pincel.font = "35pt Verdana";
        pincel.fillText("Letras Incorrectas", cordincorrectx, 250);
        pincel.font = "20pt Verdana";
        pincel.fillText(letra, cordincorrectx + 24 * indexIncorrectLeters, 300);
        indexIncorrectLeters++;
        drawHorca()
    }
}
function drawHorca() {

}
