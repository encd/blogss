const menuIcon = document.getElementById("MenuberImg");
    const menu = document.getElementById("menu2");
    const closeIcon = document.getElementById("crossImg");
    const menuOverlay = document.getElementById("menuOverlay");
    const body = document.body;

    function openMenu() {
      menu.style.right = "0"; // Show menu
      menuOverlay.style.display = "block"; // Show overlay
      body.classList.add("no-scroll"); // Disable scrolling
    }

    function closeMenu() {
      menu.style.right = "-100%"; // Hide menu
      menuOverlay.style.display = "none"; // Hide overlay
      body.classList.remove("no-scroll"); // Enable scrolling
    }

    menuIcon.addEventListener("click", openMenu);
    closeIcon.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu); // Click outside to close

    // Prevent clicking inside menu from closing it
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });