
document.addEventListener("DOMContentLoaded", function() {
    const carrito = [];
    const productos = [
        //COMIDAS
        { id: 1, nombre: "Cheese Burger", precio: 2000 },
        { id: 2, nombre: "Onion Burger", precio: 2500 },
        { id: 3, nombre: "BBQ Burger", precio: 3000 },
        
        //BEBIDAS
        { id: 4, nombre: "Agua", precio: 700 },
        { id: 5, nombre: "Jugo", precio: 1000 },
        { id: 6, nombre: "Gaseosa", precio: 1500 },
        
        //EXTRAS
        { id: 7, nombre: "Cebolla", precio: 700 },
        { id: 8, nombre: "Cheedar", precio: 1200 },
        { id: 9, nombre: "Bacon", precio: 1700 }
    ];

    // Crear elementos para cada producto y agregarlos al DOM
    productos.forEach(producto => {
        const categoria = obtenerCategoria(producto.id); // Cambio de nombre aquí
        const productosElement = document.querySelector(".productos." + categoria);
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
            <p>${producto.nombre}<br>${producto.precio}</p>
            <button class="boton" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productosElement.appendChild(productoElement);
    });

    // Función para obtener el ID de la categoría de un producto
    function obtenerCategoria(id) { // Cambio de nombre aquí
        if (id >= 1 && id <= 3) return "comida";
        if (id >= 4 && id <= 6) return "bebidas";
        if (id >= 7 && id <= 9) return "extras";
    }

    //Muestra el contenido actual del carrito
    function mostrarCarrito() {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        if (carrito.length === 0) {
            mensaje += "El carrito está vacío.";
        } else {
            carrito.forEach(producto => {
                mensaje += producto.nombre + " - Precio: $" + producto.precio + "\n";
                total += producto.precio;
            });
            mensaje = mensaje + 'Total: $' + total;
        }
        mostrarMensaje(mensaje); 
    }

    function mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    // Agrega un producto al carrito
    function agregarAlCarrito(id) {
        console.log("Intentando agregar producto con ID: " + id);
        const producto = productos.find(producto => producto.id === id);
        console.log("Producto encontrado: ", producto);
        if (producto) {
            carrito.push(producto);
            console.log("Producto agregado al carrito:", producto);
            mostrarMensaje("¡Producto agregado al carrito!");
            mostrarCarrito();
        } else {
            console.log("Producto no encontrado con ID:", id);
            mostrarMensaje("¡Producto no encontrado!");
        }
    }
});
