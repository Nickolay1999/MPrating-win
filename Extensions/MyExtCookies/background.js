// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getCookies") {
    // Получаем все куки
    var domain='.wildberries.ru';
    chrome.cookies.getAll({domain}, (cookies) => {
    // Отправляем куки обратно
    sendResponse({ cookies: cookies });
    });
    // Возвращаем true для использования sendResponse асинхронно
    return true;
    }
    });