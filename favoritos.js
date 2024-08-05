document.addEventListener('DOMContentLoaded', function () {
    function updateFavoriteButtons() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const productCards = document.querySelectorAll('.product');

        productCards.forEach(card => {
            const productId = card.getAttribute('data-id');
            const checkbox = card.querySelector('input[name="favorite-checkbox"]');
            const option1 = card.querySelector('.option-1');
            const option2 = card.querySelector('.option-2');
            const svgIcon = card.querySelector('svg');

            // Verificar si el producto está en favoritos
            const isFavorite = favorites.some(product => product.id === productId);

            if (checkbox) {
                checkbox.checked = isFavorite;
                option1.style.display = isFavorite ? 'none' : 'block';
                option2.style.display = isFavorite ? 'block' : 'none';
                
                // Cambiar el color del corazón
                svgIcon.style.fill = isFavorite ? 'hsl(0deg 100% 50%)' : 'none';
                svgIcon.style.stroke = isFavorite ? 'hsl(0deg 100% 50%)' : 'black';
            }
        });
    }

    function toggleFavorite(event) {
        const checkbox = event.target;
        const productId = checkbox.closest('.product').getAttribute('data-id');
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (checkbox.checked) {
            // Añadir a favoritos
            const product = {
                id: productId,
                name: checkbox.closest('.product').getAttribute('data-name'),
                image: checkbox.closest('.product').querySelector('img').src,
                price: checkbox.closest('.product').querySelector('.price').textContent
            };
            favorites.push(product);
        } else {
            // Eliminar de favoritos
            favorites = favorites.filter(product => product.id !== productId);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoriteButtons(); // Actualizar los estados de los botones
    }

    // Actualizar el estado de los productos al cargar la página
    updateFavoriteButtons();

    // Añadir event listener a los checkboxes
    document.querySelectorAll('input[name="favorite-checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', toggleFavorite);
    });
});
