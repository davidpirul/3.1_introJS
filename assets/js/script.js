const precio = 5000;
let b = document.querySelector("#boton");

fixedPrice = document.querySelector("#precio");
fixedPrice.innerHTML = precio;

b.addEventListener("click", function () {
    total = Number(cantidad.value) * Number(precio);
    totalPrice = document.querySelector("#precio-total");
    totalPrice.innerHTML = total;
    cantidad = document.querySelector("#cantidad");
    showCantidad = document.querySelector("#mostrar-cantidad");
    showCantidad.innerHTML = cantidad.value;
    
});

function changeColor(event) {
    let color = event.value;
    document.querySelector('#mostrar-color').style.backgroundColor = color;
}