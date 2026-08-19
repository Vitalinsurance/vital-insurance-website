console.log("JOEY SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", function () {

  const openJoey = document.getElementById("openJoey");
  const closeJoey = document.getElementById("closeJoey");
  const joeyChat = document.getElementById("joeyChat");

  const joeyForm = document.getElementById("joeyForm");
  const joeyInput = document.getElementById("joeyInput");
  const joeyMessages = document.getElementById("joeyMessages");


  function addMessage(text, sender) {

    const message = document.createElement("div");

    message.className = "joey-message " + sender;

    message.textContent = text;

    joeyMessages.appendChild(message);

    joeyMessages.scrollTop = joeyMessages.scrollHeight;

  }


  /* OPEN JOEY */

  if (openJoey) {

    openJoey.addEventListener("click", function () {

      joeyChat.classList.add("open");

    });

  }


  /* CLOSE JOEY */

  if (closeJoey) {

    closeJoey.addEventListener("click", function () {

      joeyChat.classList.remove("open");

    });

  }


  /* SEND MESSAGE */

  if (joeyForm) {

    joeyForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const userMessage = joeyInput.value.trim();

      if (!userMessage) return;


      /* SHOW USER MESSAGE */

      addMessage(userMessage, "user");


      /* CLEAR INPUT */

      joeyInput.value = "";


      /* JOEY REPLY */

      setTimeout(function () {

        addMessage(
          "Hey! 👋 I'm Joey. Thanks for your question. I can help you understand motor insurance, business insurance, personal insurance and claims. Could you tell me a little more?",
          "bot"
        );

      }, 600);

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

        addMessage(
          "Sure! Joey can help with that. Tell me more about your insurance requirement and I'll guide you.",
          "bot"
        );

      }, 500);

    });

  });

});
