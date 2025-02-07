// document.getElementById('no-button').addEventListener('mouseover', function () {
//     const button = this;
//     const buttonRect = button.getBoundingClientRect();

//     const maxX = window.innerWidth - buttonRect.width;
//     const maxY = window.innerHeight - buttonRect.height;

//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     button.style.left = randomX + 'px';
//     button.style.top = randomY + 'px';
// });

document.getElementById('no-button').addEventListener('click', function () {
    const messages = [
        "Wapas soch lo... kahin baad mein mujhe dhoondhte na phiro! 😉💖",
        "Arey, dil se ek baar aur soch lo… kahin 'No' kehkar regret na kar lo! 😘",
        "Jaldi kya hai? Thoda time lekar, dil se jawab do na! 😏❤️",
        "Sach mein 'No'? Mere cute chehre ka bhi asar nahi pada? 🥺💕",
        "Itna jaldi mana kar diya? Kamal hai! Ek baar aankhon mein dekh ke socho... 😘✨",
        "Matlab sach mein 'No'? Toh phir mujhe manana padega! 😉🔥",
        "Thoda naatak hai ya sach mein mana kar diya? Batao na... 😏💞",
        "Arre, pehli baar dekh raha hoon koi itni jaldi 'No' keh raha hai mujhe! 😜💘",
        "Itna rude mat bano yaar, thoda pighal bhi jao! 🥰💓",
        "'No' keh diya, par dil keh raha hai 'Yes', hai na? 😍🔥"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('h1').textContent = randomMessage;
});