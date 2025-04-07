document.addEventListener("DOMContentLoaded", function() {                                           
    // Evento click
    document.getElementById("titulo").addEventListener("click", function() {
        document.body.style.backgroundColor = "lightblue";
    });
 // Evento click
 document.getElementById("button").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});


    // Evento dblclick
    document.getElementById("titulo").addEventListener("dblclick", function() {
        this.style.color = "red";
        this.style.fontSize = "5em";
    });
    // Evento click
    document.addEventListener("DOMContentLoaded", function() {
        const button = document.querySelectorAll(".btn-click");
        let i = 0;
    
        while (i < button.length) {
            button[i].addEventListener("click", function() {
                alert(`¡Hiciste clic en el botón #${i + 1}!`);
            });
            i++;
        }
    });

    // Evento mouseover y mouseout
    
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
        
    document.addEventListener("keydown", function(event) {
        console.log("Tecla presionada: " + event.key);
    });

    window.addEventListener("load", function() {
        alert("Página cargada correctamente");
    });

    window.addEventListener("resize", function() {
        console.log("Ancho: " + window.innerWidth + ", Alto: " + window.innerHeight);
    });

    window.addEventListener("scroll", function() {
        console.log("Estás desplazándote por la página.");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") { 
            document.body.style.backgroundColor = "blue"; 
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("opinionform").addEventListener("submit", function(event) {
            event.preventDefault(); 

            const telefonoInput = document.getElementById("phone").value.trim();
            const opinionInput = document.getElementById("textopinion").value.trim();
            const fechaInput = document.getElementById("envio").value;
            
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
                return; 
            }

            alert("Formulario enviado correctamente.");
            this.submit();
        });
    });

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
