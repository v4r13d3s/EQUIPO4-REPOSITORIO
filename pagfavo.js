document.addEventListener('DOMContentLoaded', function () {
    function loadFavorites() {
        const favoritesContainer = document.querySelector('#favorites-container');
        const noFavoritesMessage = document.querySelector('#no-favorites-message');
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Filtrar y eliminar productos con id nulo, undefined o 0
        favorites = favorites.filter(product => product.id && product.id !== 0);

        // Actualizar el localStorage sin productos inválidos
        localStorage.setItem('favorites', JSON.stringify(favorites));

        favoritesContainer.innerHTML = '';

        console.log('Favorites loaded:', favorites);

        if (favorites.length === 0) {
            noFavoritesMessage.style.display = 'block';
            console.log('No favorites, displaying message');
        } else {
            noFavoritesMessage.style.display = 'none';
            console.log('Favorites found, hiding message');

            favorites.forEach(product => {
                if (product.id && product.name && product.image && product.price) {
                    const productCard = `
                        <div class="col-md-3">
                            <div class="card p-3 product" data-id="${product.id}" data-name="${product.name}">
                                <div class="margin-p">
                                    <div class="favorite-indicator">
                                        <i class="fa fa-check"></i> Añadido a Favoritos
                                    </div>
                                    <div class="text-center">
                                        <img src="${product.image}" width="200">
                                    </div>
                                </div>
                                <div class="product-details">
                                    <span class="font-weight-bold d-block price">${product.price}</span>
                                    <div class="nombre">${product.name}</div>
                                    <div class="quantity-controls">
                                        <button class="btn decrement">-</button>
                                        <span class="quantity">1</span>
                                        <button class="btn increment">+</button>
                                    </div>
                                    <div class="buttons d-flex flex-row">
                                        <div class="cart"><i class="fa fa-shopping-cart"></i></div>
                                        <button class="btn cart-button btn-block">
                                            <span class="dot">1</span>Añadir al carrito
                                        </button>
                                    </div>
                                    <div class="weight"></div>
                                    <button class="btn mt-2 btn-block detalles-btn" onclick="showDetails(${product.id})">
                                        Detalles
                                    </button>
                                </div>
                                <button class="btn btn-danger btn-sm delete-favorite" data-id="${product.id}" style="position: absolute; top: 15px; right: 10px;">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    favoritesContainer.innerHTML += productCard;
                }
            });

            document.querySelectorAll('.delete-favorite').forEach(button => {
                button.addEventListener('click', function () {
                    const productId = this.getAttribute('data-id');
                    removeFromFavorites(productId);
                });
            });
        }
    }

    function removeFromFavorites(id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(product => product.id !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        loadFavorites();
    }

    loadFavorites();
});
