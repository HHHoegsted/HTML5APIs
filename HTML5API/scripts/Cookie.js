window.onload = () => {
    if (document.cookie.length !== 0) {
        const getCookieArray = document.cookie.split('=');
        document.bgColor = getCookieArray[1];
        document.querySelector('#selectID').value = getCookieArray[1];
    }
};

let setCookie = () => {
    const choice = document.querySelector('#selectID').value;

    if (choice !== 'VælgFarve') {
        document.bgColor = choice;
        document.cookie = "color=" + choice + "; expires=31 December 2020 00:01:00 UTC";
    }
}