function updateCounts() {
    const text = document.getElementById("textInput").value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const sentences = text.split(/(?<=[.!?])\s+/).filter(sentence => sentence.length > 0);
    const sentenceCount = sentences.length;
    document.getElementById("wordcount").textContent = wordCount;
    document.getElementById("sentenceCount").textContent = sentenceCount;
}

document.getElementById("textInput").addEventListener("input", updateCounts);

const keys = document.querySelectorAll('.key');

function removeActiveClass() {
    keys.forEach(key => key.classList.remove('active'));
}

document.addEventListener('keydown', event => {
    let key = event.key.toLowerCase();
    const specialKeys = {
        " ": "space",
        "backspace": "back",
        "capslock": "caps",
        "control": "ctrl",
        "`": "~"
    };
    key = specialKeys[key] || key;
    keys.forEach(keyElement => {
        if (keyElement.textContent.toLowerCase() === key) {
            keyElement.classList.add('active');
            setTimeout(removeActiveClass, 100);
        }
    });
});

keys.forEach(keyElement => {
    keyElement.addEventListener('click', () => {
        const keyValue = keyElement.textContent;
        if (keyElement.classList.contains('backspace')) {
            const textInput = document.getElementById("textInput");
            textInput.value = textInput.value.slice(0, -1);
        } else if (!keyElement.classList.contains('spacebar')) {
            const textInput = document.getElementById("textInput");
            textInput.value += keyValue;
        }
        updateCounts();
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 100);
    });
});
