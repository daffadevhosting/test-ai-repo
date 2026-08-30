document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            // Simulate login process
            if (username === 'admin' && password === 'password') {
                alert('Login successful!');
            } else {
                alert('Invalid credentials.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Simulate registration process
            alert('Registration successful!');
        });
    }
});