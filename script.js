document.addEventListener("DOMContentLoaded", () => {

  // JOEY ELEMENTS
  const openJoey = document.getElementById("openJoey");
  const closeJoey = document.getElementById("closeJoey");
  const joeyChat = document.getElementById("joeyChat");
  const joeyForm = document.getElementById("joeyForm");
  const joeyInput = document.getElementById("joeyInput");
  const joeyMessages = document.getElementById("joeyMessages");


  // OPEN
  if (openJoey) {
    openJoey.onclick = () => {
      joeyChat.classList.add("open");
    };
  }


  // CLOSE
  if (closeJoey) {
    closeJoey.onclick = () => {
      joeyChat.classList.remove("open");
    };
  }


  // FUNCTION TO ADD MESSAGE
  function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("joey-message");
    message.classList.add(type);

    message.innerText = text;

    joeyMessages.appendChild(message);

    joeyMessages.scrollTop = joeyMessages.scrollHeight;
  }


  // SEND MESSAGE
  if (joeyForm) {

    joeyForm.onsubmit = (event) => {

      event.preventDefault();

      const text = joeyInput.value.trim();

      if (text === "") return;

      // SHOW USER MESSAGE
      addMessage(text, "user");

      // CLEAR INPUT
      joeyInput.value = "";

      // JOEY REPLIES
      setTimeout(() => {

        addMessage(
          "Hey! 👋 I received your message: " + text + ". Joey is working!",
          "bot"
        );

      }, 500);

    };

  }


  // SUGGESTION BUTTONS
  document.querySelectorAll(".joey-suggestions button").forEach((button) => {

    button.onclick = () => {

      const text = button.innerText;

      addMessage(text, "user");

      setTimeout(() => {

        addMessage(
          "Sure! I can help you with " + text + ". What would you like to know?",
          "bot"
        );

      }, 500);

    };

  });

});
