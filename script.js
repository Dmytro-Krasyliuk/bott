let tg = window.Telegram.WebApp;

tg.ready();

tg.MainButton.setText("Відповісти");

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData("some string that we need to send");
  //при клике на основную кнопку отправляем данные в строковом виде

  tg.showPopup({
    title: "hello1",
    message: "Правильно! +10 балів!",
  });
});

tg.MainButton.isVisible = true;

console.log(tg.initData);
document.addEventListener("DOMContentLoaded", () => {
  let nameProfile = document.getElementsByClassName("profile-name")[0];
  nameProfile.textContent = tg.initDataUnsafe?.user?.username;
});
