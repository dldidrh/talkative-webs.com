document.addEventListener("DOMContentLoaded", function() {
    var idListContainer = document.getElementById("idListContainer");
    var idListItems = Array.from(idListContainer.getElementsByTagName("p"));
    shuffleArrayAndRender(idListItems);
});

function shuffleArrayAndRender(array) {
    var shuffledIdList = shuffleArray(array);
    var idListContainer = document.getElementById("idListContainer");
    idListContainer.innerHTML = ""; // 기존의 리스트를 비움
    shuffledIdList.forEach(function(item) {
        idListContainer.appendChild(item);
    });
    setTimeout(function() {
        shuffleArrayAndRender(array);
    }, 10000); // 10초 후에 다시 섞음
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



