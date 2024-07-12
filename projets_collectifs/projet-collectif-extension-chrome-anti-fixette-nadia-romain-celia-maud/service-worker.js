chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.local.get(null, (items) => {
    chrome.runtime.sendMessage({ type: "customBazar", content: items });
    console.log("contenu de mon storage", items);
  });

  chrome.runtime.onMessage.addListener(async (message) => {
    if (message.type === 'update-bazar') {
      const customLink = message.newUrl;
      const chromeStorage = {};
      
      let newBazarContent = await chrome.storage.local.get('newBazar');
      chrome.runtime.sendMessage({ type: "newBazarUpdate", newBazar: newBazarContent['newBazar'] });
        console.log("newBazarContent = ", newBazarContent)
        
        //ajoute les urls custom au tableau de sites randoms dans le local storage
        if(!newBazarContent){newBazarContent = {};} 
        if(!newBazarContent['newBazar']){newBazarContent['newBazar'] = []}
        newBazarContent['newBazar'].push(customLink)
        console.log(newBazarContent)

        chrome.storage.local.set(newBazarContent, () => {
            if (chrome.runtime.lastError) {
                console.error("Error in setting data: ", chrome.runtime.lastError);
            } else {
                console.log("bazar updated in service-worker.js", customLink);
              }  
        });
    }
});
  
})

