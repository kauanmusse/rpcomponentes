
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter valores do formulário
        const tipo = document.getElementById('tipo').value.toUpperCase();
        const RI = parseFloat(document.getElementById('RI').value) || null;
        const HEX = parseFloat(document.getElementById('HEX').value) || null;
        const LARG = parseFloat(document.getElementById('LARG').value) || null;
        const ALT = tipo === 'HE' || tipo === 'HI' ? parseFloat(document.getElementById('ALT').value) || null : null;

        const medidas = { RI, HEX, LARG };
        if (ALT !== null) {
            medidas.ALT = ALT;
        }

        // Encontrar componentes compatíveis
        const componentesCompatíveis = encontrarComponentes(tipo, medidas);

        // Exibir resultados
        exibirResultados(componentesCompatíveis);
    });
});


/*function exibirResultados(componentes) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpar resultados anteriores

    if (componentes.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhum componente compatível encontrado.</p>';
        return;
    }

    const lista = document.createElement('ul');
    for (const { nome, compatibilidade } of componentes) {
        const item = document.createElement('li');
        item.textContent = ${nome} - Compatibilidade: ${compatibilidade.toFixed(2)}%;
        lista.appendChild(item);
    }

    resultsContainer.appendChild(lista);
}
*/

function exibirResultados(componentes) {
    localStorage.setItem('resultados', JSON.stringify(componentes));
    window.location.href = '../resultados/resultados.html'; // Redireciona para a página de resultados
}