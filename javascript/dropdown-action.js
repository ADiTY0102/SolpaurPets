document.addEventListener("DOMContentLoaded", () => {
    // Dropdown Toggle Functionality
    const dropdownButton = document.getElementById("dropdownActionButton");
    const dropdownMenu = document.getElementById("dropdownAction");

    // Toggle dropdown on button click
    dropdownButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up and triggering the document click listener
        dropdownMenu.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });
});