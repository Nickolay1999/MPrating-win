function insertCookies() {
chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
    if (response && response.cookies) {
        const textarea = document.createElement('textarea');
        textarea.id='cookies_textarea';
        const cookiesData = JSON.stringify(response.cookies, null, 2);
        textarea.innerHTML = cookiesData;
        document.body.appendChild(textarea);
    } else {
        console.error("Не удалось получить куки.");
    }
});
}
insertCookies();