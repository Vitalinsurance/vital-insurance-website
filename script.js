/* =========================
   ENQUIRY FORM
========================= */

const buttons = document.querySelectorAll(".choice");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(x => x.classList.remove("active"));
    button.classList.add("active");
  });
});

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("formMessage");

    if (message) {
      message.textContent =
        "Thanks! Your enquiry has been recorded. We will connect with you shortly.";
    }

    this.reset();
  });
}


/* =========================
   JOEY CHATBOT
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const openJoey = document.getElementById("openJoey");
  const closeJoey = document.getElementById("closeJoey");
  const joeyChat = document.getElementById("joeyChat");

  const joeyForm = document.getElementById("joeyForm");
  const joeyInput = document.getElementById("joeyInput");
  const joeyMessages = document.getElementById("joeyMessages");

  if (!openJoey || !joeyChat) {
    console.log("Joey chatbot elements not found");
    return;
  }


  /* OPEN JOEY */

  openJoey.addEventListener("click", function () {
    joeyChat.classList.add("open");
  });


  /* CLOSE JOEY */

  if (closeJoey) {
    closeJoey.addEventListener("click", function () {
      joeyChat.classList.remove("open");
    });
  }


  /* ADD MESSAGE */

  function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "joey-message " + type;

    message.textContent = text;

    joeyMessages.appendChild(message);

    joeyMessages.scrollTop = joeyMessages.scrollHeight;
  }


  /* JOEY RESPONSE */

  function getJoeyReply(message) {

    const text = message.toLowerCase();


    if (
      text.includes("motor") ||
      text.includes("car") ||
      text.includes("bike") ||
      text.includes("vehicle")
    ) {

      return "Sure! We can help you with motor and vehicle insurance. Tell me whether you need insurance for a car, bike, commercial vehicle or dealership.";
    }


    if (
      text.includes("business") ||
      text.includes("sme") ||
      text.includes("company")
    ) {

      return "We provide insurance solutions for businesses and SMEs, including protection for assets, operations and business risks.";
    }


    if (
      text.includes("claim") ||
      text.includes("accident")
    ) {

      return "We can help you understand the claims process. Please share your policy type and briefly tell us what happened.";
    }


    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("number")
    ) {

      return "You can reach Vital Insurance at +91 99105 80468 or +91 93547 94250.";
    }


    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {

      return "Hi! 👋 I'm Joey. I can help you with motor insurance, business insurance, claims assistance or general questions.";
    }


    return "Thanks for your message! Our team at Vital Insurance can help you with insurance, dealership partnerships and claims assistance. Could you tell me a little more about what you need?";
  }


  /* SEND MESSAGE */

  if (joeyForm) {

    joeyForm.addEventListener("submit", function (e) {

      e.preventDefault();

      const userMessage = joeyInput.value.trim();

      if (!userMessage) return;


      addMessage(userMessage, "user");

      joeyInput.value = "";


      setTimeout(function () {

        const reply = getJoeyReply(userMessage);

        addMessage(reply, "bot");

      }, 500);

    });

  }


  /* SUGGESTION BUTTONS */

  const suggestions =
    document.querySelectorAll(".joey-suggestions button");


  suggestions.forEach(button => {

    button.addEventListener("click", function () {

      const question = this.textContent;

      addMessage(question, "user");


      setTimeout(function () {

        addMessage(
          getJoeyReply(question),
          "bot"
        );

      }, 500);

    });

  });

});
