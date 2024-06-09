
(async () => {
    const src = chrome.runtime.getURL('src/contentScripts/index.js');
    const contentScript = await import(src);
    contentScript.initialize();
})();
