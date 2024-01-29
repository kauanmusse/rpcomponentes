document.addEventListener('DOMContentLoaded', function() {
    const resultados = JSON.parse(localStorage.getItem('resultados')) || [];
    exibirResultadosNaPagina(resultados);
});
function exibirResultadosNaPagina(componentes) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpar resultados anteriores

    const lista = document.createElement('ul');

    if (componentes.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'Nenhum componente compatível encontrado.';
        noResultsItem.classList.add('result-item'); // Certifique-se de que esta classe esteja definida no CSS
        lista.appendChild(noResultsItem);
    } else {
        for (const { nome, compatibilidade } of componentes) {
            const item = document.createElement('li');
            item.textContent = `${nome} - Compatibilidade: ${compatibilidade.toFixed(2)}%`;
            item.classList.add('result-item'); // Esta classe deve ser usada para estilização
            lista.appendChild(item);
        }
    }

    resultsContainer.appendChild(lista);
}
