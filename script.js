// Función para manejar el formulario de registro
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Aquí usaríamos un servicio para enviar el correo, por ejemplo, EmailJS o Formspree.
    // En este caso, solo vamos a mostrar un mensaje de confirmación.

    if (name && email) {
        document.getElementById("mensaje").textContent = `¡Gracias por registrarte, ${name}! Te hemos enviado un correo de confirmación a ${email}.`;
    } else {
        document.getElementById("mensaje").textContent = "Por favor, completa todos los campos.";
    }
});

emailjs.init('YOUR_USER_ID'); // Reemplaza con tu ID de usuario

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Enviar el correo electrónico usando EmailJS
    const templateParams = {
        name: name,
        email: email
    };
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            document.getElementById("mensaje").textContent = `¡Gracias por registrarte, ${name}! Te hemos enviado un correo de confirmación a ${email}.`;
        }, function(error) {
            document.getElementById("mensaje").textContent = "Hubo un error al enviar el registro. Intenta de nuevo.";
        });
});