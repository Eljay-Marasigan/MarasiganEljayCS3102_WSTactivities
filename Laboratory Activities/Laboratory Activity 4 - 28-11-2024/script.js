document.addEventListener("DOMContentLoaded", function () {
    const typingEffect = document.querySelector('.typing-effect');
    const text = "Hi, I'm Eljay!"; 
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent = text.slice(0, index + 1); 
            index++;
            setTimeout(type, 150); 
        }
    }

    typingEffect.textContent = "";
    type(); // Start typing
});
