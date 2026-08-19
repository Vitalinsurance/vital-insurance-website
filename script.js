document.addEventListener("DOMContentLoaded", () => {
  // JOEY ELEMENTS
  const openJoey = document.getElementById("openJoey");
  const closeJoey = document.getElementById("closeJoey");
  const joeyChat = document.getElementById("joeyChat");
  const joeyForm = document.getElementById("joeyForm");
  const joeyInput = document.getElementById("joeyInput");
  const joeyMessages = document.getElementById("joeyMessages");


  // OPEN JOEY
  if (openJoey) {
    openJoey.addEventListener("click", () => {
      joeyChat.classList.add("open");
      joeyInput.focus();
    });
  }


  // CLOSE JOEY
  if (closeJoey) {
    closeJoey.addEventListener("click", () => {
      joeyChat.classList.remove("open");
    });
  }


  // ADD MESSAGE FUNCTION
  function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("joey-message", type);

    message.textContent = text;

    joeyMessages.appendChild(message);

    joeyMessages.scrollTop = joeyMessages.scrollHeight;
  }


  // JOEY REPLY FUNCTION
  function getJoeyReply(message) {

    const text = message.toLowerCase();

    if (
      text.includes("motor") ||
      text.includes("car") ||
      text.includes("bike") ||
      text.includes("vehicle")
    ) {
      return "Sure! We can help with motor insurance for cars and two-wheelers. Would you like a new policy, renewal, or help with an existing policy?";
    }

    if (
      text.includes("business") ||
      text.includes("commercial") ||
      text.includes("company")
    ) {
      return "We provide insurance solutions for businesses and commercial requirements. Tell me a little about your business and I can guide you.";
    }

    if (
      text.includes("claim") ||
      text.includes("accident")
    ) {
      return "I'm sorry to hear that. We can help guide you through the claim process. Please tell me what type of insurance policy you have.";
    }

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hey! 👋 I'm Joey. How can I help you with insurance today?";
    }

    if (
      text.includes("contact") ||
      text.includes("call") ||
      text.includes("number")
    ) {
      return "You can contact the Vital Insurance team at +91 99105 80468 or +91 93547 94250.";
    }

    return "Thanks for your message! 👋 Our Vital Insurance team can help you with motor insurance, business insurance, policy renewals and claim assistance. What would you like to know?";
  }


  // SEND MESSAGE
  if (joeyForm) {

    joeyForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const text = joeyInput.value.trim();

      if (text === "") return;


      // SHOW USER MESSAGE
      addMessage(text, "user");


      // CLEAR INPUT
      joeyInput.value = "";


      // JOEY REPLY
      setTimeout(() => {

        const reply = getJoeyReply(text);

        addMessage(reply, "bot");

      }, 500);

    });

  }


  // SUGGESTION BUTTONS
  document.querySelectorAll(".joey-suggestions button").forEach((button) => {

    button.addEventListener("click", () => {

      const text = button.innerText;

      addMessage(text, "user");

      setTimeout(() => {

        const reply = getJoeyReply(text);

        addMessage(reply, "bot");

      }, 500);

    });

  });

});
