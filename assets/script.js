document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.querySelector('.toggle-icon');
    const sidebar = document.querySelector('.sidebar');


    toggleIcon.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            sidebar.style.width = '0';
        } else {
            sidebar.style.width = '250px';
        }
    });


    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(function (item) {
                item.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});





