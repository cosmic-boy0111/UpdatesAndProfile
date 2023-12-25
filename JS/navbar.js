document.addEventListener('DOMContentLoaded', function () {
    // Fetch the navbar content
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navbar content after the opening body tag
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error fetching navbar:', error));
});