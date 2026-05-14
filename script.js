/**
 * PROJETO AGRINHO 2026
 * TEMA: Agro Forte, Futuro Sustentável
 * Objetivo: Demonstrar lógica de programação e interatividade.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNÇÃO 1: CÁLCULO DE SUSTENTABILIDADE ---
    const btnCalc = document.getElementById('btn-calcular');
    const areaInput = document.getElementById('area-input');
    const displayResultado = document.getElementById('resultado');

    btnCalc.addEventListener('click', () => {
        const hectares = parseFloat(areaInput.value);
        
        if (isNaN(hectares) || hectares <= 0) {
            displayResultado.innerHTML = "Por favor, insira um número válido.";
            displayResultado.style.color = "red";
            return;
        }

        // Lógica: Irrigação de precisão economiza média de 2.500 litros/hectare/dia
        const economiaTotal = hectares * 2500;
        
        displayResultado.style.color = "#1b4332";
        displayResultado.innerHTML = `
            <h3>Resultado do Impacto:</h3>
            <p>Ao adotar tecnologia sustentável em ${hectares} hectares, 
            você preserva cerca de <strong>${economiaTotal.toLocaleString()} litros</strong> de água todos os dias!</p>
        `;
    });

    // --- FUNÇÃO 2: DARK MODE (MANIPULAÇÃO DE DOM) ---
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Feedback visual no console para depuração
        const mode = document.body.classList.contains('dark-mode') ? "Escuro" : "Claro";
        console.log(`Modo de visualização alterado para: ${mode}`);
    });

    // --- FUNÇÃO 3: SCROLL SUAVE PARA LINKS ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
