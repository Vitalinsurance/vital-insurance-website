const openJoey = document.getElementById("openJoey");
const closeJoey = document.getElementById("closeJoey");
const joeyChat = document.getElementById("joeyChat");
const joeyForm = document.getElementById("joeyForm");
const joeyInput = document.getElementById("joeyInput");
const joeyMessages = document.getElementById("joeyMessages");

/* Open Joey */
openJoey.addEventListener("click", function () {
  joeyChat.classList.add("open");
  joeyInput.focus();
});

/* Close Joey */
closeJoey.addEventListener("click", function () {
  joeyChat.classList.remove("open");
});

/* Add message */
function addMessage(text, type) {
  const message = document.createElement("div");

  message.className = "joey-message " + type;
  message.textContent = text;

  joeyMessages.appendChild(message);
  joeyMessages.scrollTop = joeyMessages.scrollHeight;
}

/* Joey demo brain */
function getJoeyReply(message) {
  const text = message.toLowerCase();

  if (
    text.includes("bike") ||
    text.includes("car") ||
    text.includes("motor") ||
    text.includes("vehicle")
  ) {
    return "Absolutely! I can help you with motor insurance. Whether it's a bike, car, commercial vehicle, policy renewal or a new policy, tell me a little more about your requirement.";
  }

  if (
    text.includes("business") ||
    text.includes("fire") ||
    text.includes("burglary") ||
    text.includes("sme")
  ) {
    return "Vital Insurance can help businesses understand insurance solutions for their assets, property and operations. Tell me about your business and I'll guide you.";
  }

  if (
    text.includes("claim") ||
    text.includes("accident") ||
    text.includes("damage")
  ) {
    return "I'm here to help with your claim. Please tell me what type of policy you have and briefly explain what happened.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hey! 👋 I'm Joey, Vital Insurance's assistant. Ask me about motor insurance, business insurance, claims or any general insurance question.";
  }

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("number")
  ) {
    return "You can reach Vital Insurance on +91 99105 80468 or +91 93547 94250.";
  }

  return "Thanks for your question! 😊 I'm Joey from Vital Insurance. I can help guide you about motor insurance, business insurance, personal insurance and claims. Could you tell me a little more?";
}

/* Send message */
joeyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = joeyInput.value.trim();

  if (!message) return;

  addMessage(message, "user");

  joeyInput.value = "";

  setTimeout(function () {
    addMessage(getJoeyReply(message), "bot");
  }, 500);
});

/* Suggestion buttons */
const suggestions = document.querySelectorAll(
  ".joey-suggestions button"
);

suggestions.forEach(function (button) {
  button.addEventListener("click", function () {
    const message = button.textContent;

    addMessage(message, "user");

    setTimeout(function () {
      addMessage(getJoeyReply(message), "bot");
    }, 500);
  });
});
