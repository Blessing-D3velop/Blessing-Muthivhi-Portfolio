document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("9rK8ctKsA_BBQD_K9");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_8neyb4a",
      "template_nua0p4e",
      this
    ).then(() => {
      alert("Message sent successfully!");
      form.reset();
    }).catch((error) => {
      console.log("EmailJS Error:", error);
      alert("Failed to send message.");
    });

  });

});