document.addEventListener("DOMContentLoaded", function() {                                           
    // Evento click: Cambiar color de fondo al hacer click en el título
    document.getElementById("titulo").addEventListener("click", function() {
        document.body.style.backgroundColor = "lightblue";
    });
 // Evento click: Cambiar color de fondo al hacer click en el título
 document.getElementById("button").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});


    // Evento dblclick: Cambiar tamaño y título
    document.getElementById("titulo").addEventListener("dblclick", function() {
        this.style.color = "red";
        this.style.fontSize = "5em";
    });

    // Evento mouseover y mouseout: Cambiar borde y opacidad de las imágenes
    
    var fotos = document.querySelectorAll("#img1");
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].addEventListener("mouseover", function() {
            this.style.border = "3px solid black";
            this.style.opacity = "0.7";
        });
        fotos[i].addEventListener("mouseout", function() {
            this.style.border = "none";
            this.style.opacity = "8";
        });
    }
        

    // Evento keydown: Detectar cuando el usuario presiona una tecla y mostrarlo
    document.addEventListener("keydown", function(event) {
        console.log("Tecla presionada: " + event.key);
    });

    // Evento load: Mostrar mensaje cuando la página cargue
    window.addEventListener("load", function() {
        alert("Página cargada correctamente");
    });

    // Evento resize: Mostrar ancho y alto de la ventana al cambiar tamaño
    window.addEventListener("resize", function() {
        console.log("Ancho: " + window.innerWidth + ", Alto: " + window.innerHeight);
    });

    // Evento scroll: Mostrar un mensaje cuando el usuario haga scroll
    window.addEventListener("scroll", function() {
        console.log("Estás desplazándote por la página.");
    });

    //Si se presiona la tecla espacio, se cambia el color de fondo a azul
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") { // Verifica si la tecla presionada es "Escape"
            document.body.style.backgroundColor = "blue"; // Cambia el fondo a azul
        }
    });

    //Validación formulario
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("opinionform").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío automático del formulario

            const telefonoInput = document.getElementById("phone").value.trim();
            const opinionInput = document.getElementById("textopinion").value.trim();
            const fechaInput = document.getElementById("envio").value;
            
            // Expresión para validar el formato del teléfono (123-456-7890)
            const telefonoRegex = /^\d{3}-\d{3}-\d{3}$/;

            const errores = [];

            if (!telefonoRegex.test(telefonoInput)) {
                errores.push("Por favor, introduzca un número de teléfono válido en el formato 123-456-7890.");
            }

            if (opinionInput === "") {
                errores.push("El campo de opinión no puede estar vacío.");
            }

            if (!fechaInput) {
                errores.push("Seleccione una fecha válida.");
            }

            if (errores.length > 0) {
                alert(errores.join("\n"));
                return; // Detiene el envío del formulario si hay errores
            }

            // Si todo está correcto, enviar el formulario
            alert("Formulario enviado correctamente.");
            this.submit(); // Ahora sí se envía el formulario
        });
    });

    //Codigo de las paginas web
    let colorButton = document.getElementById("cambia");
        colorButton.addEventListener("click", function() {
            document.body.style.backgroundColor = "red";
        });

   
    document.getElementById("imagen1").addEventListener("mouseout", function() {
        this.style.transform = "scale(0.7)";
    });
    document.getElementById("imagen2").addEventListener("mouseover", function() {
        this.style.transform = "scale(1.5)";
    });
    document.getElementById("imagen2").addEventListener("mouseout", function() {
        this.style.transform = "scale(0.7)";
    });
    document.getElementById("imagen3").addEventListener("mouseover", function() {
        this.style.transform = "scale(1.5)";
    });
    document.getElementById("imagen3").addEventListener("mouseout", function() {
        this.style.transform = "scale(0.7)";
    });
});
