const startBtn = document.getElementById('startBtn');
const diasContador = document.getElementById('diasContador');
const audio = document.querySelector('audio');

audio.style.display = 'none';

startBtn.addEventListener('click', () => {
    document.querySelector('header').style.display = 'none';
    document.querySelector('main').style.display = 'block';
    startBtn.style.display = 'none';
    audio.currentTime = 26; // Inicia o áudio a partir de 28 segundos
    audio.play();
});

// Contador de tempo desde o início do relacionamento
const dataInicio = new Date('2025-03-02'); // Data do início do relacionamento
const hoje = new Date();

let anos = hoje.getFullYear() - dataInicio.getFullYear();
let meses = hoje.getMonth() - dataInicio.getMonth();
let dias = hoje.getDate() - (dataInicio.getDate() + 1);

function morforlogia(value, singular, plural) {
    return value === 1 ? singular : plural;
}

function formatarTempo(anos, meses, dias) {
    let partes = [];
    if (anos > 0) partes.push(`${anos} ${morforlogia(anos, 'ano', 'anos')}`);
    if (meses > 0) partes.push(`${meses} ${morforlogia(meses, 'mês', 'meses')}`);
    if (dias > 0) partes.push(`${dias} ${morforlogia(dias, 'dia', 'dias')}`);
    return partes.join(', ').replace(/,([^,]*)$/, ' e$1');
}

if (anos === 0 && meses === 0 && dias === 0) {
    diasContador.textContent = "Hoje é o nosso primeiro dia juntos! 💖";
} else if (anos === 0 && meses === 0 && dias === 1) {
    diasContador.textContent = `Estamos juntos há 1 dia!`;
} else if (anos === 0 && meses === 0 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${dias} dias!`;
} else {
    diasContador.textContent = `Estamos juntos há ${formatarTempo(anos, meses, dias)}!`;
}