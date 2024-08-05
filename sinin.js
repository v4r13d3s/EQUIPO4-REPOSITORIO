document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('cityError').innerText = '';
    document.getElementById('termsError').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value;
    const terms = document.getElementById('terms').checked;

    // Regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{10}$/; // Example pattern for a 10-digit phone number

    let valid = true;

    // Validate that fields are not empty
    if (name === '') {
        document.getElementById('nameError').innerText = 'El nombre es obligatorio.';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'El correo es obligatorio.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Por favor ingrese un correo válido.';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'La contraseña es obligatoria.';
        valid = false;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerText = 'La confirmación de la contraseña es obligatoria.';
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Las contraseñas no coinciden.';
        valid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').innerText = 'El número de teléfono es obligatorio.';
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Por favor ingrese un número de teléfono válido.';
        valid = false;
    }

    if (city === '') {
        document.getElementById('cityError').innerText = 'Selecciona una ciudad.';
        valid = false;
    }

    if (!terms) {
        document.getElementById('termsError').innerText = 'Debes aceptar los términos.';
        valid = false;
    }

    // If all validations pass, submit the form (you can handle form submission here)
    if (valid) {
        alert('Formulario enviado correctamente');
        // Aquí puedes enviar el formulario o realizar otras acciones necesarias
        // this.submit(); // Descomenta esto para enviar el formulario
    }
});
