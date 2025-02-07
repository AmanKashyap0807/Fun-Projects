document.getElementById('no-button').addEventListener('mouseover', function () {
    const button = this;
    const buttonRect = button.getBoundingClientRect();

    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});