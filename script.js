

document.querySelectorAll('input[name="contact"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('input-container').style.display = 'block';
        document.getElementById('contact-detail').placeholder = `Enter your ${this.value}`;
    });
});

function submitForm() {
    const contactType = document.querySelector('input[name="contact"]:checked').value;
    const contactDetail = document.getElementById('contact-detail').value;
     document.querySelector('.text').style.display = 'none';
    
    if (contactDetail) {
        // Hide the form and show a success message
        document.getElementById('share-form').style.display = 'none';
        document.getElementById('question-section').style.display = 'none'; // Hide the question section
        document.getElementById('success-message').style.display = 'block';
        
        // Show fireworks animation
        showFireworks();
        
        // Send email using EmailJS
        emailjs.send('service_lnaepwf', 'template_5w50wk2', {
            contact_type: contactType,
            contact_detail: contactDetail
        })
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter your contact details');
    }
}

function showFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks');
    
    // Create multiple colorful sparks for the fireworks effect
    for (let i = 0; i < 100; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.width = `${Math.random() * 20 + 10}px`;
        spark.style.height = spark.style.width;
        spark.style.top = `${Math.random() * 100}vh`;
        spark.style.left = `${Math.random() * 100}vw`;
        spark.style.background = `radial-gradient(circle, 
            rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8) 0%, 
            rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0) 70%)`;
        spark.style.opacity = Math.random(); // Random opacity
        fireworksContainer.appendChild(spark);
    }
    
    document.body.appendChild(fireworksContainer);

    // Display fireworks
    fireworksContainer.style.display = 'block';
    
    // Remove fireworks container after a certain period
    setTimeout(() => {
        document.body.removeChild(fireworksContainer);
    }, 3000); // Adjust this duration if needed
}
