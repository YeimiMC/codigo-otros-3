// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//Para seleccionar los elementos adecuados del DOM
const listaProductos = document.getElementById("lista-de-productos"); //Cambiamos la función getElementsByName por getElemenById porque es el elemento en el div que tiene un ID y que se quiere obtener.
const input = document.querySelector('input'); //no hay ningún elemento con la clase input, pero se usa "input" en lugar de $i solamente, para poder seleccionar el primer elemnento que así aparezca en el documento

//por buenas practicas es mejor usar la declaración const donde tenemos las var
for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div");  
  d.classList.add("producto");

  const ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  //se cambia li por listaProductos
  listaProductos.appendChild(d)
}



//Se coloca la función para displayProducts
function displayProductos(productos) {
  //Lógica para mostrar los productos en la página

  const listaProductos = document.getElementById("lista-de-productos");

  listaProductos.innerHTML = ""; //Para limpiar la lista de productos antes de mostrar los nuevos productos filtrados. Con  "" estamos eliminando todo el contenido HTML que pueda existir den tro de ese elemento.

  //Se cambia la declaración y el uso que se le está dando a la variable "producto" Para recorrer el array y crear los elementos correspondientes
  for (let i = 0; i < productos.length; i++) {
    const producto = producto[i];

    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
  
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;
    
    const imagen = document.createElement("img");
    imagen.src = producto.img; //Para asignar de manera más legible el valor del atributo src de la etiqueta de imagen
  
    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);
  
    listaProductos.appendChild(divProducto);
  }
}

const botonDeFiltro = document.querySelector("button");


//Aquí en lugar de que se elimine uno por uno de los elementos hijos, vamor a utilizar innerHTML para que se eliminen todos de una sola vez. Además de cambiar la variable li por listaProductos para obtener correctamente la referencia al contenedor de productos con getElementById
botonDeFiltro.onclick = function(){
  const listaProductos = document.getElementById("lista-de-productos");
  listaProductos.innerHTML = "";

  //el filtro de la lista de productos según el texto se queda igual
  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  //Llamar a la función displayProductos para que se realice el proceso de filtrado y se actualice la visualización de los productos
  displayProductos(productosFiltrados);

}

//Esta función copn includes se queda igual para que retorne un nuevo array quie contengan sólo los productos que coinciden con el filtro
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}