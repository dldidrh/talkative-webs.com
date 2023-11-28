document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("typing-title");
    const textToType = "Result of the RAFFLE SITE";

    function typeText() {
        let index = 0;

        function typeNextCharacter() {
            titleElement.textContent = textToType.slice(0, index);
            index++;

            if (index <= textToType.length) {
                setTimeout(typeNextCharacter, 100); // 100ms 간격으로 호출
            } else {
                setTimeout(typeText, 2000); // 2초 후에 다시 시작
            }
        }

        // 한 번의 타이핑 효과 시작
        typeNextCharacter();
    }

    // 페이지 로드 후 타이핑 효과 시작
    typeText();
});

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("typing-title2");
    const textToType = "your result are...";

    function typeText() {
        let index = 0;

        function typeNextCharacter() {
            titleElement.textContent = textToType.slice(0, index);
            index++;

            if (index <= textToType.length) {
                setTimeout(typeNextCharacter, 100); // 100ms 간격으로 호출
            } else {
                setTimeout(typeText, 2000); // 2초 후에 다시 시작
            }
        }

        // 한 번의 타이핑 효과 시작
        typeNextCharacter();
    }

    // 페이지 로드 후 타이핑 효과 시작
    typeText();
});

let isDragging = false;
let offsetX, offsetY;

const card = document.getElementById('draggableCard');

card.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
    card.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    card.style.cursor = 'grab';
});

const clickableImage = document.getElementById('clickableImage');

clickableImage.addEventListener('click', function() {

  clickableImage.style.display = 'none'; 
});

const clickableImage1 = document.getElementById('clickableImage1');

clickableImage1.addEventListener('click', function() {

  clickableImage1.style.display = 'none'; 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("banner");
        banner.style.display = "block"; // Show the banner after 1 second
    }, 1000); // 1000 milliseconds = 1 second
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("banner2");
        banner.style.display = "block"; 
    }, 500); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("update-2");
        banner.style.display = "block"; 
    }, 700); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("update-1");
        banner.style.display = "block"; 
    }, 800); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("update-0");
        banner.style.display = "block"; 
    }, 900); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("friday");
        banner.style.display = "block"; 
    }, 1000); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("draggableCard");
        banner.style.display = "block"; 
    }, 1200); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("password");
        banner.style.display = "block"; 
    }, 600); 
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("airplane");
        banner.style.display = "block"; 
    }, 1500); 
});