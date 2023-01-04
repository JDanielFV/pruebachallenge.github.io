var form = document.getElementById("forms");
const vowels = ["e", "i", "a", "o", "u"];
const vowelsKeys = ["enter", "imes", "ai", "ober", "ufat"]

//We reset the form when reload the page.
document.body.onload = function () {
    form.reset();
}

//Valid that message has 140 number of characters
function messageValidator(msg) {
    if (msg.length <= 250) {
        return true
    } else {
        return false
    }
}

//replace letters in a word, the letter to be replaced, the value to be replaced and the word where it will be replaced are sent.
function replaceLetters(bfLetter, atLetter, word) {
    let re = new RegExp(bfLetter, 'g');
    let newWord = word.replace(re, atLetter);
    return newWord;
}

//Find the vowels in the word and apply the key corresponding tho the vowel
function encryptWord(word) {
    let newWord = "";
    let letterMatch = "";

    for (letter of word) {

        for (let i = 0; i < vowels.length; i++) {

            const element = vowels[i];
            const elementKey = vowelsKeys[i];

            if (letter == element) {
                letterMatch = replaceLetters(element, elementKey, letter);
                break;
            } else {
                letterMatch = letter;
            }

        }

        newWord += letterMatch;
    }
    return newWord;

}

//Search for matches between keys and a word, then returns the decrypted word.
function decryptWord(word) {
    let newWord = word;

    for (let i = 0; i < vowelsKeys.length; i++) {

        const vKey = vowelsKeys[i];
        const vowel = vowels[i];
        const re = new RegExp(vKey, 'g');
        let letterMatch = newWord.match(re);

        if (letterMatch != null) {
            newWord = replaceLetters(vKey, vowel, newWord);
        }

    }

    return newWord;
}

//Gets the reference of the buttons with class .btn
const buttons = document.querySelectorAll(".btn");

//With this variable e control the actions of the application
var selectedOption;

//We ho through the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("El texto que tiene es: ",);
        selectedOption = button.innerText;
    })
});

//Functionality to copy text and send it to the clipboard
function copyText(element) {
    navigator.clipboard.writeText(element)
    .then(() => {
        alert('Texto copiado!');
    })
    .catch(() => {
        alert('No se puede copiar el texto!',err);
    })
}

//Trigger for button copy
function btnCopy() {
    let element = document.getElementById('msgResult').value;
    copyText(element);
}

//Sends the resulting message to the DOM
function messageResult(message) {
    let encryptMessage = "";
    encryptMessage = message.toString().replace(/,/g, " ");
    console.log(encryptMessage);
    document.getElementById('message-result').innerHTML = `<div class="message-result">
    <textarea id="msgResult" cols="1" rows="5" maxlength="140" readonly>${encryptMessage}</textarea>
    <button type="submit" onclick="btnCopy()" class="btn btn-copy">Copiar</button>
    </div>
    `;
}


//Application trigger
form.onsubmit = function (e) {
    e.preventDefault();
    let message = document.getElementById("input-message").value;
    const wordArray = message.toLowerCase().split(" ");

    if (messageValidator) {

        let resultArray = [];
        for (word of wordArray) {

            if (selectedOption == "Encriptar") {
                resultArray.push(encryptWord(word));
            }

            if (selectedOption == "Desencriptar") {
                resultArray.push(decryptWord(word));
            }
            messageResult(resultArray);
        }

    }
}