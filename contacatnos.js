document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validar el formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("msg").value.trim();

        if (!nombre || !email || !telefono || !mensaje) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        // Si pasa todas las validaciones
        alert("Formulario enviado correctamente!");
        form.reset();
    });

    // Función para validar el email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
