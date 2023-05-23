document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to server

    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;

    alert(`Gracias, ${name} Recibimos tu contacto: ${comment}`);
});