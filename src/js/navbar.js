function setActiveNavEntry(entry) {
    $(document).ready(function() {
        $("#nav_bar").load("navbar.html");
        $(document).ready(function() {
            $(entry).addClass("active"); // Highlight the current menu entry.
        });
    });
}
