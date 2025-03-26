
(function(){
    emailjs.init("N58aBBvCgU7St5rVi"); // Add your public key
})();

const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    statusMessage.innerText = "Sending...";

    emailjs.sendForm('service_a5a8inh', 'template_kxq8giy', this)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        statusMessage.innerText = "Message sent successfully!";
        form.reset();
    }, function(error) {
        console.log('FAILED...', error);
        statusMessage.innerText = "Error sending message. Check keys or template setup.";
    });
});