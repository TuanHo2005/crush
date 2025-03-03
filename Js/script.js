const messages = [
    "Bạn có chắc không?",
    "Chắc thiệt không????",
    "thiệt hả ",
    "đi đi mà :3333",
    "Năn nỉ á :333",
    "bạn mà hỏng đi là tui buồn bạn lắm á",
    "buồn thiệt á",
    "buồn thiệt thiệt á :(((",
    "được r , không hỏi nx ",
    "giỡn á , đi đi mà  ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yespage.html";
}