const bazar = [
  "https://wikiroulette.com/",
  "https://thesecatsdonotexist.com/",
  "https://theuselessweb.com/",
  "https://www.kamoulox.lol/",
  "https://fr.wikihow.com/faire-une-pause-avec-les-r%C3%A9seaux-sociaux",
  "https://fr.wikihow.com/surmonter-la-cyberd%C3%A9pendance",
  "https://lasonotheque.org/jeux/quiz-sonore",
  "https://perdu.com/",
  "http://make-everything-ok.com/",
  "https://pointerpointer.com/",
];
const porn = "https://www.youtube.com/watch?v=4_1sKQP3Uo4";
const midi = [
  "https://www.youtube.com/watch?v=8-lCVMAZBhM",
  "https://www.sports.gouv.fr/les-bienfaits-du-sport-25",
];

const domainesUrls = {
  "www.youtube.com": "https://thesecatsdonotexist.com/",
  "www.amazon.com": "https://www.vinted.com/",
  "www.amazon.fr": "https://www.leboncoin.fr/",
  "www.google.com": "https://wikiroulette.co/",
  "www.facebook.com": "https://theuselessweb.com/",
  "www.instagram.com": "https://www.kamoulox.lol/",
  "twitter.com":
    "https://fr.wikihow.com/faire-une-pause-avec-les-r%C3%A9seaux-sociaux",
  "www.wikipedia.org":
    "https://fr.wikihow.com/surmonter-la-cyberd%C3%A9pendance",
  "www.yahoo.com": "https://lasonotheque.org/jeux/quiz-sonore",
  "web.whatsapp.com": "http://make-everything-ok.com/",
  "www.xvideos.com":
    "https://fr.wikihow.com/nettoyer-un-%C3%A9cran-d%E2%80%99ordinateur",
  "www.tiktok.com": "https://pointerpointer.com/",
  "fr.pornhub.com":
    "https://fr.wikihow.com/nettoyer-un-%C3%A9cran-d%E2%80%99ordinateur",
};

window.onload = (event) => {
  catchCustomUrls();
  addCustomUrls();
};

for (let i = 0; i < bazar.length; i++) {
  const linksArray = document.createElement("p");
  linksArray.innerHTML = bazar[i];
  document.body.appendChild(linksArray);
}

const hourDay = new Date().getHours();
//appelle la fonction popup toute les X millis avec comme paramètre bazar.length
const intervalID = setInterval(popUp, 5000000, bazar.length);

function popUp(a) {
  //affiche les liens randomisé par Math.random() puis transformé en entier par math.floor
  let domaine = window.location.hostname;
  if (hourDay >= 12 && hourDay <= 14) {
    window.open(midi[Math.floor(Math.random() * midi.length)]);
  }
  // Vérifier si le domaine actuel a une correspondance dans la liste
  else if (domaine in domainesUrls) {
    // Ouvrir l'URL correspondante pour le domaine actuel
    window.location.href = domainesUrls[domaine];
  } else {
    // Si aucun domaine correspondant n'est trouvé, ouvrir une URL générique
    window.open(bazar[Math.floor(Math.random() * a)]);
  }
}

function catchCustomUrls() {
  //recevoir du service worker
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "newBazarUpdate") {
      const newBazar = message.newBazar;
      console.log("newBazar attrapé dans le script.js", newBazar);
      for (let i = 0; i < newBazar.length; i++) {
        const linksArray = document.createElement("p");
        linksArray.innerHTML = newBazar[i];
        document.body.appendChild(linksArray);
      }
    }
  });

  //triche pour attraper les url custom
  document
    .getElementById("activeCustomUrl")
    .addEventListener("click", async () => {
      chrome.runtime.sendMessage({ type: "update-bazar", content: "plop" });
    });
}

function addCustomUrls() {
  // Ajouter un écouteur d'événements sur un clic lorsque l'utilisateur entre son URL
  // À ce moment-là, nous ajoutons l'URL à "bazar" et le sauvegardons dans le stockage local
  document
    .getElementById("addUrlButton")
    .addEventListener("click", async () => {
      const newUrl = document.getElementById("urlInput").value.trim();
      const newKey = document.getElementById("urlInput").value.trim();
      // Vérifier si l'URL n'est pas vide
      if (newUrl !== "") {
        // Ajouter l'URL à "bazar"
        bazar.push(newUrl);
        console.log("newUrl is pushed in bazar script.js");

        // ou si vous souhaitez envoyer uniquement la nouvelle URL ajoutée :
        chrome.runtime.sendMessage({ type: "update-bazar", newUrl: newUrl });

        const linksArray = document.createElement("p");
        linksArray.innerHTML = newUrl;
        document.body.appendChild(linksArray);
      }
    });
}
