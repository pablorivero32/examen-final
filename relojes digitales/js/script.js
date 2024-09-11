// Función para actualizar el reloj
function updateClock() {
    console.log('updateClock called'); // Verifica si esta línea se imprime en la consola
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama a la función una vez al cargar la página
updateClock();