function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.classList.toggle("expanded");
    content.previousElementSibling.classList.toggle("containerprev");
}