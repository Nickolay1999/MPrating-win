(async () => {
  let queryOptions = { active: true, currentWindow: true }
  let [tab] = await chrome.tabs.query(queryOptions)
  const btn = document.getElementById('btn');
  btn.addEventListener('click', async () => {
    const cookies = await chrome.cookies.getAll({ })

    const textarea = document.createElement('textarea');
    textarea.value = cookies.map(i => `${i.name}=${i.value}`).join(';');
    textarea.setSelectionRange(0, textarea.value.length);
    textarea.style.visibility = 'none';
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');
      
    // document.body.removeChild(textarea);

    btn.innerText = 'Cookies extracted and copied';
    btn.className = 'btn btn-success';
    setTimeout(() => {
      btn.innerText = 'Extract Now';
      btn.className = 'btn btn-info';
    }, 2000);
  });
})();
