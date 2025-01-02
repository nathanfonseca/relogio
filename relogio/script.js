let isAnalog = true;

function updateClock() {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const digitalTime = document.getElementById('digital-time');

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hourDeg = (h % 12) * 30 + m * 0.5;
    const minuteDeg = m * 6;
    const secondDeg = s * 6;

    // Atualizando o relógio analógico
    hour.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

    // Atualizando o relógio digital
    const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    digitalTime.textContent = time;
}

// Alterna entre os modos analógico e digital
function toggleClockMode() {
    const analogClock = document.getElementById('analog-clock');
    const digitalClock = document.getElementById('digital-clock');
    const toggleBtn = document.getElementById('toggle-btn');

    isAnalog = !isAnalog;
    if (isAnalog) {
        analogClock.style.display = 'block';
        digitalClock.classList.remove('active');
        toggleBtn.textContent = 'Alternar para Digital';
    } else {
        analogClock.style.display = 'none';
        digitalClock.classList.add('active');
        toggleBtn.textContent = 'Alternar para Analógico';
    }
}

// Inicializa o relógio e configura o intervalo
setInterval(updateClock, 1000);
updateClock();

// Configura o botão para alternar entre os modos
document.getElementById('toggle-btn').addEventListener('click', toggleClockMode);
