const openJoey = document.getElementById("openJoey");
const closeJoey = document.getElementById("closeJoey");
const joeyChat = document.getElementById("joeyChat");

openJoey.onclick = function () {
  joeyChat.style.display = "flex";
  joeyChat.style.position = "fixed";
  joeyChat.style.right = "25px";
  joeyChat.style.bottom = "90px";
  joeyChat.style.width = "380px";
  joeyChat.style.height = "520px";
  joeyChat.style.zIndex = "999999";
  joeyChat.style.opacity = "1";
  joeyChat.style.visibility = "visible";
  joeyChat.style.transform = "translateY(0)";
};

closeJoey.onclick = function () {
  joeyChat.style.display = "none";
};
