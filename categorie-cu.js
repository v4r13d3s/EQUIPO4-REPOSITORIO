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
        case 2:
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
        case 3:
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
        case 4:
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
         case 5:
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
         case 6:
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
          case 7:
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
        
        case 8:
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
            case 9:
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
        case 10:
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
        case 11:
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
          case 12:
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
         case 13:
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
        case 14:
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
                        $32.94
                    </button>
                </div>
            `;
        case 15:
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
        case 16:
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
         case 17:
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
         case 18:
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
          case 19:
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
        
        case 20:
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
            case 21:
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
        case 22:
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
        case 23:
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
          case 24:
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
        
                  case 25:
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
        
                  case 26:
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
                  case 27:
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
                  case 28:
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
                  case 29:
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
