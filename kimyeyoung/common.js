// common.js

function shuffleString(text) {
    var characters = text.split('');
    for (var i = characters.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;
    }
    return characters.join('');
}

function shuffleText(elementId) {
    var textElement = document.getElementById(elementId);
    var text = textElement.innerText;
    var shuffledText = shuffleString(text);
    textElement.innerText = shuffledText;
}
