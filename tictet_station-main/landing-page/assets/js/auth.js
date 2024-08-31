document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        window.location.href = 'index.html'; // Redirect to homepage
    }
});

document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        window.location.href = 'index.html'; // Redirect to homepage
    }
});
