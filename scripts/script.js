// This will post a message to the console declaring what pathway we are on either the index aka home or the about me page

document.addEventListener("DOMContentLoaded", function () {
    const href = window.location.pathname;

    // Debugging 2 show the current path
    console.log("Current path:", href);

});