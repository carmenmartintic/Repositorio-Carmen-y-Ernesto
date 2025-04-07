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