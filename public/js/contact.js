const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", () => {
  sendMail();
});

const sendMail = () => {
  let name = document.getElementById("name-input").value;
  let email = document.getElementById("email-input").value;
  let phone = document.getElementById("phone-input").value;
  let subject = document.getElementById("subject-input").value;
  let message = document.getElementById("message-input").value;

  if (name === "") {
    return alert("Name is required");
  }
  if (email === "") {
    return alert("email is required");
  }
  if (phone === "") {
    return alert("Phone is required");
  }
  if (subject === "") {
    return alert("Subject is required");
  }

  const emailReciever = "Jajuni22@gmail.com";

  const a = document.createElement("a");

  a.href = `mailto:${emailReciever}?subject=${subject}&body= Hello, my name is ${name}, please contact me at ${phone}, ${message}`;
  console.log(a);
  a.click();

  alert("Send Delivered :)");
};
