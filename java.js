document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector(".text");
    const text = "Hi, Theodore here."; 

    function typingEffect(element, text, i = 0) {
        element.innerHTML += text[i]; 

        if (i === text.length - 1) {
            return; 
        }

        setTimeout(() => typingEffect(element, text, i + 1), 100); 
    }

    typingEffect(div, text); 
});
