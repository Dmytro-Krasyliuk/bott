// tg.ready();
let tg = window.Telegram.WebApp;
tg.MainButton.setText("Відповісти");
tg.MainButton.isVisible = true;
document.addEventListener("DOMContentLoaded", () => {
  let nameProfile = document.getElementsByClassName("profile-name")[0];
  let avaProfile = document.getElementsByClassName("profile-ava")[0];
  nameProfile.textContent = tg.initDataUnsafe?.user?.username;
  avaProfile.src = tg.initDataUnsafe?.user?.photo_url;
});
