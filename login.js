document.addEventListener('DOMContentLoaded', function () {
            var inputs = document.querySelectorAll('.input100');
            var showPass = document.querySelectorAll('.btn-show-pass');

            showPass.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var input = btn.nextElementSibling;
                    if (input.type === 'password') {
                        input.type = 'text';
                        btn.classList.add('active');
                    } else {
                        input.type = 'password';
                        btn.classList.remove('active');
                    }
                });
            });

            inputs.forEach(function (input) {
                input.addEventListener('blur', function () {
                    if (input.value.trim() !== '') {
                        input.classList.add('has-val');
                    } else {
                        input.classList.remove('has-val');
                    }
                });

                // Check input value on page load
                if (input.value.trim() !== '') {
                    input.classList.add('has-val');
                }
            });
});
        

document.querySelector('.show_password').addEventListener('click', function() {
    const passwordInput = document.querySelector('input[name="pass"]');
    const showPasswordIcon = document.querySelector('.show_password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordIcon.classList.add('active');
    } else {
        passwordInput.type = 'password';
        showPasswordIcon.classList.remove('active');
    }
});

