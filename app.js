let productos = [
    { nombre: "torta", precio: 10000 },
    { nombre: "cupcakes", precio: 850 },
    { nombre: "cookies", precio: 700 },
    { nombre: "paletas", precio: 1200 },
    { nombre: "oreo bañadas", precio: 350 }
  ];

  let carrito = [];
  let total = 0; // Suma total

  fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data; 
    mostrarProductos(); 
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

function mostrarProductos() {
  alert("Puedes elegir entre estos productos:");
  let todosLosProductos = productos.map(producto => `${producto.nombre} - ${producto.precio}$`);
  alert(todosLosProductos.join("\n"));
}

  // Agregamos nuevoProducto a la lista de productos
  productos.push({ nombre: "Mini Cake", precio: 2500 });

  const arrayDeClientes = [
    {
      nombre: "Ana",
      edad: 24,
      productoFavorito: "torta",
    },
    {
      nombre: "Juan",
      edad: 35,
      productoFavorito: "cookies",
    },
    {
      nombre: "Sofia",
      edad: 16,
      productoFavorito: "Mini Cake",
    },
  ];

  console.log(arrayDeClientes);

  for (let i = 0; i < arrayDeClientes.length; i++) {
    console.log("Nombre: " + arrayDeClientes[i].nombre);
    console.log("Edad: " + arrayDeClientes[i].edad);
    console.log("Producto Favorito: " + arrayDeClientes[i].productoFavorito);
  }

  let seleccion = prompt("¿Quieres llevar algún producto hoy?");

  while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor, responde 'si' o 'no'");
    seleccion = prompt("¿Deseas hacer un pedido?");
  }

  if (seleccion === "si") {
    alert("Puedes elegir entre estos productos:");
    let todosLosProductos = productos.map((producto) => `${producto.nombre} - ${producto.precio}$`);
    alert(todosLosProductos.join("\n"));

    let productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito:");

    while (productoElegido) {
      const productoEncontrado = productos.find((producto) => producto.nombre === productoElegido);

      if (productoEncontrado) {
        carrito.push({ nombre: productoElegido, precio: productoEncontrado.precio });
        total += productoEncontrado.precio; // Agrega el precio al total
        alert(`${productoElegido} se ha añadido al carrito.`);
      } else {
        alert("El producto no existe en nuestro catálogo.");
      }

      productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito (o deja el campo en blanco para finalizar):");
    }

  
    var carritoElement = document.createElement('ul');
    var totalElement = document.createElement('p');

    
    for (const producto of carrito) {
      var listItem = document.createElement('li');
      listItem.textContent = `${producto.nombre}: ${producto.precio}$`;
      carritoElement.appendChild(listItem);
    }

  
    totalElement.textContent = `Suma total: ${total}$`;

   
    var resultado = document.getElementById('resultado');

   
    resultado.appendChild(carritoElement);
    resultado.appendChild(totalElement);
  } else {
    alert("Gracias por visitarnos. ¡Hasta luego!");
  }
