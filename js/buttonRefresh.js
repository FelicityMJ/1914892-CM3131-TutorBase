// Get references to all the ion buttons with the "refresh-button" class
const refreshButtons = document.querySelectorAll('.refresh-button');

// Define a function that takes the URL of the webpage as a parameter
function openAndRefreshPage(url) {
  // Replace the current document with the new webpage
  window.location.replace(url);

  // Reload the webpage after a specified time (in this case, 3 seconds)
  setTimeout(function() {
    location.reload();
  }, 10);
}

// Add event listeners to all the refresh buttons
refreshButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the URL of the webpage from the data-url attribute of the button
    const url = button.getAttribute('data-url');

    // Call the openAndRefreshPage function with the URL as a parameter
    openAndRefreshPage(url);
  });
});
