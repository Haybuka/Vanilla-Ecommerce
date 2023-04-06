let form = document.querySelector("form");

//submit event handler
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailInput = this[0];

  //conditional
  if (emailInput.value == "" || !emailInput.value.includes("@")) {
    console.log("empty input field");
    createNotification("Invalid email address", "notif-error");
    setTimeout(() => {
      document.querySelector(".notif").remove();
    }, 3000);
  } else {
    createNotification("Subscribed", "notif-success");
    setTimeout(() => {
      document.querySelector(".notif").remove();
    }, 3000);
  }
  emailInput.value = ''
});

//creating notification
let createNotification = (text, notifType) => {
  let body = document.querySelector("body");
  const notif = document.createElement("p");
  notif.setAttribute("class", `notif ${notifType}`);
  notif.innerHTML = text;
  body.append(notif);
};
