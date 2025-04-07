
document.addEventListener("DOMContentLoaded", function() { 
// Evento mouseover y mouseout: Cambiar borde y opacidad de las imágenes
    
    var fotos = document.querySelectorAll("#img2");
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].addEventListener("mouseover", function() {
            this.style.border = "3px solid black";
            this.style.opacity = "0.7";
        });
        fotos[i].addEventListener("mouseout", function() {
            this.style.border = "none";
            this.style.opacity = "1";
        });
    }
    
    //Si se presiona la tecla espacio, se cambia el color de fondo a azul
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") { // Verifica si la tecla presionada es "Escape"
            document.body.style.backgroundColor = "blue"; // Cambia el fondo a azul
        }
    });
});
