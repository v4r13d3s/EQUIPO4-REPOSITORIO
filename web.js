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
        case 2:
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
          case 7:
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
        
        case 8:
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
            case 9:
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
        case 10:
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
        case 11:
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
          case 12:
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
                    slidesToScroll: 3
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
