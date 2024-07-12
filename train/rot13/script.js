// let encodeInput = getElementbyId("encode")
// let decodeInput = getElementbyId("decode")
// let encodeOutput = getElementbyId("encode-output")
// let decodeOutput = getElementbyId("decode-output")
// let encodeButton = getElementbyId("encode-button")
// let decodeButton = getElementbyId("decode-button")

const alphabet = [
    "a",    "b",    "c",    "d",    "e",    "f",    "g",    "h",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "p",    "q",    "r",    "s",    "t",    "u",    "v",    "w",    "x",    "y",    "z",];

const alphabetEncode = [
    "n",    "o",    "p",    "q",    "r",    "s",    "t",    "u",    "v",    "w",    "x",    "y",    "z",    "a",    "b",    "c",    "d",    "e",    "f",    "g",    "h",    "i",    "j",    "k",    "l",    "m",]

let encodeInput = "machainedecaractere";
let encodeOutput = "encode-output";

let decodeInput = "decode";
let decodeOutput = "decode-output";

function encode() {
  console.log("encode input = ", encodeInput);

  //input becomes an array
  (inputSplitted = encodeInput.split("")),
    console.log("input splitted = ", inputSplitted);

  let encodeArray = [];
  for (i = 0; i < inputSplitted.length; i++) {
    for (j = 0; j < alphabet.length; j++) {
      if (inputSplitted[i] === alphabet[j]) {
          encodeArray.push(alphabetEncode[j]);
      }
    }
  }
  console.log("encodeArray ", encodeArray);

  // encodeOutput.innerHTML = encodeInput.value
}
// encodeButton.addEventListener(onclick, encode())
encode();

function decode() {
  console.log("decode input = ", decodeInput);
  console.log("decode output = ", decodeOutput);
}
