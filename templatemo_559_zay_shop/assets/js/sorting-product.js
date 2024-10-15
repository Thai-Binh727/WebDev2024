document.getElementById('sortOptions').addEventListener('change', function() {
    const sortBy = this.value;
    const container = document.getElementById('productContainer');
    const items = Array.from(container.getElementsByClassName('col-md-4'));

    let sortedItems = [];

    if (sortBy === 'price') {
        sortedItems = items.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.card-body p').innerText.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.card-body p').innerText.replace('$', ''));
            return priceA - priceB;
        });
    } else if (sortBy === 'name') {
        // Sort by name
        sortedItems = items.sort((a, b) => {
            const nameA = a.querySelector('.card-body a').innerText.toUpperCase();
            const nameB = b.querySelector('.card-body a').innerText.toUpperCase();
            return nameA.localeCompare(nameB);
        });
    } else if (sortBy === 'rating') {
        // Sort by rating
        sortedItems = items.sort((a, b) => { 
            const ratingA = parseFloat(a.querySelector('.rating-value').textContent.replace('Rating: ', ''));
            const ratingB = parseFloat(b.querySelector('.rating-value').textContent.replace('Rating: ', ''));
            return ratingB - ratingA; // Sort in descending order (highest to lowest)
        });
    }

    // Clear the container and re-append the sorted items
    container.innerHTML = '';
    sortedItems.forEach(item => container.appendChild(item));
});
