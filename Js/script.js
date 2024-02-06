window.addEventListener('scroll', function() {
            let navbar = document.getElementById("menu-bar");
            let header = document.getElementById("header");
            let offset = header.offsetHeight; // Get the height of the header

            if (window.pageYOffset >= offset) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
