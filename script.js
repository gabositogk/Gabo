// Seleccionamos el botón
const botonConectar = document.getElementById('btn-conectar');

botonConectar.addEventListener('click', async () => {
  // Verificamos si el navegador soporta Bluetooth
  if (!navigator.bluetooth) {
    alert('Tu navegador no soporta Bluetooth. Intenta usar Google Chrome o Microsoft Edge.');
    return;
  }

  try {
    // Esto abre la ventana emergente para buscar dispositivos
    const dispositivo = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true
    });

    document.getElementById('estado-conexion').innerText = 'Conectado a: ' + dispositivo.name;
    document.getElementById('estado-conexion').style.color = '#00c4cc';

  } catch (error) {
    // Si cierras la ventana o no eliges nada, entra aquí
    console.log('No se seleccionó ningún dispositivo:', error);
    alert('No se seleccionó ningún dispositivo Bluetooth.');
  }
});
