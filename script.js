document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});