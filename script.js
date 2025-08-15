// Este é o arquivo JavaScript (JS) do seu site.
// Ele é usado para adicionar funcionalidades e interatividade.

// O código abaixo adiciona a funcionalidade de alternar entre modo claro e escuro.

// 1. Encontre o botão de alternância no seu HTML pelo seu ID
const themeToggle = document.getElementById('theme-toggle');

// 2. Encontre o corpo da página para poder alterar as classes
const body = document.body;

// 3. Adicione um "ouvinte de eventos" ao botão
// Quando o botão for clicado, a função dentro dele será executada.
themeToggle.addEventListener('click', () => {
    // 4. Alterna a classe 'dark-mode' no corpo da página
    // O método 'toggle' verifica se a classe já existe.
    // Se existir, ele a remove. Se não existir, ele a adiciona.
    body.classList.toggle('dark-mode');

    // 5. Exemplo de como salvar a preferência do usuário (opcional)
    // Isso usa o localStorage para lembrar o estado do tema
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// 6. Verifique o armazenamento local quando a página carrega
// Isso garante que o site mantenha o último tema escolhido pelo usuário
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});
