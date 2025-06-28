// Dados do jogo
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correct: 2
    },
    {
        question: "Quantos planetas existem no sistema solar?",
        options: ["7", "8", "9", "10"],
        correct: 1
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correct: 2
    },
    {
        question: "Em que ano o Brasil se tornou independente?",
        options: ["1808", "1822", "1889", "1891"],
        correct: 1
    },
    {
        question: "Qual é o elemento químico mais abundante no universo?",
        options: ["Hélio", "Hidrogênio", "Carbono", "Oxigênio"],
        correct: 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        correct: 1
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante africano", "Girafa", "Rinoceronte", "Hipopótamo"],
        correct: 0
    },
    {
        question: "Quantos lados tem um hexágono?",
        options: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        question: "Qual é o nome do processo de transformação da água em vapor?",
        options: ["Condensação", "Evaporação", "Solidificação", "Fusão"],
        correct: 1
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["Índia", "China", "Estados Unidos", "Indonésia"],
        correct: 1
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Eça de Queirós", "Lima Barreto"],
        correct: 0
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Deserto do Saara", "Deserto do Gobi", "Deserto da Arábia", "Deserto do Atacama"],
        correct: 0
    },
    {
        question: "Em que ano foi lançado o primeiro iPhone?",
        options: ["2005", "2006", "2007", "2008"],
        correct: 2
    },
    {
        question: "Qual é o nome do criador do Facebook?",
        options: ["Bill Gates", "Mark Zuckerberg", "Steve Jobs", "Elon Musk"],
        correct: 1
    },
    {
        question: "Quantos jogadores tem uma equipe de futebol em campo?",
        options: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        question: "Qual é o metal mais precioso do mundo?",
        options: ["Ouro", "Prata", "Platina", "Ródio"],
        correct: 3
    },
    {
        question: "Quem dirigiu o filme 'Titanic'?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
        correct: 1
    },
    {
        question: "Qual é o nome da maior estrela do nosso sistema solar?",
        options: ["Lua", "Marte", "Sol", "Vênus"],
        correct: 2
    },
    {
        question: "Em que país nasceu Albert Einstein?",
        options: ["Alemanha", "Estados Unidos", "Suíça", "Áustria"],
        correct: 0
    },
    {
        question: "Qual é o nome do processo de fotossíntese?",
        options: ["Respiração", "Digestão", "Fotossíntese", "Circulação"],
        correct: 2
    },
    {
        question: "Quem compôs a 'Nona Sinfonia'?",
        options: ["Mozart", "Beethoven", "Bach", "Chopin"],
        correct: 1
    },
    {
        question: "Qual é o maior mamífero do mundo?",
        options: ["Elefante", "Baleia-azul", "Girafa", "Rinoceronte"],
        correct: 1
    },
    {
        question: "Em que ano começou a Segunda Guerra Mundial?",
        options: ["1937", "1938", "1939", "1940"],
        correct: 2
    },
    {
        question: "Qual é o nome da capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        question: "Quantos ossos tem o corpo humano adulto?",
        options: ["156", "206", "256", "306"],
        correct: 1
    }
];

// Variáveis do jogo
let currentQuestion = 0;
let score = 0;
let gameState = 'start'; // 'start', 'playing', 'end'

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const finalScoreElement = document.getElementById('final-score');
const performanceMessageElement = document.getElementById('performance-message');
const feedbackElement = document.getElementById('feedback');

// Event listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

// Função para iniciar o jogo
function startGame() {
    gameState = 'playing';
    currentQuestion = 0;
    score = 0;
    updateScore();
    showScreen('game');
    loadQuestion();
}

// Função para reiniciar o jogo
function restartGame() {
    startGame();
}

// Função para mostrar uma tela específica
function showScreen(screenName) {
    // Esconder todas as telas
    startScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    endScreen.classList.remove('active');
    
    // Mostrar a tela desejada
    switch(screenName) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'game':
            gameScreen.classList.add('active');
            break;
        case 'end':
            endScreen.classList.add('active');
            break;
    }
}

// Função para carregar uma pergunta
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }
    
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionElement.textContent = currentQuestion + 1;
    totalQuestionsElement.textContent = questions.length;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Criar opções
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Esconder feedback
    feedbackElement.style.display = 'none';
    feedbackElement.className = 'feedback';
}

// Função para selecionar uma opção
function selectOption(selectedIndex) {
    const question = questions[currentQuestion];
    const options = optionsContainer.querySelectorAll('.option');
    
    // Desabilitar todas as opções
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Marcar a opção selecionada
    options[selectedIndex].classList.add('selected');
    
    // Verificar se está correta
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score += 10;
        updateScore();
        showFeedback('Correto! 🎉', 'correct');
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        showFeedback('Incorreto! 😔', 'incorrect');
    }
    
    // Próxima pergunta após 2 segundos
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 2000);
}

// Função para mostrar feedback
function showFeedback(message, type) {
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback ${type}`;
    feedbackElement.style.display = 'block';
}

// Função para atualizar a pontuação
function updateScore() {
    scoreElement.textContent = score;
}

// Função para finalizar o jogo
function endGame() {
    gameState = 'end';
    finalScoreElement.textContent = score;
    
    // Mensagem baseada na performance
    const percentage = (score / (questions.length * 10)) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = 'Excelente! Você é um gênio! 🌟';
    } else if (percentage >= 70) {
        message = 'Muito bem! Você tem bons conhecimentos! 👍';
    } else if (percentage >= 50) {
        message = 'Bom trabalho! Continue estudando! 📚';
    } else {
        message = 'Não desanime! Pratique mais! 💪';
    }
    
    performanceMessageElement.textContent = message;
    showScreen('end');
}

// Inicializar o jogo
document.addEventListener('DOMContentLoaded', () => {
    showScreen('start');
});

// Adicionar efeitos sonoros (opcional)
function playSound(type) {
    // Aqui você pode adicionar sons se quiser
    // Por exemplo, usando Web Audio API
}

// Adicionar animações extras
function addPulseEffect(element) {
    element.style.animation = 'pulse 0.3s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

// CSS adicional para animações (pode ser adicionado ao style.css)
const additionalCSS = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
`;

// Adicionar CSS dinamicamente
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style); 