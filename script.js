tg.ready();
let tg = window.Telegram.WebApp;
tg.MainButton.setText("Відповісти");
tg.MainButton.isVisible = true;

let nameProfile = document.getElementsByClassName("profile-name")[0];
let avaProfile = document.getElementsByClassName("profile-ava")[0];
nameProfile.textContent = tg.initDataUnsafe?.user?.username;
avaProfile.src = tg.initDataUnsafe?.user?.photo_url;

// Telegram.WebApp.onEvent("mainButtonClicked", function () {
//   // tg.sendData("some string that we need to send");
//   //при клике на основную кнопку отправляем данные в строковом виде

//   // tg.showPopup({
//   //   title: "hello1",
//   //   message: "Правильно! +10 балів!",
//   // });

//   let nameProfile = document.getElementsByClassName("profile-name")[0];
//   nameProfile.textContent = tg.initDataUnsafe?.user?.username;

// });
// document.addEventListener("DOMContentLoaded", () => {
//   tg.ready();
// });

// console.log(tg.initData);

// let nameProfile = document.getElementsByClassName("profile-name")[0];
// nameProfile.textContent = tg.initDataUnsafe?.user?.username;
