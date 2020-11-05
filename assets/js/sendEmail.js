function sendMail(contactForm) {
    emailjs.send("service_ar42jdd","evanne",
    { "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "questions": contactForm.questions.value,

    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
}
