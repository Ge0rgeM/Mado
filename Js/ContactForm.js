document.getElementById('submitBtn').addEventListener("click",(event)=>{
    event.preventDefault();
    const form = document.querySelectorAll('form')[0];
    if(!form.checkValidity()) {
        console.log(1);
        const style = document.createElement('style');
        style.textContent = `
            .form-group input:invalid + .error,.form-group textarea:invalid + .error {
                display: block;
            }
        `;
        document.head.appendChild(style);
    }else {
        const style = document.createElement('style');
        style.textContent = `
            .form-group input:invalid + .error,.form-group textarea:invalid + .error {
                display: none;
            }
        `;
        document.head.appendChild(style);
        formSubmit(form); 
    }
});

function formSubmit(form) {
    // Prevent Spam Submitting
    const btn = document.getElementById("submitBtn");
    btn.disabled = true;

    // Get the form data
    const formData = new FormData(form);
    // POPUP
    let popup = document.getElementById("loading-SubmitPopup");
    popup.style.display = 'block';

    // Define the email addresses
    const emailAddresses = [
        'G_modebadze3@cu.edu.ge',
        'madona.kulalaghashvili.1@btu.edu.ge',
    ];

    // Send the form data to each email address using a third-party service
    const sendEmail = (email) => {
        return fetch(`https://formsubmit.co/ajax/${email}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
    };

    Promise.all(emailAddresses.map(sendEmail))
        .then(responses => {
            if (responses.every(response => response.ok)) {
                alert('Your message has been sent!');
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.log(`An error occurred: ${error}`);
            alert('An error occurred while sending your message.');
        })
        .finally(() => {
            popup.style.display = 'none';
            btn.disabled = false;
        });
}
