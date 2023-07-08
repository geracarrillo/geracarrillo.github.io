function compara() {
    var gasl = 'off'; // Cambia este valor por "rojo" para mostrar una imagen roja
    if (gasl == "on") {
        document.getElementById("imagen").src = "/img/gas.png";
    } else if (gasl == "off"){
        document.getElementById("imagen").src = "/img/luna.png";
    }
    
    var mov = "off";
    if (mov === "on") {
        document.getElementById("movement").src = "/img/move.png";
    } else if (mov === "off") {
        document.getElementById("movement").src = "/img/luna.png";
    }

    var foco = "off";
    if (foco === "on") {
        document.getElementById("foco").src = "/img/foco.png";
    } else if (foco === "off") {
        document.getElementById("foco").src = "/img/luna.png";
    }
}