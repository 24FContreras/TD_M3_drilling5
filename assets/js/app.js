//Solución según lo que entendí de las instrucciones del drilling. Antes tenía una solución más acotada, la que dejé comentada abajo del código :)

console.log("🟢 Connected!");
const card = document.querySelector(".card");
const alternativeBtn = document.querySelector("#alternativeBtn");

const productos = [
  {
    id: 1,
    marca: "Dell",
    modelo: "Xtreme 270",
    precio: 3990,
    img: "https://www.laptopsdirect.co.uk/Images/A1X555UA-DM059T_5_supersize.jpg?v=2",
  },
  {
    id: 2,
    marca: "Apple",
    modelo: "MacBook Air",
    precio: 999,
    img: "https://falabella.scene7.com/is/image/Falabella/15028801_1?wid=800&hei=800&qlt=70",
  },
];

function formatCurrency(amount) {
  let CLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return CLP.format(amount);
}

function mostrarInformacion(producto) {
  card.querySelector(".card-img-top").src = producto.img;
  card.querySelector(
    ".card-title"
  ).textContent = `${producto.marca} ${producto.modelo}`;
  card.querySelector(".precio").textContent = formatCurrency(producto.precio);
}

let acumulador = 0;

alternativeBtn.addEventListener("click", function () {
  mostrarInformacion(productos[acumulador]);
  acumulador++;

  if (acumulador === productos.length) {
    acumulador = 0;
  }
});

let productoMostrado = {};

alternativeBtn.addEventListener("click", function () {
  if (!productoMostrado.id) {
    productoMostrado = productos[0];
  } else if (productoMostrado.id === 1) {
    productoMostrado = productos[1];
  } else {
    productoMostrado = productos[0];
  }

  mostrarInformacion(productoMostrado);
});

/*
let acumulador = 0;

alternativeBtn.addEventListener("click", function () {
  mostrarInformacion(productos[acumulador]);
  acumulador++;

  if (acumulador === productos.length) {
    acumulador = 0;
  }
});
*/
