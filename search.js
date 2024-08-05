document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productModalBody = document.querySelector('#productModal .modal-body');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase().trim();

        if (query === "") {
            alert('Por favor, ingrese un término de búsqueda.');
            return;
        }

        const products = document.querySelectorAll('.product');

        // Limpiar el contenido del modal
        productModalBody.innerHTML = '';

        let found = false;

        products.forEach((product) => {
            const productName = product.getAttribute('data-name').toLowerCase();

            if (productName.includes(query)) {
                found = true;

                const col = document.createElement('div');
                col.className = 'col-md-5'; // Asegúrate de usar col-md-4 para 3 columnas por fila

                // Clonar el producto y agregarlo al modal
                const productClone = product.cloneNode(true);
                productClone.classList.add('card-sm');
                productClone.querySelector('.quantity-controls').remove();
                productClone.querySelector('.cart').remove();

                col.appendChild(productClone);
                productModalBody.appendChild(col);
            }
        });

        if (!found) {
            productModalBody.innerHTML = '<p>No se encontraron productos.</p>';
        }

        // Mostrar el modal
        $('#productModal').modal('show');
    });
});
