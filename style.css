// --- LÓGICA DEL TEMPORIZADOR Y LUZ AZUL ---
let tiempoRestante = 60; // 60 segundos por defecto
let intervalo = null;

function actualizarPantallaTiempo() {
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;
  
  // Agrega un cero a la izquierda si es menor a 10
  if (minutos < 10) minutos = '0' + minutos;
  if (segundos < 10) segundos = '0' + segundos;
  
  document.getElementById('temporizador').innerText = minutos + ':' + segundos;
}

function iniciarTemporizador() {
  if (intervalo) return; // Evita duplicar el conteo
  
  // Restablecer luz
  document.getElementById('luz-azul').classList.remove('encendida');
  
  intervalo = setInterval(() => {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      actualizarPantallaTiempo();
    } else {
      // Cuando el tiempo termina, encender luz azul
      clearInterval(intervalo);
      intervalo = null;
      document.getElementById('luz-azul').classList.add('encendida');
    }
  }, 1000);
}

function detenerTemporizador() {
  clearInterval(intervalo);
  intervalo = null;
}

// --- SIMULACIÓN DE SENSORES PARA LA PRESENTACIÓN ---

// Cambiar la barra de movimiento
function cambiarMovimiento(porcentaje) {
  const barra = document.getElementById('barra-progreso');
  barra.style.width = porcentaje + '%';
}

// Cambiar el valor del pulso cardiaco
function cambiarPulso(bpm) {
  document.getElementById('pulso').innerText = bpm + ' BPM';
}

// Botón de conexión simulada
document.getElementById('btn-conectar').addEventListener('click', () => {
  const estado = document.getElementById('estado-conexion');
  estado.innerText = 'Estado: ¡Conectado con éxito!';
  estado.style.color = '#00c4cc';
});
