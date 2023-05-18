let tg = window.Telegram.WebApp;

tg.ready();
tg.MainButton.setText("Відповісти");
tg.MainButton.isVisible = true;

let nameProfile = document.getElementsByClassName("profile-name")[0];
// nameProfile.textContent = tg.initDataUnsafe?.user?.username;
nameProfile.textContent = JSON.stringify(tg.initDataUnsafe?.user);
let avaProfile = document.getElementsByClassName("profile-ava")[0];
avaProfile.src = tg.initDataUnsafe?.user?.photo_url;


