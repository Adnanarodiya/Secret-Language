const normalText = document.getElementById("normalText");
const secretText = document.getElementById("secretText");

normalText.addEventListener("input", () => {
  const normalTextValue = normalText.value.toLowerCase();
  const secretTextValue = convertToSecretText(normalTextValue);
  secretText.value = secretTextValue;
});

secretText.addEventListener("input", () => {
  const secretTextValue = secretText.value.toLowerCase();
  const normalTextValue = convertToNormalText(secretTextValue);
  normalText.value = normalTextValue;
});

//to find secret text

function convertToSecretText(normalTextValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const secretAlphabet = "bcdefghijklmnopqrstuvwxyza";

  let secretTextValue = "";

  for (let i = 0; i < normalTextValue.length; i++) {
    const char = normalTextValue[i];
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      secretTextValue += secretAlphabet[index];
    } else {
      secretTextValue += char;
    }
  }

  return secretTextValue;
}

//to find normal text
function convertToNormalText(secretTextValue) {
  const secretAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = "zabcdefghijklmnopqrstuvwxy";

  let normalTextValue = "";

  for (let i = 0; i < secretTextValue.length; i++) {
    const char = secretTextValue[i];
    const index = secretAlphabet.indexOf(char);

    if (index !== -1) {
      normalTextValue += alphabet[index];
    } else {
      normalTextValue += char;
    }
  }

  return normalTextValue;
}
