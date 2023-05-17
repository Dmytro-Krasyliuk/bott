window.Telegram.WebApp.MainButton.isVisible = true;
window.Telegram.WebApp.MainButton.onclick(() => {
    window.Telegram.WebApp.showPopup({
      title: "hello",
      message: "super",
      buttons: [
        { type: "close", text: "CLOSE" },
        { type: "destructive", text: "deletos" },
      ],
    });

})

console.log(window.Telegram.WebApp.initData);

