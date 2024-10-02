// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        console.log(`Product ${productId} added to cart`);
        // Here you would typically update the cart state and UI
    });
});

// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value;
    console.log(`Searching for: ${searchTerm}`);
    // Here you would typically perform the search and update the UI with results
});

// Example of a custom event you might want to track
function trackCustomEvent(eventName, eventParams) {
    console.log(`Custom event tracked: ${eventName}`, eventParams);
    // Here you would typically send this event to your analytics platform
}

// Usage example
document.addEventListener('DOMContentLoaded', (event) => {
    trackCustomEvent('page_view', { page_title: document.title });
});
