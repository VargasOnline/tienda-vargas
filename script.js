let carrito = [];
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}
function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - L.${item.precio}`;
    lista.appendChild(li);
    suma += item.precio;
  });
  total.textContent = suma;
}
function realizarPago() {
  const total = document.getElementById('total').textContent;
  const mensaje = encodeURIComponent(`Hola, deseo realizar una compra por un total de L.${total}`);
  window.open(`https://wa.me/50432451490?text=${mensaje}`, '_blank');
}
