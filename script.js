/* =========================
   ENQUIRY FORM
========================= */

const buttons = document.querySelectorAll(".choice");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    document.getElementById("formMessage").textContent =
      "Thanks! Your enquiry has been recorded. We will connect with you shortly.";

    event.target.reset();
  });
}


/* =========================
   JOEY CHATBOT
========================= */

const openJoey = document.getElementById("openJoey");
const closeJoey = document.getElementById("closeJoey");
const joeyChat = document.getElementById("joeyChat");
const joeyForm = document.getElementById("joeyForm");
const joeyInput = document.getElementById("joeyInput");
const joeyMessages = document.getElementById("joeyMessages");


/* Open chat */

if (openJoey) {
  openJoey.addEventListener("click", () => {
    joeyChat.classList.add("open");
    joeyInput.focus();
  });
}


/* Close chat */

if (closeJoey) {
  closeJoey.addEventListener("click", () => {
    joeyChat.classList.remove("open");
  });
}


/* Add message */

function addJoeyMessage(message, type = "bot") {
  const messageElement = document.createElement("div");

  messageElement.className = `joey-message ${type}`;
  messageElement.textContent = message;

  joeyMessages.appendChild(messageElement);

  joeyMessages.scrollTop = joeyMessages.scrollHeight;
}


/* Demo insurance replies for now */

function getJoeyReply(message) {
  const text = message.toLowerCase();

  if (
    text.includes("motor") ||
    text.includes("bike") ||
    text.includes("car") ||
    text.includes("vehicle")
  ) {
    return "I can help with motor insurance 😊. We can guide you regarding policy renewal, third-party cover, comprehensive insurance, zero depreciation and more. What vehicle do you need insurance for?";
  }

  if (
    text.includes("business") ||
    text.includes("sme") ||
    text.includes("fire") ||
    text.includes("burglary")
  ) {
    return "Vital Insurance helps businesses with solutions such as fire and burglary insurance. Tell me a little about your business and what you would like to protect.";
  }

  if (
    text.includes("claim") ||
    text.includes("accident") ||
    text.includes("damage")
  ) {
    return "I'm sorry you're dealing with that. I can help explain the claims process and the documents you may need. Please tell me what type of insurance claim you have.";
  }

  if (
    text.includes("health") ||
    text.includes("family")
  ) {
    return "We can help you understand personal and family insurance options. Tell me how many people you would like to insure and their approximate age group.";
  }

  return "Thanks for your question! 😊 I'm Joey, Vital Insurance's assistant. I can help you understand motor, business, personal insurance and claims. Tell me a little more about what you need.";
}


/* Send message */

function sendJoeyMessage(message) {
  if (!message.trim()) return;

  addJoeyMessage(message, "user");

  joeyInput.value = "";

  setTimeout(() => {
    const reply = getJoeyReply(message);
    addJoeyMessage(reply, "bot");
  }, 600);
}


/* Form submit */

if (joeyForm) {
  joeyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    sendJoeyMessage(joeyInput.value);
  });
}


/* Suggestion buttons */

const joeySuggestions = document.querySelectorAll(".joey-suggestions button");

joeySuggestions.forEach((button) => {
  button.addEventListener("click", () => {
    sendJoeyMessage(button.textContent);
  });
});
