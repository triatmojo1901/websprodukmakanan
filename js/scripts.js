// Function to show an alert when the order button is clicked
function showMessage(product) {
    alert("Anda memesan: " + product);
}

// Submit form and show a thank you message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Terima kasih telah menghubungi kami, " + document.getElementById('name').value + "!");
});
