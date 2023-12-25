// Function to append the footer to the specified container
function appendFooter(containerSelector) {
    // Fetch the content of the footer.html file
    fetch("../html/footer.html")
        .then(response => response.text())
        .then(html => {
            // Create a temporary container to parse the HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html;

            // Get the footer element from the parsed HTML
            const footer = tempContainer.querySelector('footer');

            // Append the footer to the specified container
            const container = document.querySelector(containerSelector);
            container.appendChild(footer);

            // Fetch and append the associated CSS
            const cssLink = tempContainer.querySelector('link[rel="stylesheet"]');
            if (cssLink) {
                const cssHref = cssLink.getAttribute('href');
                const styleElement = document.createElement('link');
                styleElement.rel = 'stylesheet';
                styleElement.href = cssHref;
                document.head.appendChild(styleElement);
            }
        })
        .catch(error => console.error("Error fetching footer.html:", error));
}
