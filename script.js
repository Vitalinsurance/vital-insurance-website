document.addEventListener("DOMContentLoaded", function () {

  const openJoey = document.getElementById("openJoey");
  const closeJoey = document.getElementById("closeJoey");
  const joeyChat = document.getElementById("joeyChat");
  const joeyForm = document.getElementById("joeyForm");
  const joeyInput = document.getElementById("joeyInput");
  const joeyMessages = document.getElementById("joeyMessages");

  console.log("Joey elements:", {
    openJoey,
    closeJoey,
    joeyChat,
    joeyForm,
    joeyInput,
    joeyMessages
  });

  /* OPEN JOEY */

  if (openJoey && joeyChat) {
    openJoey.addEventListener("click", function () {
      console.log("Ask Joey clicked");
      joeyChat.classList.add("open");
    });
  }

  /* CLOSE JOEY */

  if (closeJoey && joeyChat) {
    closeJoey.addEventListener("click", function () {
      joeyChat.classList.remove("open");
    });
  }

  /* ADD MESSAGE */

  function addMessage(text, type) {

    if (!joeyMessages) return;

    const message = document.createElement("div");

    message.className = "joey-message " + type;

    message.textContent = text;

    joeyMessages.appendChild(message);

    joeyMessages.scrollTop = joeyMessages.scrollHeight;
  }


  /* JOEY REPLIES */

  function getJoeyReply(message) {

    const text = message.toLowerCase();

    if (
      text.includes("motor") ||
      text.includes("car") ||
      text.includes("bike") ||
      text.includes("vehicle")
    ) {
      return "We can help you with motor and vehicle insurance. Share your vehicle type and our team can guide you further.";
    }

    if (
      text.includes("business") ||
      text.includes("sme") ||
      text.includes("shop") ||
      text.includes("company")
    ) {
      return "Vital Insurance provides insurance solutions for businesses, assets and operations. Tell me a little about your business and we'll guide you.";
    }

    if (
      text.includes("claim") ||
      text.includes("accident")
    ) {
      return "We're here to help with your claim. Please share your policy details and a brief description of what happened.";
    }

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hi! 👋 I'm Joey. I can help you with motor insurance, business insurance, claims and general insurance questions.";
    }

    return "Thanks for your message! Our team can help you with this. You can also submit an enquiry and we'll get in touch with you shortly.";
  }


  /* FORM SUBMIT */

  if (joeyForm && joeyInput) {

    joeyForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const message = joeyInput.value.trim();

      if (!message) return;

      addMessage(message, "user");

      joeyInput.value = "";

      setTimeout(function () {

        const reply = getJoeyReply(message);

        addMessage(reply, "bot");

      }, 500);

    });

  }


  /* SUGGESTION BUTTONS */

  const suggestionButtons =
    document.querySelectorAll(".joey-suggestions button");

  suggestionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const question = button.textContent;

      addMessage(question, "user");

      setTimeout(function () {

        const reply = getJoeyReply(question);

        addMessage(reply, "bot");

      }, 400);

    });

  });

});
