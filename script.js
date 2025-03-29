document.getElementById('moverbotao').addEventListener('click', function() {
    const button = this;
    
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    const newLeft = Math.random() * maxWidth;
    const newTop = Math.random() * maxHeight;

    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
});

const emojiContainer = document.getElementById('emoji-container');
const emojis = ['❤️'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 3 + 5 + 's';
    emojiContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

setInterval(createEmoji, 300);

document.getElementById('sim').addEventListener('click', function() {
    window.open('https://image.freepik.com/vetores-gratis/eu-te-amo-gato-bonito-ilustracao-vetorial-para-criancas_69650-169.jpg', '_blank');
});