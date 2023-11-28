const images = document.querySelectorAll('.image-grid img');

function checkAnswer(img) {
    var selectedCount = 0;

    img.classList.toggle("selected");
    images.forEach(function (img) {
        if (img.classList.contains('selected')) {
            selectedCount++;
        }
        console.log("selectedCount : "+selectedCount);
    });

    if (selectedCount === 3 ) {
        window.location.href = "index5.html";
    }
    console.log(selectedCount);
}
