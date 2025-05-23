// Credenciales de administrador
const ADMIN_USER = "admin@test.com";
const ADMIN_PASSWORD = "admin123";

// Configuración de Firebase (necesitarás agregar tus propias credenciales)
const firebaseConfig = {
    // Aquí irían tus credenciales de Firebase
};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Manejar el envío del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInput.value;

        // Verificar credenciales de administrador
        if (email === ADMIN_USER && password === ADMIN_PASSWORD) {
            // Guardar en sessionStorage que es un admin
            sessionStorage.setItem('userRole', 'admin');
            window.location.href = 'home.html';
            return;
        }

        // Si no es admin, mostrar error
        alert('Credenciales incorrectas');
    });

    // Manejar inicio de sesión con Google
    document.querySelector('.fa-google').parentElement.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Función de inicio de sesión con Google en desarrollo');
        // Aquí iría la implementación de OAuth con Google
    });

    // Manejar inicio de sesión con Facebook
    document.querySelector('.fa-facebook-f').parentElement.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Función de inicio de sesión con Facebook en desarrollo');
        // Aquí iría la implementación de OAuth con Facebook
    });

    // Manejar inicio de sesión con Twitter
    document.querySelector('.fa-twitter').parentElement.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Función de inicio de sesión con Twitter en desarrollo');
        // Aquí iría la implementación de OAuth con Twitter
    });
});

// Función para validar el formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar mensajes de error
function showError(message) {
    alert(message);
}

// Función para mostrar mensajes de éxito
function showSuccess(message) {
    alert(message);
}