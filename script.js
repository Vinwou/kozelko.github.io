document.getElementById('password-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'bebi'; // Remplacez ceci par votre mot de passe réel

    if (passwordInput === correctPassword) {
        document.getElementById('protected-content').style.display = 'block';
        this.style.display = 'none';
    } else {
        alert('Mot de passe incorrect. Veuillez réessayer.');
    }
});
