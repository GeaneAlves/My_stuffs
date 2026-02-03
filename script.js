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


// Seleciona os elementos do HTML
const slidesContainer = document.getElementById("carousel-slides");
const slides = slidesContainer.children;
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0; // Começa na primeira imagem

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const width = slides[0].clientWidth; // Largura de uma imagem
    // Move o container para a esquerda baseado no índice atual
    slidesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Evento do botão "Próximo"
nextBtn.addEventListener("click", () => {
    currentIndex++;
    // Se chegar no fim, volta para o começo (loop)
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

// Evento do botão "Anterior"
prevBtn.addEventListener("click", () => {
    currentIndex--;
    // Se estiver no começo e voltar, vai para o último
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
});

// Ajusta o carrossel se a pessoa redimensionar a janela
window.addEventListener("resize", updateCarousel);


// --- LÓGICA DO SEGUNDO CARROSSEL (FAVORITOS) ---

const slidesContainerFav = document.getElementById("carousel-favoritos");
const slidesFav = slidesContainerFav.children;
const nextBtnFav = document.getElementById("nextBtnFav");
const prevBtnFav = document.getElementById("prevBtnFav");

let currentIndexFav = 0;

function updateCarouselFav() {
    const width = slidesFav[0].clientWidth;
    slidesContainerFav.style.transform = `translateX(-${currentIndexFav * width}px)`;
}

nextBtnFav.addEventListener("click", () => {
    currentIndexFav++;
    if (currentIndexFav >= slidesFav.length) {
        currentIndexFav = 0;
    }
    updateCarouselFav();
});

prevBtnFav.addEventListener("click", () => {
    currentIndexFav--;
    if (currentIndexFav < 0) {
        currentIndexFav = slidesFav.length - 1;
    }
    updateCarouselFav();
});

// Atualiza o segundo carrossel se redimensionar a tela
window.addEventListener("resize", updateCarouselFav);