document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Element: Search Filter on Services Page
    const searchInput = document.getElementById('serviceSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const serviceCards = document.querySelectorAll('.service-card');

            serviceCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(term) || description.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 2. Client-Side Validation & AJAX Submission for Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent standard page reload on submit

            // Clear previous error messages
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            const statusDiv = document.getElementById('contactStatus');
            statusDiv.textContent = '';
            statusDiv.style.color = 'black';

            // Retrieve form inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const msgTypeInput = document.getElementById('msgType');
            const messageInput = document.getElementById('message');

            let isValid = true;

            // Name validation
            if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
                document.getElementById('nameError').textContent = 'Please enter a valid name (at least 2 characters).';
                isValid = false;
            }

            // Email validation regex pattern
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Phone validation (10 digits)
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phoneInput.value.trim())) {
                document.getElementById('phoneError').textContent = 'Please enter a 10-digit phone number (digits only).';
                isValid = false;
            }

            // Select option validation
            if (!msgTypeInput.value) {
                document.getElementById('msgTypeError').textContent = 'Please select a message type.';
                isValid = false;
            }

            // Message length validation
            if (messageInput.value.trim().length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
                isValid = false;
            }

            if (!isValid) {
                statusDiv.style.color = '#d9534f';
                statusDiv.textContent = 'Please fix the errors above before submitting.';
                return;
            }

            // AJAX Form Submission using Fetch API
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            statusDiv.style.color = '#004080';
            statusDiv.textContent = 'Submitting form data via AJAX...';

            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                msgType: msgTypeInput.value,
                message: messageInput.value.trim()
            };

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    statusDiv.style.color = 'green';
                    statusDiv.textContent = 'Success! Your message has been sent asynchronously via AJAX.';
                    contactForm.reset();
                } else {
                    throw new Error('Server responded with status ' + response.status);
                }
            } catch (error) {
                statusDiv.style.color = '#d9534f';
                statusDiv.textContent = 'Submission failed: ' + error.message;
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }

    // 3. Client Validation & Response Logic for Enquiry Form
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('enquiryName').value.trim();
            const email = document.getElementById('enquiryEmail').value.trim();
            const type = document.getElementById('enquiryType').value;
            const details = document.getElementById('enquiryDetails').value.trim();
            const responseDiv = document.getElementById('enquiryResponse');

            if (!name || !email || !details) {
                responseDiv.style.color = '#d9534f';
                responseDiv.textContent = 'Please complete all required fields.';
                return;
            }

            responseDiv.style.color = 'green';
            if (type === 'service') {
                responseDiv.textContent = `Thank you ${name}! Our programs are free, and upcoming sessions are available.`;
            } else if (type === 'volunteer') {
                responseDiv.textContent = `Thank you ${name}! Volunteer onboarding runs monthly; details sent to ${email}.`;
            } else if (type === 'sponsor') {
                responseDiv.textContent = `Thank you ${name}! Sponsorship packages have been sent to ${email}.`;
            }
            enquiryForm.reset();
        });
    }
});