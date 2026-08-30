window.handleLogin = function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate login process
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials.');
    }
};

window.handleRegister = function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Simple validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate registration process
    alert('Registration successful!');
};