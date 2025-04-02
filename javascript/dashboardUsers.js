document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Toggle
    const toggleButton = document.querySelector("[data-drawer-toggle='default-sidebar']");
    const sidebar = document.getElementById("default-sidebar");

    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", () => {
            const isHidden = sidebar.style.transform === "translateX(-100%)" || sidebar.style.transform === "";
            sidebar.style.transform = isHidden ? "translateX(0)" : "translateX(-100%)";
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener("click", (e) => {
            if (!sidebar.contains(e.target) && !toggleButton.contains(e.target) && window.innerWidth < 640) {
                sidebar.style.transform = "translateX(-100%)";
            }
        });
    } else {
        console.error("Sidebar or toggle button not found");
    }

    // Dropdown Toggle for Table Section
    const dropdownButton = document.getElementById("dropdownActionButton");
    const dropdownMenu = document.getElementById("dropdownAction");

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the document
            dropdownMenu.classList.toggle("hidden");
            console.log("Dropdown button clicked");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add("hidden");
                console.log("Clicked outside dropdown");
            }
        });
    } else {
        console.error("Dropdown button or menu not found");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdown");

    dropdownButton.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});