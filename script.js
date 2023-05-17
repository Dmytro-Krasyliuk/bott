window.Telegram.WebApp.MainButton.isVisible = true;
window.Telegram.WebApp.MainButton.setText("Відповісти");
window.Telegram.WebApp.MainButton.onclick(() => {
  window.Telegram.WebApp.showPopup({
    title: "hello",
    message: "Правильно! +10 балів!",
  });
});

console.log(window.Telegram.WebApp.initData);
