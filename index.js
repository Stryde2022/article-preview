const shareBtn = document.getElementById("share-img");
const shareBtn1 = document.getElementById("share-img1");
const shareSlide = document.querySelector(".last-item")

shareBtn.addEventListener("click", function() {
    shareSlide.classList.toggle("last-move");
})

shareBtn1.addEventListener("click", function() {
    if ( !shareSlide.classList.contains("last-move") ) {
        shareSlide.classList.add("last-move");
    }
})