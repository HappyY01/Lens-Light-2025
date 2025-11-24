document.addEventListener("DOMContentLoaded", function() {

    // --- FAQ Accordion (for Contact Page) ---
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            // Close other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector(".faq-answer").style.display = "none";
                }
            });

            // Toggle current answer
            const isVisible = answer.style.display === "block";
            answer.style.display = isVisible ? "none" : "block";
        });
    });

    // --- Registration Form Validation ---
    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop the form from submitting
            
            // Get form values
            const name = document.getElementById("reg-name").value;
            const email = document.getElementById("reg-email").value;
            const department = document.getElementById("reg-department").value;
            const title = document.getElementById("reg-title").value;
            const upload = document.getElementById("reg-upload").value;
            const agree = document.getElementById("agree-rules").checked;

            if (!name || !email || !department || !title || !upload) {
                alert("Please fill out all required fields.");
                return;
            }

            if (!agree) {
                alert("You must agree to the contest rules to register.");
                return;
            }

            // If all checks pass:
            alert("Registration successful! Thank you for joining.");
            // In a real project, you would now send this data to a server.
            registrationForm.reset();
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                alert("Please fill out all required fields (Name, Email, Message).");
                return;
            }

            alert("Message sent successfully! We will get back to you soon.");
            contactForm.reset();
        });
    }
});