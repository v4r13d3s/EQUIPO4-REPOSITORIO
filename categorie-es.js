document.addEventListener("DOMContentLoaded", function(event) {
    const cartButtons = document.querySelectorAll('.cart-button');
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');

    cartButtons.forEach(button => {
        button.addEventListener('click', cartClick);
    });

    incrementButtons.forEach(button => {
        button.addEventListener('click', incrementQuantity);
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', decrementQuantity);
    });

    function cartClick() {
        let button = this;
        button.classList.add('clicked');
    }

    function incrementQuantity() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateCartButton(this.parentElement, quantity);
    }

    function decrementQuantity() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateCartButton(this.parentElement, quantity);
        }
    }

    function updateCartButton(parent, quantity) {
        const cartButton = parent.parentElement.querySelector('.cart-button');
        const dot = cartButton.querySelector('.dot');
        dot.textContent = quantity;
    }
});

function showDetails(productoId) {
    let detalleProducto = getProductDetails(productoId);
    document.getElementById('detalle-contenido').innerHTML = detalleProducto;
    document.getElementById('detalles-producto').style.display = 'block';
    initializeCarousel();
    document.getElementById("defaultOpen").click(); // Ensure the default tab is opened
}

function closeDetails() {
    document.getElementById('detalles-producto').style.display = 'none';
}
function getProductDetails(productoId) {
    switch (productoId) {
        case 1:
            return `
                <div class="titulo-card">
                    <h2>Lápiz con Goma Número 2 Hexagonal Caja con 12 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagEscritura/lapino2.webp"  alt="lapiz numero2">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lápiz con goma mirado No. 2 Hexagonal, Caja con 12 lápices de grafito,Lápiz grafito de #2Hexagonal, No tóxico.|</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Numero</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>12 Pzas</td>
                        </tr>
                        <tr>
                            <td>Forma de lapiz</td>
                            <td>Hexagonal</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Suave</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $49.68
                    </button>
                </div>
            `;
        case 2:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso Verde Blíster Magistral Didáctico</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagEscritura/marcador para pizarron.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Marcador Para Pizarrón Grueso Verde Blt Magistral Didactico </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Verde</td>
                        </tr>
                        <tr>
                            <td>Grosor de Marcador</td>
                            <td>Grueso</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Azor</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $25.92
                    </button>
                </div>
            `;
        case 3:
            return `
                <div class="titulo-card">
                    <h2>Lápiz con Goma Número 2 10 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/lapizx10.jpeg">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lápiz con Goma Número 2 10 Piezas</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Madera</td>
                        </tr>
                        <tr>
                            <td>Forma de Lápiz</td>
                            <td>Triangular</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>10 Pzas</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $43.74
                    </button>
                </div>
            `;
        case 4:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso con 4 Colores </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/magistral.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Marcador Para Pizarrón Grueso C/4 Colores Magistral Didactico </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Grosor del Marcador</td>
                            <td>Grueso</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $88.56
                    </button>
                </div>
            `;
        case 5:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso con 4 Colores </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/lapiceroPm.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lapiceros Paper Mate Clásico con cuerpo redondo para puntillas 0.7 mm y grip en forma de ondas para mayor control y confort al escribir. </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Grsosr del Lpicero</td>
                            <td>Punta Fina</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $32.40
                    </button>
                </div>
            `;
        case 6:
            return `
                <div class="titulo-card">
                    <h2>Bolígrafo Punto Mediano Stick Negro, Rojo y Azul</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/boligrafo negro azul rojo 3 pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bolígrafo punto mediano 1.0 mm icónico de BIC. Rinde más de 2 km de tinta. Tapa ventilada para evitar asfixia. Cuerpo hexagonal. Blister con tres bolígrafos en tinta azul, negro y roja.
</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Negro,Rojo y Azul</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>3 Pzas</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Mediano</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $17.01
                    </button>
                </div>
            `;
        //inicio de detalles del producto 
        case 7:
            return `
                <div class="titulo-card">

                
                    <h2> Bolígrafo Punto Fino Retractil Colores Fashion Blíster</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/boligrafo punto fino colores fashion.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Blister en 8 colores (cyan, azul, morado, rosa, rojo, naranja, amarillo y verde) en 8 bolígrafos con punta fina de 0.7 mm, tinta semigel, incluye una frase distinta para cada cuerpo de material softtouch, no tóxico, con tapa retráctil</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>8 Pzas</td>
                        </tr>
                          <tr>
                            <td>Color</td>
                            <td>Surtido</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Fino</td>
                        </tr>
                        <tr>
                            <td>Tipo de Bolígrafo</td>
                            <td>Retractil</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $70.65
                    </button>
                </div>
            `;
        
        //final de detalles
        
        case 8:
            return `
                <div class="titulo-card">

                
                    <h2>Bolígrafo Punto Fino Stick Colores Surtidos Bolsa con 3 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/boligrafo punta fina azor.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bolígrafo Punto Fino Stick Colores Surtidos Bol C/3 Pzas. Pin Point </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>3Pzas</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Fino</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $16.20
                    </button>
                </div>
            `;
        case 9:
            return `
                <div class="titulo-card">

                
                    <h2>
Lápiz Bicolor Hexagonal Jumbo Bolsa con 2 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/bicolor.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                  <p>Lápiz Bicolor Hexagonal Jumbo Bol C/2 Pzas. Smarty</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>2 Pzas</td>
                        </tr>
                        <tr>
                            <td>Forma de Lapiz</td>
                            <td>Hexagonal</td>
                        </tr>
                        <tr>
                            <td>Tamaño</td>
                            <td>Jumbo</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Smarty</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $15.21
                    </button>
                </div>
            `;
        case 10:
            return `
                <div class="titulo-card">

                
                    <h2>Marcador Para Pizarrón Grueso Negro Blíster Magistral Magistral</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/marcador para pizarron negro grueso.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Marcador Para Pizarrón Grueso Negro Blt Magistral</P>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Negro</td>
                        </tr>
                        <tr>
                            <td>Grosor de Marcador</td>
                            <td>Grueso</td>
                        </tr>
                         <tr>
                            <td>Marca</td>
                            <td>Azor</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $27.63
                    </button>
                </div>
            `;
        case 11:
            return `
                <div class="titulo-card">

                
                    <h2> Lápices de Colores Caja con 12 Piezas Largos Redondos Norma</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/colores norma.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Óptimo para primaria alta por su forma circular donde los niños ya saben utilizar los colores de manera natural y fluida, cuentan con la mina más resistente del mercado, y máxima pigmentación que los hace suaves al colorear. Esta presentación cuenta con 12 colores Cada pieza cuenta con su etiqueta blanca para colocar el nombre del alumno</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>12 Pzas</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtido</td>
                        </tr>
                         <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $81.72
                    </button>
                </div>
            `;
        case 12:
            return `
                <div class="titulo-card">

                
                    <h2> Bolígrafo Punto Mediano Stick Colores Surtidos Bolsa con 3 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/boligrafo punto mediano.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bolígrafo mediano surtidos básicos con 3 Kilométrico 100 Paper Mate Kilométrico es un bolígrafo que te permitirá escribir de forma continua por más tiempo, tinta suave permanente, punta media de 1,0mm, blister con 3 piezas, tapa al color de la tinta, colores surtidos: negro, rojo y azul.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>3 Pzas</td>
                        </tr>
                         <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Mediano</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $15.03
                    </button>
                </div>
            `;
        case 13:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso Azul Blíster Magistral Didáctico</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagEscritura/marcador para pizarron azul grueso.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Marcador Para Pizarrón Grueso Azul Blt Magistral Didactico</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Azul</td>
                        </tr>
                        <tr>
                            <td>Grosor del Marcador</td>
                            <td>Grueso</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Azor</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $25.92
                    </button>
                </div>
            `;
        case 14:
            return `
                <div class="titulo-card">
                    <h2>Bolígrafo Punto Mediano Stick Fashion Blíster con 10 Piezas Le Plume</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagEscritura/bolifgrafo punto mediano BACO.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bolígrafo Punto Mediano Stick Fashion Blíster con 10 Piezas Le Plume</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Mediano</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>BACO</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $32.94
                    </button>
                </div>
            `;
        case 15:
            return `
                <div class="titulo-card">
                    <h2> Bolígrafo Punto Fino Colores Pastel Surtidos Bolsa con 8 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
            <img src="/Web/Img/tagEscritura/boligrafo-pastel azor.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Innovadora Tinta de Baja viscosidad no toxica que brinda un flujo de tinta instantáneo, haciendo que la escritura sea suave, continua, con colores nítidos y brillantes</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Patel</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>8 Pzas.</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Fino</td>
                        </tr>
                         <tr>
                            <td>Marca</td>
                            <td>Azor</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $53.01
                    </button>
                </div>
            `;
        case 16:
            return `
                <div class="titulo-card">
                    <h2>  Lápiz Entrenador Redondo Blíster con 2 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/lapiz-dixon.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>  Lápiz Entrenador Redondo Blíster con 2 Piezas </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>2 Pzas</td>
                        </tr>
                        <tr>
                            <td>Forma de Lápiz</td>
                            <td>Redondo</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Dixon</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $88.56
                    </button>
                </div>
            `;
        case 17:
            return `
                <div class="titulo-card">
                    <h2>Bolígrafo Punto Fino Retráctil Negro Blíster Zebra</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/boligrafo zebra.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Boligrafo retráctil punto fino 0,7mm, punta de acero inoxidable bala de carburo de tungsteno, tinta base aceite,cuerpo de acero inoxidable, clip metalico integrado para su facil transportacion, grip antiderrapante integrado al cuerpo, recargable con repuesto</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>1 Pza</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Negro</td>
                        </tr>
                        <tr>
                            <td>Grosor del aLpicero</td>
                            <td>Punta Fina</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $73.10
                    </button>
                </div>
            `;
        case 18:
            return `
                <div class="titulo-card">
                    <h2> Marcador Para Pizarrón Grueso Rojo Blíster Bic</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/marcador bic grueso rojo.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Blister con un marcador rojo, Olor suave, La tinta se borra fácilmente, Ancho de línea: 3.0 y 5.9 mm.
</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Rojo</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>BIC</td>
                        </tr>
                        <tr>
                            <td>Grosor del Marcador</td>
                            <td>Grueso</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $25.11
                    </button>
                </div>
            `;
        //inicio de detalles del producto 
        case 19:
            return `
                <div class="titulo-card">

                
                    <h2>Gis Colores Surtidos Caja con 50 Piezas Baco</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/boligrafo punto fino colores fashion.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Gis Colores Caja C/50 Pzas. Baco </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>50 Pzas</td>
                        </tr>
                          <tr>
                            <td>Tipo de Gis</td>
                            <td>Colores</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Fino</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>BACO</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $47.70
                    </button>
                </div>
            `;
        
        //final de detalles
        
        case 20:
            return `
                <div class="titulo-card">

                
                    <h2> Lápiz con Goma Número 2 Hexagonal Verde Blíster con 8 Piezas Bic Evolution</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagEscritura/lapiz numero 2 bic 8pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>Hecho de resina, este lápiz HB #2 cuenta con una punta resistente que no se astilla, garantizando una escritura suave y duradera. Su diseño con cuerpo hexagonal proporciona un agarre cómodo y seguro.</P>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>3Pzas</td>
                        </tr>
                        <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Fino</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $16.20
                    </button>
                </div>
            `;
        case 21:
            return `
                <div class="titulo-card">

                
                    <h2>Lápiz con Goma Número 2 Triangular Blíster con 6 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/lapiz maped 6pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                  <p>Lápiz con Goma Número 2 Triangular Blíster con 6 Piezas Black Peps Maped</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>6 Pzas</td>
                        </tr>
                        <tr>
                            <td>Forma de Lapiz</td>
                            <td>Triangular</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Maped</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $28.53
                    </button>
                </div>
            `;
        case 22:
            return `
                <div class="titulo-card">

                
                    <h2>

Bolígrafo Punto Mediano Stick Fashion Blíster con 10 Piezas Kilométrico</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/boligrafo punto mediano 10 pzas.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bolígrafo mediano colores surtidos Kilométrico 100 Paper Mate Kilométrico es un bolígrafo que te permitirá escribir de forma continua por más tiempo, tinta suave permanente, punta media de 1,0mm, tapa de color de la tinta, blister con 10 pzas.
</P>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>10 Pzas</td>
                        </tr>
                        <tr>
                            <td>Tipo de Bolígrafo</td>
                            <td>Stick</td>
                        </tr>
                         <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Mediano</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $48.96
                    </button>
                </div>
            `;
        case 23:
            return `
                <div class="titulo-card">

                
                    <h2>Lápiz con Goma No. 2 Hexagonal Rosa Blíster con 4 Pzas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/lapiz rosa.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lápiz con Goma No. 2 Hexagonal Rosa Blt C/4 Pzas. Bacopink </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                        <tr>
                            <td>Forma de Lapiz</td>
                            <td>Hexagonal</td>
                        </tr>
                         <tr>
                            <td>Presentación</td>
                            <td>Rosa</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Baco</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $15.39
                    </button>
                </div>
            `;
        case 24:
            return `
                <div class="titulo-card">

                
                    <h2>
Bolígrafo Punto Fino Retráctil Surtido Blíster con 8 Piezas Kilométrico</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagEscritura/Boligrafo PM 8pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bolígrafo Punto Fino Retráctil Surtido Blíster con 8 Piezas Kilométrico </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>8 Pzas</td>
                        </tr>
                         <tr>
                            <td>Tipo de Punta</td>
                            <td>Punto Fino</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $15.03
                    </button>
                </div>
            `;
        
        case 25:
            return `
                <div class="titulo-card">
                    <h2> Cuaderno Espiral de 100 Hojas Profesional de Raya Escolar Plus Scribe</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagCuadernos/cuaderno scribe 100 hojas raya.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>La línea Scribe Escolar Plus, es un básico para tus apuntes. Este cuaderno profesional de 100 hojas en raya cuenta con cartón más resistente, etiqueta de datos y hojas de 50 g/m² con margen escuadra rojo.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Scribe</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $26.91
                    </button>
                </div>
            `;
        case 26:
            return `
                <div class="titulo-card">
                    <h2> Cuaderno Espiral de 100 Hojas Francés Raya Rayter</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagCuadernos/cuaderni espiral frances 100 hojas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cuaderno Espiral de 100 hojas Frances Raya Rayter </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                         <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Rayter</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $18.09
                    </button>
                </div>
            `;
        case 27:
            return `
                <div class="titulo-card">
                    <h2> Cuaderno Cosido de 100 Hojas Profesional de Cuadro Grande</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/cuaderno cosido de 100 hojas srcibe.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Da color a tus materias con la línea Scribe Clásico. Este cuaderno profesional de 100 hojas de 56 g/m² en cuadro grande y margen rojo en escuadra, está diseñado para acompañarte durante el ciclo escolar por sus portadas resistentes. En los interiores encontrarás recuadros para personalizarlo con tu horario escolar, fechas importantes, notas y contactos.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                         <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Grande</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Scribe</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $58.86
                    </button>
                </div>
            `;
        case 28:
            return `
                <div class="titulo-card">
                    <h2> Cuaderno Espiral de 100 Hojas Francés Cuadro Chico Ferrari</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/cuaderno espiral 10 hojas frnaces cuadro chico.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Un cuaderno Ferrari tiene una argolla doble tamaño francés de 100 hojas . El interior tiene las guardas impresas de gran utilidad para los estudiantes que buscan algo que refleje la velocidad y elegnacia que su cuaderno les pueda ofrecer.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Chico</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $52.74
                    </button>
                </div>
            `;
        case 29:
            return `
                <div class="titulo-card">
                    <h2>Cuaderno Espiral de 100 Hojas Profesional de Cuadro Grande Escolar Plus Scribe</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/cuaderno 100 hojas cuadro grande Scribe.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>La línea Scribe Escolar Plus, es un básico para tus apuntes. Este cuaderno profesional de 100 hojas en cuadro grande cuenta con cartón más resistente, etiqueta de datos y hojas de 50 g/m² con margen escuadra rojo</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Grande</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Scribe</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $26.91
                    </button>
                </div>
            `;
        case 30:
            return `
                <div class="titulo-card">
                    <h2> Cuaderno Cosido de 100 Hojas Profesional de Raya Smarty</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/cuaderno cosido 100 hojas Raya Smarty.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cuaderno Cosido de 100 Hojas Profesional de Raya Swing
</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Smarty</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $48.42
                    </button>
                </div>
            `;
        //inicio de detalles del producto 
        case 31:
            return `
                <div class="titulo-card">

                
                    <h2>Cuaderno Cosido de 100 Hojas Italiano de Cuadro Grande Norma 360</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/cuadeerno cosido de 100 hojas italiano de cuadro grande.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Norma Color es un cuaderno desarrollado para primaria, tiene un cosido resistente y reforzado que permite que no se desprendan las hojas y una portada gruesa plastificada que ayuda a conservarlo mejor durante el ciclo escolar, tiene los bordes de color para que el niño pueda identificar su materia más fácil, las hojas tienen margen rojo completo y el rayado en el color azul</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Grande</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $41.13
                    </button>
                </div>
            `;
        
        //final de detalles
        
        case 32:
            return `
                <div class="titulo-card">
                    <h2>
                     Cuaderno Espiral de 100 Hojas Profesional de Cuadro Chico Escolar Plus Scribe
                    </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/Cuaderno Espiral 100 hojas profesional Cuadro Chico Escribe.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>La línea Scribe Escolar Plus, es un básico para tus apuntes. Este cuaderno profesional de 100 hojas en cuadro chico cuenta con cartón más resistente, etiqueta de datos y hojas de 50 g/m² con margen escuadra rojo.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Chico</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Scribe</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $26.91
                    </button>
                </div>
            `;
        case 33:
            return `
                <div class="titulo-card">

                
                    <h2> Libreta de Apuntes de 1/8 Espiral de 100 Hojas Estrella</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/libreta de apuntes 18 espiral 100 hojas estrella.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                  <p>Libreta de Apuntes de 1/8 Espiral C/100 Hojas Estrella</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Estrella</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $14.04
                    </button>
                </div>
            `;
        case 34:
            return `
                <div class="titulo-card">

                
                    <h2>Cuaderno Espiral de 100 Hojas Profesional de Cuadro Grande</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/cuaderno espiral 100 hojas profesioonal nomra cuadro grande.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Norma Basic es un cuaderno de argolla doble tamaño profesional de 100 hojas , cuadro grande. El interior tiene las guardas impresas de gran utilidad para los estudiantes de secundaria. Las portadas son atractivas por sus increíbles diseños en tendencia.</P>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Grande</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $35.55
                    </button>
                </div>
            `;
        case 35:
            return `
                <div class="titulo-card">

                
                    <h2>
Block Tamaño Esquela con 50 Hojas Cuadro Chico Rayter</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/block tamaño esquela con 50 hojas cuadro chico.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Block Esquela 50 Hojas </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                      <tr>
                            <td>Cantidad de Hojas</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Chico</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Rayter</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $13.59
                    </button>
                </div>
            `;
        case 36:
            return `
                <div class="titulo-card">

                
                    <h2>Cuaderno Espiral de 100 Hojas Profesional de Raya Norma Basic</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/cuaderno espiral hoja profesional norma basic.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Norma Basic es un cuaderno de argolla doble tamaño profesional de 100 hojas raya. El interior tiene las guardas impresas de gran utilidad para los estudiantes de secundaria. Las portadas son atractivas por sus increíbles diseños en tendencia.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $35.55
                    </button>
                </div>
            `;
        case 37:
            return `
                <div class="titulo-card">
                    <h2>Cuaderno Espiral de 100 Hojas Profesional de Cuadro Chico Mix Swing Doo</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagCuadernos/Cuaderno Espiral de 100 Hojas Profesional de Cuadro Chico Mix Swing Doo.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cuaderno Espiral de 100 Hojas Profesional de Cuadro Chico Mix Swing Doo</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                             <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Chico</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>SMARTY</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $31.41
                    </button>
                </div>
            `;
        case 38:
            return `
                <div class="titulo-card">
                    <h2 Libreta de Apuntes Pocket de 80 Hojas de Raya Dogs</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/tagCuadernos/Libreta de Apuntes Pocket de 80 Hojas de Raya Dogs.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Dogs es un cuaderno de argolla doble tamaño minianotaciones de 80 hojas disponible en raya de gran utilidad para las estudiantes de primaria. Las portadas son atractivas por la gran variedad de diseños.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       <tr>
                            <td>Cantidad de Hojas</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $24.93
                    </button>
                </div>
            `;
        case 39:
            return `
                <div class="titulo-card">
                    <h2>Cuaderno Espiral de 100 Hojas Francés Cuadro Chico Scribe</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
            <img src="/Web/Img/tagCuadernos/Cuaderno Espiral de 100 Hojas Francés Cuadro Chico Scribe.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Da color a tus materias con la línea Scribe Clásico. Este cuaderno francés de 100 hojas de 56 g/m² en cuadro chico y margen rojo en escuadra, está diseñado para acompañarte durante el ciclo escolar por su espiral doble y portadas resistentes. En los interiores encontrarás recuadros para personalizarlo con tu horario escolar, fechas importantes, notas y contactos.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                      <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Cuadro Chico</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Scribe</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $45.36
                    </button>
                </div>
            `;
        case 40:
            return `
                <div class="titulo-card">
                    <h2>Cuaderno Espiral con 100 Hojas Profesional Raya Intensamente 2 Norma</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/Cuaderno Espiral con 100 Hojas Profesional Raya Intensamente 2 Norma.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cuaderno Americano con nueva presentación,inspirados en la nueva película de Disney "Intensamente 2"</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $63.81
                    </button>
                </div>
            `;
        case 41:
            return `
                <div class="titulo-card">
                    <h2>Libreta de Apuntes Bolsillo de Espiral con Post de 40 Hojas Estrella</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/Libreta de Apuntes Bolsillo de Espiral con Post de 40 Hojas Estrella.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Libreta de Apuntes Bolsillo de Espiral C/Post C/40 Hojas Estrella </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                         <tr>
                            <td>Cantidad de Hojas</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Estrella</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $5.31
                    </button>
                </div>
            `;
        case 42:
            return `
                <div class="titulo-card">
                    <h2>Cuaderno Espiral de 100 Hojas Profesional de Raya Ferrari</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/Cuaderno Espiral de 100 Hojas Profesional de Raya Ferrari.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Ferrari es un cuaderno de argolla doble tamaño profesional de 100 hojas. El interior tiene las guardas impresas y bolsillo de gran utilidad para los estudiantes. Las portadas son atractivas por su variedad de diseños.
</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                          <tr>
                            <td>Cantidad de Hojas</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Raya</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Norma</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $81.99
                    </button>
                </div>
            `;
        //inicio de detalles del producto 
        case 43:
            return `
                <div class="titulo-card">

                
                    <h2>Cartulina Iris de 50 x 65 cm Azul Claro</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/Cartulina Iris de 50 x 65 cm Azul Claro.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>CARTULINA IRIS 50X65 CM AZUL CIELO </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Azcul Claro</td>
                        </tr>
                          <tr>
                            <td>Medida</td>
                            <td>50 x 65 cm</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        
        //final de detalles
        
        case 44:
            return `
                <div class="titulo-card">

                
                    <h2>

Cartulina Cascaron Blanco de 1/4 (35 x 56 cm)</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/tagCuadernos/Cartulina Cascaron Blanco de 1.4 (35 x 56 cm).webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>Cartulina Cascaron Blanco de 1/4 (35 x 56 cm)</P>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Blanco</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>35 x 56 cm</td>
                        </tr>
                      
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $11.70
                    </button>
                </div>
            `;
        case 45:
            return `
                <div class="titulo-card">

                
                    <h2> Cartulina Bristol Express de 48.8 kg 50 x 65 cm Blanco</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Cartulina Bristol Express de 48.8 kg 50 x 65 cm Blanco.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                  <p>Cartulina Bristol Express de 48.8 kg 50 x 65 cm Blanco </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Blanco</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>48.8 kg 50 x 65 cm</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $2.42
                    </button>
                </div>
            `;
        case 46:
            return `
                <div class="titulo-card">

                
                    <h2>
Cartulina Iris de 50 x 65 cm Negro</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/cartulina negra.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>
Cartulina Iris de 50 x 65 cm Negro
</P>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Negro</td>
                        </tr>
                        <tr>
                            <td>Medidas</td>
                            <td>50 x 65 cm</td>
                        </tr>
                       
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        case 47:
            return `
                <div class="titulo-card">

                
                    <h2>Cartulina Fluorescente de 66 x 48 cm Verde</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Cartulina Fluorescente de 66 x 48 cm Verde.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Fluorescente de 66 x 48 cm Verde</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Verde</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>66 x 48 cm</td>
                        </tr>
                      
                       
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.38
                    </button>
                </div>
            `;
        case 48:
            return `
                <div class="titulo-card">

                
                    <h2>
Cartulina Iris de 50 x 65 cm Amarillo</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Cartulina Iris de 50 x 65 cm Amarillo.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Iris de 50 x 65 cm Amarillo</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Amarillo</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>50 x 65 cm</td>
                        </tr>
                       
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        
        case 49:
            return `
                <div class="titulo-card">

                
                    <h2> Cartulina Iris de 50 x 65 cm Rojo</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Cartulina Iris de 50 x 65 cm Rojo.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Iris de 50 x 65 cm Rojo</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Rojo</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>50 x 65 cm</td>
                        </tr>
                         
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        
        case 50:
            return `
                <div class="titulo-card">

                
                    <h2> Cartulina Iris de 50 x 65 cm Lila</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Cartulina Iris de 50 x 65 cm Lila.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Iris de 50 x 65 cm Amarillo</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Lila</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>50 x 65 cm</td>
                        </tr>
                         
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        case 51:
            return `
                <div class="titulo-card">

                
                    <h2>
  Cartulina Iris de 50 x 65 cm Azul Rey</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Cartulina Iris de 50 x 65 cm Azul Rey.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Iris de 50 x 65 cm Azul Rey</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Azul Rey</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>50 x 65 cm</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        case 52:
            return `
                <div class="titulo-card">

                
                    <h2>  Cartulina Iris de 50 x 65 cm Azul Marino</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                
                        <img src="/Web/Img/tagCuadernos/Cartulina Iris de 50 x 65 cm Azul Marino.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Iris de 50 x 65 cm Azul Marino</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Azul Marino</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>50 x 65 cm</td>
                        </tr>
                         
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $7.29
                    </button>
                </div>
            `;
        case 53:
            return `
                <div class="titulo-card">

                
                    <h2> Notas Adhesivas de 5 x 5 cm Colores Pastel con 400 Hojas Memo Tip</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagCuadernos/Notas Adhesivas de 5 x 5 cm Colores Pastel con 400 Hojas Memo Tip.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Notas Adhesivas de 5 x 5 cm Colores Pastel C/400 hojas Memo Tip</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Pastel</td>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>5 x 5 cm</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $21.24
                    </button>
                </div>
            `;
        case 54:
            return `
                <div class="titulo-card">

                
                    <h2>Pincel Escolar de Plástico Tipo Brocha con 3 Piezas Smarty</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pincel Escolar de Plástico Tipo Brocha con 3 Piezas Smarty.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Pincel Escolar de Plástico Tipo Brocha con 3 Piezas Smarty</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                        <tr>
                            <td>Tipo de Brocha/Pincel</td>
                            <td>Escolar</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $30.15
                    </button>
                </div>
            `;
        
        case 55:
            return `
                <div class="titulo-card">

                
                    <h2> Pincel Escolar de Plástico Blíster con 5 Piezas Smarty</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pincel Escolar de Plástico Blíster con 5 Piezas Smarty.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pincel Escolar de Plástico Blt C/ 5 Pzas. Smarty</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>5 Pzas</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                         <tr>
                            <td>Tipo de Brocha/Pincel</td>
                            <td>Escolar</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $28.80
                    </button>
                </div>
            `;
        case 56:
            return `
                <div class="titulo-card">

                
                    <h2>
Brocha de Plástico Escolar de 1" Blíster Smarty
</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Brocha de Plástico Escolar de 1 Blíster Smarty.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Brocha de Plástico Escolar de 1" Blt Smarty</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>1 Pza</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                         <tr>
                            <td>Tipo de Brocha/Pincel</td>
                            <td>Escolar</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $23.85
                    </button>
                </div>
            `;
        case 57:
            return `
                <div class="titulo-card">

                
                    <h2>Godete Escolar Redondo con 10 Huecos</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Godete Escolar Redondo con 10 Huecos.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Godete Escolar Redondo con 10 Huecos </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Huecos</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $22.32
                    </button>
                </div>
            `;
        
        
        case 58:
            return `
                <div class="titulo-card">

                
                    <h2>Pincel Artístico de Plástico con Grip Blíster con 4 Pzas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pincel Artístico de Plástico con Grip Blíster con 4 Pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>PINCELES DE PLASTICO CON GRIP PARA UN MEJOR MANEJO, MANGO COLORES PASTEL, BLISTER CON 4 PIEZAS.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $87.30
                    </button>
                </div>
            `;
        
        case 59:
            return `
                <div class="titulo-card">

                
                    <h2>Lienzo para Pintura Chico de 20 x 25 cm Cartón con Tela</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Lienzo para Pintura Chico de 20 x 25 cm Cartón con Tela.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lienzo para Pintura Chico de 20 x 25 cm Cartón con Tela Económico Rodart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>20 x 25 cm</td>
                        </tr>
                       
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $27.81
                    </button>
                </div>
            `;
        case 60:
            return `
                <div class="titulo-card">
                    <h2>Pintura para Carteles Frasco C/25 ml Amarillo Limón 50 Vinci</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura para Carteles Frasco con 25 ml Amarillo Limón 50 Vinci.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pintura para Carteles Frasco C/25 ml Amarillo Limón 50 Vinci </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Contenido</td>
                            <td>25 ml</td>
                        </tr>
                         <tr>
                            <td>Color</td>
                            <td>Amarillo Limón</td>
                        </tr>
                         <tr>
                            <td>Tipo de Pintura</td>
                            <td>Escolar</td>
                        </tr>
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $10.26
                    </button>
                </div>
            `;
        case 61:
            return `
                <div class="titulo-card">
                    <h2> Pintura para Carteles Frasco con 25 ml Colores Surtidos con 10 Crayola</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura para Carteles Frasco con 25 ml Colores Surtidos con 10 Crayola.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pintura para Carteles Frasco C/25 ml Colores Surtidos C/10 Crayola</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                         <tr>
                            <td>Contenido</td>
                            <td>25 ml</td>
                        </tr>
                         <tr>
                            <td>Cantidad</td>
                            <td>10 Pzas.</td>
                        </tr>
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $121.50
                    </button>
                </div>
            `;
        
        case 62:
            return `
                <div class="titulo-card">
                    <h2>Foamy Tamaño Carta Colores Surtidos Paquete con 24 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy Tamaño Carta Colores Surtidos Paquete con 24 Piezas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Foamy Tamaño Carta Colores Surtidos Paquete con 24 Piezas</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>24 Pzas.</td>
                        </tr>
                         <tr>
                            <td>Tamaño de Fomy</td>
                            <td>Carta</td>
                        </tr>
                         <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $47.07
                    </button>
                </div>
            `;
        case 63:
            return `
                <div class="titulo-card">
                    <h2Foamy con Diamantina de 55 x 43 cm Rosa</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy con Diamantina de 55 x 43 cm Rosa.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Foamy con Diamantina de 55 x 43 cm Rosa</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>55 x 43 cm</td>
                        </tr>
                         <tr>
                            <td>Tipo de Foamy</td>
                            <td>Diamantina</td>
                        </tr>
                         <tr>
                            <td>Color</td>
                            <td>Rosa</td>
                        </tr>
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.97
                    </button>
                </div>
            `;
        
        
        case 64:
            return `
                <div class="titulo-card">
                    <h2>Foamy Tamaño Carta Naranja Paquete con 5 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy Tamaño Carta Naranja Paquete con 5 Piezas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Foamy Tamaño Carta Naranja Paquete con 5 Piezas</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>5 Pzas</td>
                        </tr>
                         <tr>
                            <td>Tamaño de Foamy</td>
                            <td>Carta</td>
                        </tr>
                         <tr>
                            <td>Color</td>
                            <td>Naranja</td>
                        </tr>
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $11.79
                    </button>
                </div>
            `;
        case 65:
            return `
                <div class="titulo-card">
                    <h2> Silicón en Barra Delgada 10 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Silicón en Barra Delgada 10 Piezas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>SILICON EN BARRA DELGADA C/10</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>10 Pzas</td>
                        </tr>
                         <tr>
                            <td>Tipo de Silicón</td>
                            <td>Barra</td>
                        </tr>
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $36.27
                    </button>
                </div>
            `;
        case 66:
            return `
                <div class="titulo-card">
                    <h2> Abatelengua de Madera 1/2 kg </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Abatelengua de Madera 1,2 kg.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Abatelengua de Madera 1/2 kg </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>23 Pzas</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $51.66
                    </button>
                </div>
            `;
    
        case 67:
            return `
                <div class="titulo-card">
                    <h2>Foamy con Diamantina de 55 x 43 cm Fucsia</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy con Diamantina de 55 x 43 cm Fucsia.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>FOAMY 55X43C C/DIAMAN FIUSHA </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tipo de Foamy</td>
                            <td>Diamantina</td>
                        </tr>
                        <tr>
                            <td>Medidas de Foamy</td>
                            <td>55 x 43 cm</td>
                        </tr>
                        
                         <tr>
                            <td>Color</td>
                            <td>Fucsia</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.97
                    </button>
                </div>
            `;
        case 68:
            return `
                <div class="titulo-card">
                    <h2>Pistola para Silicón Chica Cool Colors Blíster Smarty</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pistola para Silicón Chica Cool Colors Blíster Smarty.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Pistola para Silicón Chica Cool Colors Blíster Smarty </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Tamaño</td>
                            <td>Chica</td>
                        </tr>
                        
                         <tr>
                            <td>Color</td>
                            <td>Cool Colors</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $64.35
                    </button>
                </div>
            `;
        case 69:
            return `
                <div class="titulo-card">
                    <h2>Ojitos Móviles Color Blanco y Negro Bolsa con 66 Piezas Smarty</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Ojitos Móviles Color Blanco y Negro Bolsa con 66 Piezas Smarty.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Ojitos Moviles Color Blanco y Negro Bolsa con 66 pzas Smarty  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Cantidad</td>
                            <td>66 Pzas</td>
                        </tr>
                        
                         <tr>
                            <td>Tipo</td>
                            <td>Ojitos Móviles</td>
                        </tr>
                        
                          <tr>
                            <td>Color</td>
                            <td>Blanco Y Negro</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $16.65
                    </button>
                </div>
            `;
        
        case 70:
            return `
                <div class="titulo-card">
                    <h2>Pintura para Carteles Frasco con 25 ml Rojo 54 Vinci</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura para Carteles Frasco con 25 ml Rojo 54 Vinci.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Pintura para Carteles Frasco C/25 ml Rojo 54 Vinci</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Rojo</td>
                        </tr>
                        
                         <tr>
                            <td>Contenido</td>
                            <td>25 ml</td>
                        </tr>
                        
                          <tr>
                            <td>Tipo de Pintura</td>
                            <td>Escolar</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $10.26
                    </button>
                </div>
            `;
       case 71:
            return `
                <div class="titulo-card">
                    <h2> Pintura para Carteles Frasco con 25 ml Azul Ultramarino 66 Vinci</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura para Carteles Frasco con 25 ml Azul Ultramarino 66 Vinci.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pintura para Carteles Frasco C/25 ml Azul Ultramarino 66 Vinci</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Azul Ultramarino</td>
                        </tr>
                        
                         <tr>
                            <td>Contenido</td>
                            <td>25 ml</td>
                        </tr>
                        
                          <tr>
                            <td>Tipo de Pintura</td>
                            <td>Escolar</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $10.26
                    </button>
                </div>
            `;
          case 72:
            return `
                <div class="titulo-card">
                    <h2>Pintura para Carteles Frasco C/25 ml Rosa Mexicano 59 Vinci </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura para Carteles Frasco con 25 ml Rosa.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pintura para Carteles Frasco C/25 ml Rosa Mexicano 59 Vinci </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Rosa</td>
                        </tr>
                        
                         <tr>
                            <td>Contenido</td>
                            <td>25 ml</td>
                        </tr>
                        
                          <tr>
                            <td>Tipo de Pintura</td>
                            <td>Escolar</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $10.26
                    </button>
                </div>
            `;
          case 73:
            return `
                <div class="titulo-card">
                    <h2>Pintura Acrílica Frasco con 250 ml Negro Politec </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura Acrílica Frasco con 250 ml Negro Politec.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pintura Acrílica Frasco C/250 ml Negro Politec </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Negro</td>
                        </tr>
                        
                         <tr>
                            <td>Contenido</td>
                            <td>250 ml</td>
                        </tr>
                        
                          <tr>
                            <td>Tipo de Pintura</td>
                            <td>Acrílica</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $10.26
                    </button>
                </div>
            `;
          case 74:
            return `
                <div class="titulo-card">
                    <h2>Bastidor Chico de 20 x 25 cm Rodín </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Bastidor Chico de 20 x 25 cm Rodín.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Bastidor Chico de 20 x 25 cm Rodín </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Medida</td>
                            <td>20 x 25 cm</td>
                        </tr>
                        
                       
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $69.03
                    </button>
                </div>
            `;
        
           case 75:
            return `
                <div class="titulo-card">
                    <h2> Lienzo para Pintura de 24 x 30 cm con 3 Piezas Barrilito </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Lienzo para Pintura de 24 x 30 cm con 3 Piezas Barrilito.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>LIENZO DE 24X30CM IDEAL PARA REALIZAR PINTURAS ACRILICAS O AL OLEO, DANDO FIRMEZA A LOS DIBUJOS ELABORADOS.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tipo</td>
                            <td>Lienzo para Pintor</td>
                        </tr>
                          <tr>
                            <td>Marca</td>
                            <td>Barrilito</td>
                        </tr>
                    
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $98.10
                    </button>
                </div>
            `;
          case 76:
            return `
                <div class="titulo-card">
                    <h2>  Pintura para Carteles Frasco con 25 ml Verde Esmeralda 63 Vinci </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pintura para Carteles Frasco con 25 ml Verde Esmeralda 63 Vinci.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pintura para Carteles Frasco C/25 ml Verde Esmeralda 63 Vinci </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Verde Esmeralda</td>
                        </tr>
                        
                         <tr>
                            <td>Contenido</td>
                            <td>25 ml</td>
                        </tr>
                        
                          <tr>
                            <td>Tipo de Pintura</td>
                            <td>Escolar</td>
                        </tr>
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $10.26
                    </button>
                </div>
            `;
        
        case 77:
            return `
                <div class="titulo-card">
                    <h2> Diamantina Fina con 2.5 g Colores Surtidos Bolsa con 20 Pzas </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Diamantina Fina con 2.5 g Colores Surtidos Bolsa con 20 Pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Diamantina Fina 2.5 g Colores Surtidos Bol C/20 Smarty </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        
                         <tr>
                            <td>Contenido</td>
                            <td>20 Pzas.</td>
                        </tr>
                        
                        
                         
             
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $30.06
                    </button>
                </div>
            `;
        
           case 78:
            return `
                <div class="titulo-card">
                    <h2>
                    
                    
                            Limpiapipas Colores Pastel Bolsa con 30 Piezas Smarty
                    </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Limpiapipas Colores Pastel Bolsa con 30 Piezas Smarty.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>
Limpiapipas Colores Pastel Bolsa con 30 Piezas Smarty </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Color</td>
                            <td>Patel</td>
                        </tr>
                        
                         <tr>
                            <td>Cantidad</td>
                            <td>30 Pzas.</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $14.85
                    </button>
                </div>
            `;
               case 79:
            return `
                <div class="titulo-card">
                    <h2>
                     Pompones Chicos Colores Surtidos Bolsa con 80 Piezas Smarty
                    </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Pompones Chicos Colores Surtidos Bolsa con 80 Piezas Smarty.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pompones Chicos Colores Surtidos Bolsa con 80 pzas Smarty </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Cantidad</td>
                            <td>80 Pzas</td>
                        </tr>
                        
                         <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                          <tr>
                            <td>Tamaño</td>
                            <td>Chicos</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $21.15
                    </button>
                </div>
            `;
              case 80:
            return `
                <div class="titulo-card">
                    <h2>
                      Foamy con Diamantina de 55 x 43 cm Dorado
                      </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy con Diamantina de 55 x 43 cm Dorado.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>   Foamy con Diamantina de 55 x 43 cm Dorado </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Medida de Foamy</td>
                            <td>55 x 43 cm</td>
                        </tr>
                        
                         <tr>
                            <td>Color</td>
                            <td>Dorado</td>
                        </tr>
                          <tr>
                            <td>Tipo de Foamy</td>
                            <td>Diamantina</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.97
                    </button>
                </div>
            `;
        
            case 81:
            return `
                <div class="titulo-card">
                    <h2>
                      Foamy con Diamantina de 55 x 43 cm Azul Rey
                      </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy con Diamantina de 55 x 43 cm Azul Rey.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>  Foamy con Diamantina de 55 x 43 cm Azul Rey </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Medida de Foamy</td>
                            <td>55 x 43 cm</td>
                        </tr>
                        
                         <tr>
                            <td>Color</td>
                            <td>Azul Rey</td>
                        </tr>
                          <tr>
                            <td>Tipo de Foamy</td>
                            <td>Diamantina</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.97
                    </button>
                </div>
            `;
        
         case 82:
            return `
                <div class="titulo-card">
                    <h2>
                      Foamy Tamaño Carta Amarillo Huevo Paquete con 5 Piezas
                      </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagArte/Foamy Tamaño Carta Amarillo Huevo Paquete con 5 Piezas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> 

Foamy Tamaño Carta Amarillo Huevo Paquete con 5 Piezas </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                        <tr>
                            <td>Cantidad</td>
                            <td>5 Pzas</td>
                        </tr>
                        
                         <tr>
                            <td>Color</td>
                            <td>Amarillo Huevo</td>
                        </tr>
                          <tr>
                            <td>Tamalo de Foamy</td>
                            <td>Carta</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $11.97
                    </button>
                </div>
            `;

          case 83:
            return `
                <div class="titulo-card">
                    <h2>Cuaderno cosido de 100 hojas Norma</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/libreta.webp" alt="Cuaderno cosido de 100 hojas Norma">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cuaderno cosido marca Norma Color 360 cuenta con 100 hojas con tapa flexible, tamaño: profesional, rayado: blanco. Ideal para el nivel de escolaridad: Primaria. Su carátula es Anaranjado la cual es plastificada, sus bordes tienen el color de la carátula para que el niño pueda identificar la materia más fácil.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tamaño</td>
                            <td>Profesional</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Anaranjado</td>
                        </tr>
                        <tr>
                            <td>Número de Hojas</td>
                            <td>100</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $60.66
                    </button>
                </div>
            `;
        case 84:
            return `
                <div class="titulo-card">
                    <h2>Sacapuntas de Metal con Depósito Cuadrado</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="/Web/Img/destacados/sacapuntas.webp" alt="Sacapuntas de Metal con Depósito Cuadrado">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Sacapuntas de Metal con Depósito Cuadrado Blt Smarty</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Metal</td>
                        </tr>
                        <tr>
                            <td>Tipo Sacapuntas</td>
                            <td>Cuadrado con Depósito</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>1 Pza</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $22.05
                    </button>
                </div>
            `;
        case 85:
            return `
                <div class="titulo-card">
                    <h2>Lápiz con Goma Número 2 10 Piezas</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/lapizx10.jpeg">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lápiz con Goma Número 2 10 Piezas</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Madera</td>
                        </tr>
                        <tr>
                            <td>Forma de Lápiz</td>
                            <td>Triangular</td>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>10 Pzas</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $43.74
                    </button>
                </div>
            `;
        case 86:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso con 4 Colores </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/magistral.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p> Marcador Para Pizarrón Grueso C/4 Colores Magistral Didactico </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Grsosr de Marcadaor</td>
                            <td>Grueso</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $88.56
                    </button>
                </div>
            `;
         case 87:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso con 4 Colores </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/lapiceroPm.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Lapiceros Paper Mate Clásico con cuerpo redondo para puntillas 0.7 mm y grip en forma de ondas para mayor control y confort al escribir. </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                        <tr>
                            <td>Grsosr del Lpicero</td>
                            <td>Punta Fina</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $32.40
                    </button>
                </div>
            `;
         case 88:
            return `
                <div class="titulo-card">
                    <h2>Marcador Para Pizarrón Grueso con 4 Colores </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/libretaEstrella06.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Libreta de Apuntes de 1/8 Espiral C/50 Hojas Estrella</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad de Hojas</td>
                            <td>50 Hojas</td>
                        </tr>
                        <tr>
                            <td>Tipo de Libreta</td>
                            <td>1/8 Espiral</td>
                        </tr>
                        <tr>
                            <td>Tipo de Hoja</td>
                            <td>Rayado</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $32.40
                    </button>
                </div>
            `;
        //inicio de detalles del producto 
          case 89:
            return `
                <div class="titulo-card">

                
                    <h2>Corrector Liquido Blanco Tipo Pluma </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/corrector07.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Corrector Líquido Blanco Tipo Pluma Mini Blt Smart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tipo</td>
                            <td>Lapiz</td>
                        </tr>
                        <tr>
                            <td>Punta</td>
                            <td>Fina</td>
                        </tr>
                        <tr>
                            <td>Tamaño</td>
                            <td>Mediano</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $18.80
                    </button>
                </div>
            `;
        
        //final de detalles
        
        case 90:
            return `
                <div class="titulo-card">

                
                    <h2>
Sacapuntas de Plástico con Depósito Croc Croc Conejo</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                       <img src="/Web/Img/destacados/sacapuntas-maped.jpg">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Sacapuntas de Plástico C/Depósito Croc Croc Conejo Blt Maped</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tipo de Sacapuntas</td>
                            <td>Con Déposito</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Maped</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $36.27
                    </button>
                </div>
            `;
            case 91:
            return `
                <div class="titulo-card">

                
                    <h2> Goma de Borrar Blanca Grande Bolsa con 3 Piezas </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/destacados/goma3pzas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <ul>
                    <li>Borrar fácil sin dañar ni manchar el papel, gracias a su textura suave </li>
                     <li>  Su clásico y atractivo diseño te permite borrar con detalle en espacios pequeños</li></ul>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>3 Pzas</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Blanco</td>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>Pelikan</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $26.01
                    </button>
                </div>
            `;
        case 92:
            return `
                <div class="titulo-card">

                
                    <h2>Pegamento Blanco 850 con 225 g Resistol</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/destacados/pegamento.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <ul>
                    <li> Resistol Pegamento Líquido Escolar Blanco tiene una gran fuerza de adhesión</li>
                     <li>Su acabado es transparente, listo para usar, su botella es ergonómica con una tapa dispensadora tipo “cohete”. No tóxico</li>
                     <li>Se puede aplicar: en madera, papel, cartón, cerámica, tela, foamy y corcho.</li></ul>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Contenido</td>
                            <td>225 gramos</td>
                        </tr>
                        <tr>
                            <td>Tipo</td>
                            <td>Liquido Escolar Blanco</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $61.47
                    </button>
                </div>
            `;
        case 93:
            return `
                <div class="titulo-card">

                
                    <h2> Tijera Escolar de 5" Pulgadas Oreja Plástico Pelikan</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/destacados/tijeras.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <ul>
                    <li>Su mango ergonómico de plástico brinda una sujeción más cómoda para cortes más uniformes.</li>
                     <li>Su acabado es transparente, listo para usar, su botella es ergonómica con una tapa dispensadora tipo “cohete”. No tóxico</li>
                     <li>Su acabado en punta roma garantiza completa seguridad a los pequeños al momento de cortar.</li></ul>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tamaño</td>
                            <td>5"</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Rosado</td>
                        </tr>
                         <tr>
                            <td>Tipo de Tijera</td>
                            <td>Escolar</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $13.14
                    </button>
                </div>
            `;
          case 94:
            return `
                <div class="titulo-card">

                
                    <h2>Cartulina Bristol Express de 48.8 kg 50 x 65 cm Blanco</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/destacados/cartulina.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Cartulina Bristol Express de 48.8 kg 50 x 65 cm Blanco</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Blanco</td>
                        </tr>
                        <tr>
                            <td>Medidas de Cartuliina</td>
                            <td>48.8 kg 50 x 65 cm</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $2.43
                    </button>
                </div>
            `;
            case 95:
            return `
                <div class="titulo-card">

                
                    <h2>Sobre Bolsa Plástico Tamaño Oficio Vertical</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/destacados/cartulina.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Sobre Bolsa Plástico Tamaño Oficio Vertical Cristal Transparente Smart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Cristal Transparente</td>
                        </tr>
                        <tr>
                            <td>Tamaño</td>
                            <td>Oficio</td>
                        </tr>
                          <tr>
                            <td>Tipo de Sobre</td>
                            <td>Bolsa</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.25
                    </button>
                </div>
            `;
           case 96:
            return `
                <div class="titulo-card">

                
                    <h2>Desengrapadora Smart</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Desengrapadora Smart.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Desengrapadora Smart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Marca</td>
                            <td>SMART</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.25
                    </button>
                </div>
            `;
          case 97:
            return `
                <div class="titulo-card">

                
                    <h2> Marcador Permanente Delgado Colores Surtidos Sharpie </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Marcador Permanente Delgado Colores Surtidos Blíster con 4 Piezas Sharpie.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Sharpie punto fino marcador colores básicos blister 4 PZAS, Con el Marcador Permanente Sharpie convierte cualquier superficie ordinaria en una grandiosa obra creativa al compás de tus trazos. Tiene color atrevido al máximo y duración infalible hasta el núcleo para que te inspires al crear</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Surtidos</td>
                        </tr>
                          <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                          <tr>
                            <td>Tipo de Sobre</td>
                            <td>Bolsa</td>
                        </tr>
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $75.24
                    </button>
                </div>
            `;
          case 98:
            return `
                <div class="titulo-card">

                
                    <h2>  Sobre Bolsa Plástico Tamaño Oficio Vertical Azul Transparente Smart </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Sobre Bolsa Plástico Tamaño Oficio Vertical Azul Transparente Smart.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Sobre Bolsa Plástico Tamaño Oficio Vertical Azul Transparente Smart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Azul</td>
                        </tr>
                          <tr>
                            <td>Marca</td>
                            <td>SMART</td>
                        </tr>
                          <tr>
                            <td>Grosor de Marcador </td>
                            <td>Delgado</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.25
                    </button>
                </div>
            `;
           case 99:
            return `
                <div class="titulo-card">

                
                    <h2>  Broche para Archivo de 8 cm Caja Azul con 50 Piezas Baco </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Broche para Archivo de 8 cm Caja Azul con 50 Piezas Baco.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Broche para Archivo de 8 cm Cja Azul C/50 Pzas. Baco</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Cantidad</td>
                            <td>50 Pzas</td>
                        </tr>
                          <tr>
                            <td>Color</td>
                            <td>Azul</td>
                        </tr>
                          <tr>
                            <td> Uso </td>
                            <td> Para Archivo</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $88.92
                    </button>
                </div>
            `;
          case 100:
            return `
                <div class="titulo-card">

                
                    <h2>   Calculadora de Bolsillo Chica de 8 Dígitos The Basic Smartech</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Calculadora de Bolsillo Chica de 8 Dígitos The Basic Smartech.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Calculadora de Bolsillo Chica de 8 Dígitos The Basic Smartech </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        <tr>
                            <td>Tipo de Calculadora</td>
                            <td>Bolsillo</td>
                        </tr>
                          <tr>
                            <td>Tamaño</td>
                            <td>Chica</td>
                        </tr>
                          <tr>
                            <td> Cantidad de Dígitos </td>
                            <td> 8 Dígitos </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $32.85
                    </button>
                </div>
            `;
          case 101:
            return `
                <div class="titulo-card">

                
                    <h2>   Banderitas Adhesivas de Plástico 5 Colores Blíster con 125 Piezas Memo Tip</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Banderitas Adhesivas de Plástico 5 Colores Blíster con 125 Piezas Memo Tip.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Banderitas Adhesivas Plástico 5 Colores Blt C/125 Pzas.</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          <tr>
                            <td>Material</td>
                            <td>Platico</td>
                        </tr>
                          <tr>
                            <td> Cantidad </td>
                            <td> 125 Pzas. </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $26.55
                    </button>
                </div>
            `;
             case 102:
            return `
                <div class="titulo-card">

                
                    <h2> Tabla Agarrapapel de Madera Tamaño Carta Lux </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Tabla Agarrapapel de Madera Tamaño Carta Lux.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>TABLA AGARRA PAPEL DE MADERA TAMAÑO CARTA LUX</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          <tr>
                            <td>Tamaño</td>
                            <td>Carta</td>
                        </tr>
                          <tr>
                            <td> Material </td>
                            <td> Madera </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $35.01
                    </button>
                </div>
            `;
         case 103:
            return `
                <div class="titulo-card">

                
                    <h2> Tabla Agarrapapel de Madera Tamaño Carta Lux </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Pin de Plástico Cool Colors con 100 Piezas Smart.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Pin de Plástico Cool Colors con 100 Piezas Smart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          <tr>
                            <td>Cantidad</td>
                            <td>100 Pzas.</td>
                        </tr>
                          <tr>
                            <td> Material </td>
                            <td> Plastico</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $28.80
                    </button>
                </div>
            `;
           case 104:
            return `
                <div class="titulo-card">

                
                    <h2> Engrapadora Metálica Grande Negro Smart </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/tagMaterialdeOf/Engrapadora Metálica Grande Negro Smart.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                    <p>Engrapadora Metálica Grande Negro Smart</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          <tr>
                            <td>Tamaño</td>
                            <td>Grande</td>
                        </tr>
                          <tr>
                            <td> Material </td>
                            <td> Metálica</td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $88.20
                    </button>
                </div>
            `;
             case 105:
            return `
                <div class="titulo-card">

                
                    <h2> Goma de Borrar Blanca Mediana WS 30 Bolsa con 4 Piezas </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Goma de Borrar Blanca Mediana WS 30 Bolsa con 4 Piezas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <ul>
                <li> Borrar fácil sin dañar ni manchar el papel, gracias a su textura suave.</li>
                 <li>Su clásico y atractivo diseño te permite borrar con detalle en espacios pequeños.</li>
                  <li> Ideal para trabajos en casa, escolares y profesionales.
</li>
                  

                </ul>
                
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          <tr>
                            <td>Cantidad</td>
                            <td>4 Pzas</td>
                        </tr>
                          <tr>
                            <td> Tamaño </td>
                            <td> WS 30 </td>
                        </tr>
                          <tr>
                            <td> Color </td>
                            <td> Blanca </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $18.81
                    </button>
                </div>
            `;
          case 106:
            return `
                <div class="titulo-card">

                
                    <h2>Juego de Geometría Irrompible Mediano Maped</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Juego de Geometría Irrompible Mediano Maped.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>Juego de Geometría Irrompible Mediano Maped </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          
                          <tr>
                            <td> Tipo de Juego de Geometría </td>
                            <td> Irrompible</td>
                        </tr>
                          <tr>
                            <td> Tamaño </td>
                            <td> Mediano </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $104.40
                    </button>
                </div>
            `;
        case 107:
            return `
                <div class="titulo-card">

                
                    <h2>Juego de Geometría Technic Metal Maped</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Juego de Geometría Technic Metal Maped.webp" >
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> Juego de Geometría Technic Metal Maped </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                        
                          
                          <tr>
                            <td> Tipo de Juego de Geometría </td>
                            <td> Económico </td>
                        </tr>
                          <tr>
                            <td> Material </td>
                            <td> Metal </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $87.48
                    </button>
                </div>
            `;
          case 108:
            return `
                <div class="titulo-card">

                
                    <h2>Calcomanía (Sticker) para Materias Bolsa con 20 Etiquetas Spidey</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Calcomanía (Sticker) para Materias Bolsa con 20 Etiquetas Spidey.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> BLISTER CON 20 STICKERS DE ETIQUETA PARA IDENTIFICACION DE LIBROS O CUADERNOS DE LA LICENCIA SPIDEY </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                           
                          <tr>
                            <td> Tipo de Calcomanía </td>
                            <td> Para Materias </td>
                        </tr>
                          
                          <tr>
                            <td>Diseño </td>
                            <td> Spidey </td>
                        </tr>
                          <tr>
                            <td> Cantidad </td>
                            <td> 20 Pzas </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $16.65
                    </button>
                </div>
            `;
        
          case 109:
            return `
                <div class="titulo-card">

                
                    <h2> Calcomania (Sticker) Block con 6 Hojas Minecraft Granmark</h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Calcomania (Sticker) Block con 6 Hojas Minecraft Granmark.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> BLOCK CON 6 HOJAS DE STICKERS DE DIFERENTES TAMAÑOS DEL PERSONAJE MINECRAFT </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                           
                          <tr>
                            <td> Tipo de Calcomanía </td>
                            <td> Para Materias </td>
                        </tr>
                          
                          <tr>
                            <td>Diseño </td>
                            <td> Minecraft </td>
                        </tr>
                          <tr>
                            <td> Cantidad </td>
                            <td> 120 Pzas </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $26.01
                    </button>
                </div>
            `;
         case 110:
            return `
                <div class="titulo-card">

                
                    <h2>  Plástico Autoadherible de .45 x 20 m Transparente Janel </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Plástico Autoadherible de .45 x 20 m Transparente Janel.webp"">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> Plástico Autoadherible de .45 x 20 m Transparente Janel  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Medida </td>
                            <td> 45 x 20 m </td>
                        </tr>
                          <tr>
                            <td> Color </td>
                            <td> Transparente </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $135.00
                    </button>
                </div>
            `;
             case 111:
            return `
                <div class="titulo-card">

                
                    <h2>  Ábaco de Plástico Grande (1010) Bolsa Baco  </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Ábaco de Plástico Grande (1010) Bolsa Baco.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>  Ábaco de Plástico Grande (1010) Bolsa Baco  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Marca</td>
                            <td> BACO </td>
                        </tr>
                         
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $74.16
                    </button>
                </div>
            `;
             case 112:
            return `
                <div class="titulo-card">

                
                    <h2> 
Sacapuntas de Plástico con Depósito Chico Igloo Blíster con 2 Piezas Maped </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Sacapuntas de Plástico con Depósito Chico con 2 Pzas Maped.jpeg">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>  Sacapuntas de Plástico con Depósito Chico Igloo Blt C/2 Pzas. Maped</p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Tipo de Sacapuntas</td>
                            <td> Con Depósito Chico </td>
                        </tr>
                        
                          <tr>
                            <td>Cantidad</td>
                            <td> 2 Pzas </td>
                        </tr>
                          
                          <tr>
                            <td>Material</td>
                            <td>Plástico</td>
                        </tr>
                         
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.97
                    </button>
                </div>
            `;
             case 113:
            return `
                <div class="titulo-card">

                    <h2>   Portalápiz de Plástico Duro grande con Charola Janel </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Sacapuntas de Plástico con Depósito Chico con 2 Pzas Maped.jpeg">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>  Portalápiz de Plástico Duro grabde con Charola Janel </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Tamaño</td>
                            <td> Grande </td>
                        </tr>

                          
                          <tr>
                            <td>Material</td>
                            <td>Plástico Duro</td>
                        </tr>
                         
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $20.97
                    </button>
                </div>
            `;
            case 114:
            return `
                <div class="titulo-card">

                    <h2> 
                            Clips y Cositas para Oficina Charola con 5 Divisiones Smart </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Clips y Cositas para Oficina Charola con 5 Divisiones Smart.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>  Clips y Cositas para Oficina Charola con 5 Divisiones Smart </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Marca</td>
                            <td> SMART </td>
                        </tr>

                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $58.41
                    </button>
                </div>
            `;
          case 115:
            return `
                <div class="titulo-card">

                    <h2> 
                            Archivador Tamaño Carta Lefort </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Archivador Tamaño Carta Lefort.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> Archivador Tamaño Carta Lefort  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Tamaño</td>
                            <td> Carta </td>
                        </tr>
                           <tr>
                            <td>Color</td>
                            <td> Variados </td>
                        </tr>

                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $59.49
                    </button>
                </div>
            `;
          case 116:
            return `
                <div class="titulo-card">

                    <h2> 
                         Folder de Cartulina Tamaño Carta Crema Paquete con 25 Piezas </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Folder de Cartulina Tamaño Carta Crema Paquete con 25 Piezas.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>  Folder de Cartulina Tamaño Carta Crema Pte C/25 Pzas  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Tamaño</td>
                            <td> Carta </td>
                        </tr>
                           <tr>
                            <td>Color</td>
                            <td>Crema </td>
                        </tr>
                          <tr>
                            <td>Cantidad</td>
                            <td>25 Pzas </td>
                        </tr>


                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $53.19
                    </button>
                </div>
            `;
                case 117:
            return `
                <div class="titulo-card">

                    <h2> 
                         Organizador de Escritorio de Malla Metálica con 7 Secciones Negro Nextep </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Organizador de Escritorio de Malla Metálica con 7 Secciones Negro Nextep.jpeg">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>  Organizador de malla metálica en color negro con 7 compartimientos, uno de ellos ideal para colocar documentos, cuatro espacios más para colocar lapices, lapiceros, correctores, resaltadores, tijeras, entre otros; un espacio plano para colocar notas, goma, sacapuntas, etc., y por último, una bandeja deslizable.  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Tamaño</td>
                            <td> 7 Secciones </td>
                        </tr>
                           <tr>
                            <td>Color</td>
                            <td>Negro</td>
                        </tr>
                          <tr>
                            <td>Material</td>
                            <td>De Escritorio</td>
                        </tr>


                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $229.90
                    </button>
                </div>
            `;
          case 118:
            return `
                <div class="titulo-card">

                    <h2> 
                    Separador de Cartón Tamaño Carta con 15 Piezas First Class </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Separador de Cartón Tamaño Carta con 15 Piezas First Class.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> Separador de Cartón Tamaño Carta C/15 Pzas. First Class  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Cantidad 15 Pzas</td>
                            <td> 7 Secciones </td>
                        </tr>
                           <tr>
                            <td> Material </td>
                            <td> Cartón </td>
                        </tr>
                          <tr>
                            <td>Tamaño </td>
                            <td>De Carta </td>
                        </tr>


                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $32.49
                    </button>
                </div>
            `;
          case 119:
            return `
                <div class="titulo-card">

                    <h2> 
                  Archivador Tamaño Carta Rosa Neón Smarts </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Archivador Tamaño Carta Rosa Neón Smart.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> Archivador Tamaño Carta Rosa Neón Smart  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          
                           <tr>
                            <td> Color </td>
                            <td> Rosa Neón </td>
                        </tr>
                          <tr>
                            <td>Tamaño </td>
                            <td> Carta </td>
                        </tr>                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $37.35
                    </button>
                </div>
            `;
          case 120:
            return `
                <div class="titulo-card">

                    <h2> 
                    Clip Inoxidable Niquelado Gigante Mariposa Número 1 Caja con 12 Piezas Baco
             </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Clip Inoxidable Niquelado Gigante Mariposa Número 1 Caja con 12 Piezas Baco.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p> Separador de Cartón Tamaño Carta C/15 Pzas. First Class  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Cantidad</td>
                            <td> 12 Pzas </td>
                        </tr>
                           <tr>
                            <td> Material </td>
                            <td> Metal Inoxiddable Niquelado </td>
                        </tr>
                          <tr>
                            <td>Tamaño </td>
                            <td> Gigante </td>
                        </tr>


                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $37.80
                    </button>
                </div>
            `;
          case 121:
            return `
                <div class="titulo-card">

                    <h2> 
                    Sobre de Plástico con Botón Tamaño Carta Horizontal Azul </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Sobre de Plástico con Botón Tamaño Carta Horizontal Azul.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>Sobre de Plástico con Botón Tamaño Carta Horizontal Azul Solido Smart 25261
  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Color</td>
                            <td>Azul</td>
                        </tr>
                           <tr>
                            <td> Tipo de Sobre </td>
                            <td> Bolsa </td>
                        </tr>
                          <tr>
                            <td>Tamaño </td>
                            <td> Carta </td>
                        </tr>


                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $18.00
                    </button>
                </div>
            `;
          case 122:
            return `
                <div class="titulo-card">

                    <h2> 
                  Folder de Cartulina Tamaño Carta Azul Paquete con 5 Piezas </h2>
                </div>
                <div class="carousel">
                    <div class="carousel-images">
                    <img src="/Web/Img/Accesorios/Separador de Cartón Tamaño Carta con 15 Piezas First Class.webp">
                    </div>
                </div>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                <br>
                <div class="tabs">
                    <button class="tablink" onclick="openTab('Descripcion')" id="defaultOpen">Descripción</button>
                    <button class="tablink" onclick="openTab('Caracteristicas')">Características</button>
                </div>
                <div id="Descripcion" class="tabcontent">
                <p>Folder de Cartulina Tamaño Carta Azul Pte C/5 Pzas.  </p>
                </div>
                <div id="Caracteristicas" class="tabcontent">
                    <table class="caracteristicas">
                        <tr>
                            <th>Características</th>
                            <th>Detalles</th>
                        </tr>
                       
                          
                          <tr>
                            <td>Cantidad </td>
                            <td> 5 Pzas. </td>
                        </tr>
                           <tr>
                            <td> Color </td>
                            <td> Azul </td>
                        </tr>
                          <tr>
                            <td>Tamaño </td>
                            <td>Carta </td>
                        </tr>


                          
                          
                        
                    </table>
                </div>
                <div class="costo">
                    <button>
                        $13.22
                    </button>
                </div>
            `;
        default:
            return '';
    }
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

let slideIndex = 0;

function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.style.display = (index === 0) ? 'block' : 'none';
        });
        slideIndex = 0;
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-images img');
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-images img');
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].style.display = 'block';
}

// Carrusel de marcas
$(document).ready(function() {
    $('#logo-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScsroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
