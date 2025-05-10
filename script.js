const startBtn = document.getElementById('startBtn');
const diasContador = document.getElementById('diasContador');

startBtn.addEventListener('click', () => {
    document.querySelector('header').style.display = 'none';
    startBtn.style.display = 'none';
    document.querySelector('main').style.display = 'block';
});

// Contador de tempo desde o início do relacionamento
const dataInicio = new Date('2025-03-02'); // Altere para a data do início do relacionamento
const hoje = new Date();

let anos = hoje.getFullYear() - dataInicio.getFullYear();
let meses = hoje.getMonth() - dataInicio.getMonth();
let dias = hoje.getDate() - (dataInicio.getDate() + 1);

if (anos == 0 && meses == 0 && dias == 0) {
    diasContador.textContent = "Hoje é o nosso primeiro dia juntos! 💖";
} else if (anos == 0 && meses == 0 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${dias} dia!`;
} else if (anos ==0 && meses == 0 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${dias} dias!`;
} else if (anos == 0 && meses == 1 && dias == 0) {
    diasContador.textContent = `Estamos juntos há ${meses} mês!`;
} else if (anos == 0 && meses == 1 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${meses} mês e ${dias} dia!`;
} else if (anos == 0 && meses == 1 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${meses} mês e ${dias} dias!`;
} else if (anos == 0 && meses > 1 && dias == 0) {
    diasContador.textContent = `Estamos juntos há ${meses} meses!`;
} else if (anos == 0 && meses > 1 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${meses} meses e ${dias} dia!`;
} else if (anos == 0 && meses > 1 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${meses} meses e ${dias} dias!`;
} else if (anos == 1 && meses == 0 && dias == 0) {
    diasContador.textContent = `Estamos completando ${anos} ano juntos!`;
} else if (anos == 1 && meses == 0 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${anos} ano e ${dias} dia!`;
} else if (anos == 1 && meses == 0 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${anos} ano e ${dias} dias!`;
} else if (anos == 1 && meses == 1 && dias == 0) {
    diasContador.textContent = `Estamos juntos há ${anos} ano e ${meses} mês!`;
} else if (anos == 1 && meses == 1 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${anos} ano, ${meses} mês e ${dias} dia!`;
} else if (anos == 1 && meses == 1 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${anos} ano, ${meses} mês e ${dias} dias!`;
} else if (anos == 1 && meses > 1 && dias == 0) {
    diasContador.textContent = `Estamos juntos há ${anos} ano e ${meses} meses!`;
} else if (anos == 1 && meses > 1 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${anos} ano, ${meses} meses e ${dias} dia!`;
} else if (anos == 1 && meses > 1 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${anos} ano, ${meses} meses e ${dias} dias!`;
} else if (anos > 1 && meses == 0 && dias == 0) {
    diasContador.textContent = `Estamos completando ${anos} anos juntos!`;
} else if (anos > 1 && meses == 0 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${anos} anos e ${dias} dia!`;
} else if (anos > 1 && meses == 0 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${anos} anos e ${dias} dias!`;
} else if (anos > 1 && meses == 1 && dias == 0) {
    diasContador.textContent = `Estamos juntos há ${anos} anos e ${meses} mês!`;
} else if (anos > 1 && meses == 1 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${anos} anos, ${meses} mês e ${dias} dia!`;
} else if (anos > 1 && meses == 1 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${anos} anos, ${meses} mês e ${dias} dias!`;
} else if (anos > 1 && meses > 1 && dias == 0) {
    diasContador.textContent = `Estamos juntos há ${anos} anos e ${meses} meses!`;
} else if (anos > 1 && meses > 1 && dias == 1) {
    diasContador.textContent = `Estamos juntos há ${anos} anos, ${meses} meses e ${dias} dia!`;
} else if (anos > 1 && meses > 1 && dias > 1) {
    diasContador.textContent = `Estamos juntos há ${anos} anos, ${meses} meses e ${dias} dias!`;
}