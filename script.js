const botonConectar = document.getElementById('btn-conectar');

botonConectar.addEventListener('click', async () => {
  try {
    // 1. Pedir permiso al usuario para elegir el dispositivo Bluetooth
    const dispositivo = await navigator.bluetooth.requestDevice({
      // Reemplaza con el nombre exacto de tu Arduino o modulo Bluetooth si lo tiene
      acceptAllDevices: true,
      optionalServices: ['battery_service'] // Aquí irán los IDs de servicio de tu tarjeta
    });

    // 2. Conectar al servidor del dispositivo (GATT)
    const servidor = await dispositivo.gatt.connect();
    alert('¡Conectado exitosamente a ' + dispositivo.name + '!');

    // 3. Escuchar si se desconecta
    dispositivo.addEventListener('gattserverdisconnected', () => {
      alert('El dispositivo Bluetooth se ha desconectado.');
    });

  } catch (error) {
    console.error('Error al conectar:', error);
    alert('No se pudo conectar. Asegúrate de encender el Bluetooth.');
  }
});
