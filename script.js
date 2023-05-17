window.Telegram.WebApp.MainButton.setText("Відповісти");
// window.Telegram.WebApp.MainButton.onclick(() => {
//   window.Telegram.WebApp.showPopup({
//     title: "hello2",
//     message: "Правильно! +10 балів!",
//   });
// });
window.Telegram.WebApp.showPopup({
  title: "hello1",
  message: "Правильно! +10 балів!",
});
window.Telegram.WebApp.MainButton.isVisible = true;

console.log(window.Telegram.WebApp.initData);
