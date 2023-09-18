const btn = document.getElementById('btn');
const imageContainer = document.getElementById('image-container');
const image = document.getElementById('image');
const audio = document.getElementById('audio');

btn.addEventListener('click', () => {
    audio.play();
    imageContainer.style.display = 'block';
    setTimeout(() => {
        image.style.opacity = '1';
    }, 2000);
});
