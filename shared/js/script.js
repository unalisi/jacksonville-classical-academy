//Navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch("/shared/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });
});

//Video Section
document.addEventListener("DOMContentLoaded", function() {
    var videoContainer = document.querySelector(".video-element");
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/94m8qFrNX_w?autoplay=0"; // YouTube embed URL
    iframe.allow = "accelerometer; autoplay; clipboard-write; frameborder='0'; encrypted-media; gyroscope; picture-in-picture";
     
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
});

//Footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('/shared/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading footer:', error));
});

//Hamburger Menu
function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
}