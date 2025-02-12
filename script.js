document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".sidenav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetPage = link.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(function() {
                window.location.href = targetPage;
            }, 500); // Duration of the fade-out effect
        });
    });
});
