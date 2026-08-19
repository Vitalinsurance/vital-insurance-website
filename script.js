/* =========================
   ENQUIRY FORM
========================= */

const buttons = document.querySelectorAll(".choice");

buttons.forEach((b) => {
  b.addEventListener("click", () => {
    buttons.forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
  });
});

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("formMessage").textContent =
      "Thanks! Your enquiry has been recorded. We will connect with you shortly.";

    e.target.reset();
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


/* OPEN CHAT */

if (openJoey && joeyChat) {
  openJoey.addEventListener("click", () => {
    joeyChat.classList.add("open");
  });
}


/* CLOSE CHAT */

if (closeJoey && joeyChat) {
  closeJoey.addEventListener("click", () => {
    joeyChat.classList.remove("open");
  });
}


/* ADD MESSAGE */

function addMessage(text, sender) {

  const message = document.createElement("div");

  message.classList.add("joey-message", sender);

  message.textContent = text;

  joeyMessages.appendChild(message);

  joeyMessages.scrollTop = joeyMessages.scrollHeight;
}


/* JOEY RESPONSE ENGINE */

function getJoeyReply(message) {

  const text = message.toLowerCase();


  /* GREETING */

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hi! 👋 I'm Joey from Vital Insurance. I can help you understand motor, health, business and other insurance questions. What would you like to know?";
  }


  /* MOTOR INSURANCE */

  if (
    text.includes("motor") ||
    text.includes("car insurance") ||
    text.includes("bike insurance") ||
    text.includes("vehicle")
  ) {
    return "We can help you understand motor insurance, including third-party and comprehensive cover, renewals, policy questions and claims. Tell me what vehicle you have and what you need help with.";
  }


  /* CLAIM */

  if (
    text.includes("claim") ||
    text.includes("accident")
  ) {
    return "I'm sorry you're dealing with that. For claim assistance, share the type of insurance and a brief description of what happened. Vital Insurance can guide you on the next steps and required documents.";
  }


  /* BUSINESS */

  if (
    text.includes("business") ||
    text.includes("sme") ||
    text.includes("company")
  ) {
    return "We can help businesses understand insurance options such as fire, burglary, property, liability and other business covers. Tell me a little about your business and I'll point you in the right direction.";
  }


  /* HEALTH */

  if (
    text.includes("health") ||
    text.includes("medical")
  ) {
    return "Health insurance can help cover eligible medical and hospitalization expenses depending on the policy. If you tell me your age, family members to be covered and city, I can explain what kind of cover you may want to explore.";
  }


  /* PRICE */

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("premium") ||
    text.includes("quote")
  ) {
    return "Insurance premiums depend on the type of cover, vehicle or asset details, location, age and several other factors. If you share what you want to insure, I can tell you what details are usually needed for a quote.";
  }


  /* DEFAULT */

  return "That's a good question! I'm Joey, Vital Insurance's assistant. I can help explain insurance topics and guide you towards the right type of cover. Could you tell me a little more about what you're looking for?";
}


/* SEND MESSAGE */

if (joeyForm) {

  joeyForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const message = joeyInput.value.trim();

    if (!message) return;


    /* USER MESSAGE */

    addMessage(message, "user");

    joeyInput.value = "";


    /* TYPING MESSAGE */

    const typing = document.createElement("div");

    typing.classList.add("joey-message", "bot");

    typing.textContent = "Joey is typing...";

    joeyMessages.appendChild(typing);

    joeyMessages.scrollTop = joeyMessages.scrollHeight;


    /* JOEY REPLY */

    setTimeout(() => {

      typing.remove();

      const reply = getJoeyReply(message);

      addMessage(reply, "bot");

    }, 700);

  });

}


/* =========================
   SUGGESTION BUTTONS
========================= */

const suggestions = document.querySelectorAll(".joey-suggestions button");

suggestions.forEach((button) => {

  button.addEventListener("click", () => {

    const question = button.textContent;

    addMessage(question, "user");


    const typing = document.createElement("div");

    typing.classList.add("joey-message", "bot");

    typing.textContent = "Joey is typing...";

    joeyMessages.appendChild(typing);


    setTimeout(() => {

      typing.remove();

      const reply = getJoeyReply(question);

      addMessage(reply, "bot");

    }, 600);

  });

});
