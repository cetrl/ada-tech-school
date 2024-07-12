var step1 = document.getElementById("1");
var step2 = document.getElementById("2");
var bravo = document.getElementById("bravo");
var attempt = 0;

function goToStep2() {
  let enterNumberJ1 = parseInt(document.getElementById("j1").value);
  if (enterNumberJ1 > 0 && enterNumberJ1 <= 50) {
    step1.classList.add("invisible");
    step2.classList.remove("invisible");
    step2.classList.add("visible");
  } else {
    alert("Please enter a valid number between 0 and 50.");
  }
}

function checkResult() {
  let numberJ1 = parseInt(document.getElementById('j1').value);
  let numberJ2 = parseInt(document.getElementById('j2').value);

  if (numberJ2 < numberJ1) {
    attempt = attempt + 1;
    document.getElementById('min').innerHTML = numberJ2 + " <";
  } else if (numberJ2 > numberJ1) {
    attempt = attempt + 1;
    document.getElementById('max').innerHTML = "< " + numberJ2;
  } else {
    step2.classList.remove("visible");
    step2.classList.add("invisible");
    bravo.classList.remove("invisible");
    bravo.classList.add("visible");
  }
 
  document.getElementById('output').innerHTML = attempt + " attempt";

}

// function gamePlay() {
//   let resultat = false; // Initialiser resultat à false
//   let numberJ1 = parseInt(document.getElementById("j1").value);

//   console.log(numberJ1 + " c'est le nombre de Joueur 1");

//   while (!resultat) {
//     function askNumberJ2() {
//       let enterNumberJ2 = parseInt(document.getElementById("j2").value);
//       return enterNumberJ2;
//     }

//     function didIWin() {
//       let givenNumber = askNumberJ2();
//       let result;
//       if (givenNumber < numberJ1) {
//         result = false;
//       } else if (givenNumber > numberJ1) {
//         result = false;
//       } else {
//         result = true;
//       }
//       return result;
//     }

//     resultat = didIWin();
//   }
//   document.getElementById("output").innerHTML = "Bravo !";
// }
