// Dados do jogo
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correct: 2,
        difficulty: "fácil",
        hint: "É uma cidade planejada"
    },
    {
        question: "Quantos planetas existem no sistema solar?",
        options: ["7", "8", "9", "10"],
        correct: 1,
        difficulty: "fácil",
        hint: "Plutão não é mais considerado um planeta"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correct: 2,
        difficulty: "fácil",
        hint: "Cobre cerca de 1/3 da superfície da Terra"
    },
    {
        question: "Em que ano o Brasil se tornou independente?",
        options: ["1808", "1822", "1889", "1891"],
        correct: 1,
        difficulty: "médio",
        hint: "Dia 7 de setembro"
    },
    {
        question: "Qual é o elemento químico mais abundante no universo?",
        options: ["Hélio", "Hidrogênio", "Carbono", "Oxigênio"],
        correct: 1,
        difficulty: "médio",
        hint: "É o elemento mais simples da tabela periódica"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        correct: 1,
        difficulty: "fácil",
        hint: "Pintor italiano renascentista"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante africano", "Girafa", "Rinoceronte", "Hipopótamo"],
        correct: 0,
        difficulty: "fácil",
        hint: "Vive na África"
    },
    {
        question: "Quantos lados tem um hexágono?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        difficulty: "fácil",
        hint: "Hexa = seis"
    },
    {
        question: "Qual é o nome do processo de transformação da água em vapor?",
        options: ["Condensação", "Evaporação", "Solidificação", "Fusão"],
        correct: 1,
        difficulty: "médio",
        hint: "Acontece quando a água esquenta"
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["Índia", "China", "Estados Unidos", "Indonésia"],
        correct: 1,
        difficulty: "fácil",
        hint: "Tem mais de 1 bilhão de habitantes"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Eça de Queirós", "Lima Barreto"],
        correct: 0,
        difficulty: "médio",
        hint: "Autor brasileiro do século XIX"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Deserto do Saara", "Deserto do Gobi", "Deserto da Arábia", "Deserto do Atacama"],
        correct: 0,
        difficulty: "fácil",
        hint: "Fica no continente africano"
    },
    {
        question: "Em que ano foi lançado o primeiro iPhone?",
        options: ["2005", "2006", "2007", "2008"],
        correct: 2,
        difficulty: "médio",
        hint: "Steve Jobs apresentou pessoalmente"
    },
    {
        question: "Qual é o nome do criador do Facebook?",
        options: ["Bill Gates", "Mark Zuckerberg", "Steve Jobs", "Elon Musk"],
        correct: 1,
        difficulty: "fácil",
        hint: "Criou quando era estudante universitário"
    },
    {
        question: "Quantos jogadores tem uma equipe de futebol em campo?",
        options: ["9", "10", "11", "12"],
        correct: 2,
        difficulty: "fácil",
        hint: "Incluindo o goleiro"
    },
    {
        question: "Qual é o metal mais precioso do mundo?",
        options: ["Ouro", "Prata", "Platina", "Ródio"],
        correct: 3,
        difficulty: "difícil",
        hint: "Metal raro da família da platina"
    },
    {
        question: "Qual é o nome da maior estrela do nosso sistema solar?",
        options: ["Lua", "Marte", "Sol", "Vênus"],
        correct: 2,
        difficulty: "fácil",
        hint: "Fonte de luz e calor para a Terra"
    },
    {
        question: "Em que país nasceu Albert Einstein?",
        options: ["Alemanha", "Estados Unidos", "Suíça", "Áustria"],
        correct: 0,
        difficulty: "médio",
        hint: "País da Europa Central"
    },
    {
        question: "Qual é o nome do processo de fotossíntese?",
        options: ["Respiração", "Digestão", "Fotossíntese", "Circulação"],
        correct: 2,
        difficulty: "médio",
        hint: "Processo que as plantas usam para produzir alimento"
    },
    {
        question: "Quem compôs a 'Nona Sinfonia'?",
        options: ["Mozart", "Beethoven", "Bach", "Chopin"],
        correct: 1,
        difficulty: "médio",
        hint: "Compositor alemão que ficou surdo"
    },
    {
        question: "Qual é o maior mamífero do mundo?",
        options: ["Elefante", "Baleia-azul", "Girafa", "Rinoceronte"],
        correct: 1,
        difficulty: "fácil",
        hint: "Vive no oceano"
    },
    {
        question: "Em que ano começou a Segunda Guerra Mundial?",
        options: ["1937", "1938", "1939", "1940"],
        correct: 2,
        difficulty: "médio",
        hint: "Invasão da Polônia"
    },
    {
        question: "Qual é o nome da capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2,
        difficulty: "difícil",
        hint: "Não é a cidade mais conhecida"
    },
    {
        question: "Quantos ossos tem o corpo humano adulto?",
        options: ["156", "206", "256", "306"],
        correct: 1,
        difficulty: "médio",
        hint: "Entre 200 e 210"
    },
    {
        question: "Quem foi Luís de Camões?",
        options: ["Um rei português", "Um poeta português", "Um navegador", "Um pintor"],
        correct: 1,
        difficulty: "médio",
        hint: "Autor de 'Os Lusíadas'"
    },
    {
        question: "Em que continente está localizado Portugal?",
        options: ["Ásia", "África", "Europa", "América"],
        correct: 2,
        difficulty: "fácil",
        hint: "Fica na Península Ibérica"
    },
    {
        question: "Qual é a capital de Portugal?",
        options: ["Porto", "Lisboa", "Coimbra", "Braga"],
        correct: 1,
        difficulty: "fácil",
        hint: "Cidade às margens do rio Tejo"
    },
    {
        question: "Qual é o rio mais importante de Portugal?",
        options: ["Rio Douro", "Rio Tejo", "Rio Mondego", "Rio Guadiana"],
        correct: 1,
        difficulty: "médio",
        hint: "Atravessa a capital portuguesa"
    }
];

// Variáveis do jogo
let currentQuestion = 0;
let score = 0;
let gameState = 'start'; // 'start', 'playing', 'end'
let timeLeft = 30; // Timer de 30 segundos por pergunta
let timerInterval;
let currentDifficulty = 'todos'; // 'fácil', 'médio', 'difícil', 'todos'
let hintsUsed = 0;
let maxHints = 5; // Máximo de dicas por jogo
let streak = 0; // Sequência de acertos
let bestScore = localStorage.getItem('quizBestScore') || 0;
let gamesPlayed = localStorage.getItem('quizGamesPlayed') || 0;

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

// Novos elementos para funcionalidades extras
let timerElement;
let difficultySelect;
let hintBtn;
let hintElement;
let streakElement;
let bestScoreElement;
let gamesPlayedElement;
let soundToggle;
let musicToggle;

// Event listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

// Função para criar elementos extras
function createExtraElements() {
    // Timer
    timerElement = document.createElement('div');
    timerElement.className = 'timer';
    timerElement.innerHTML = '<span id="time-left">30</span>s';
    document.querySelector('.header').appendChild(timerElement);
    
    // Seletor de dificuldade
    difficultySelect = document.createElement('select');
    difficultySelect.className = 'difficulty-select';
    difficultySelect.innerHTML = `
        <option value="todos">Todas as dificuldades</option>
        <option value="fácil">Fácil</option>
        <option value="médio">Médio</option>
        <option value="difícil">Difícil</option>
    `;
    startScreen.appendChild(difficultySelect);
    
    // Botão de dica
    hintBtn = document.createElement('button');
    hintBtn.className = 'hint-btn';
    hintBtn.textContent = '💡 Dica';
    hintBtn.addEventListener('click', showHint);
    document.querySelector('.question-container').appendChild(hintBtn);
    
    // Elemento de dica
    hintElement = document.createElement('div');
    hintElement.className = 'hint';
    hintElement.style.display = 'none';
    document.querySelector('.question-container').appendChild(hintElement);
    
    // Elemento de sequência
    streakElement = document.createElement('div');
    streakElement.className = 'streak';
    streakElement.innerHTML = '🔥 Sequência: <span id="streak-count">0</span>';
    document.querySelector('.header').appendChild(streakElement);
    
    // Melhor pontuação
    bestScoreElement = document.createElement('div');
    bestScoreElement.className = 'best-score';
    bestScoreElement.innerHTML = '🏆 Melhor: <span id="best-score-display">' + bestScore + '</span>';
    startScreen.appendChild(bestScoreElement);
    
    // Jogos jogados
    gamesPlayedElement = document.createElement('div');
    gamesPlayedElement.className = 'games-played';
    gamesPlayedElement.innerHTML = '🎮 Jogos: <span id="games-played-display">' + gamesPlayed + '</span>';
    startScreen.appendChild(gamesPlayedElement);
    
    // Toggle de som
    soundToggle = document.createElement('button');
    soundToggle.className = 'sound-toggle';
    soundToggle.innerHTML = '🔊';
    soundToggle.addEventListener('click', toggleSound);
    document.querySelector('.container').appendChild(soundToggle);
}

// Função para iniciar o jogo
function startGame() {
    gameState = 'playing';
    currentQuestion = 0;
    score = 0;
    streak = 0;
    hintsUsed = 0;
    currentDifficulty = difficultySelect.value;
    timeLeft = 30;
    
    updateScore();
    updateStreak();
    showScreen('game');
    loadQuestion();
    startTimer();
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

// Função para filtrar perguntas por dificuldade
function getFilteredQuestions() {
    if (currentDifficulty === 'todos') {
        return questions;
    }
    return questions.filter(q => q.difficulty === currentDifficulty);
}

// Função para carregar uma pergunta
function loadQuestion() {
    const filteredQuestions = getFilteredQuestions();
    
    if (currentQuestion >= filteredQuestions.length) {
        endGame();
        return;
    }
    
    const question = filteredQuestions[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionElement.textContent = currentQuestion + 1;
    totalQuestionsElement.textContent = filteredQuestions.length;
    
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
    
    // Esconder feedback e dica
    feedbackElement.style.display = 'none';
    feedbackElement.className = 'feedback';
    hintElement.style.display = 'none';
    
    // Resetar timer
    timeLeft = 30;
    updateTimer();
    
    // Atualizar botão de dica
    updateHintButton();
}

// Função para iniciar timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

// Função para atualizar timer
function updateTimer() {
    if (timerElement) {
        const timeElement = timerElement.querySelector('#time-left');
        if (timeElement) {
            timeElement.textContent = timeLeft;
            
            // Mudar cor baseado no tempo restante
            if (timeLeft <= 10) {
                timeElement.style.color = '#e53e3e';
                addPulseEffect(timeElement);
            } else if (timeLeft <= 20) {
                timeElement.style.color = '#d69e2e';
            } else {
                timeElement.style.color = '#38a169';
            }
        }
    }
}

// Função para quando o tempo acaba
function timeUp() {
    const options = optionsContainer.querySelectorAll('.option');
    const question = getFilteredQuestions()[currentQuestion];
    
    // Desabilitar todas as opções
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mostrar resposta correta
    options[question.correct].classList.add('correct');
    showFeedback('Tempo esgotado! ⏰', 'incorrect');
    
    // Próxima pergunta após 2 segundos
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
        startTimer();
    }, 2000);
}

// Função para selecionar uma opção
function selectOption(selectedIndex) {
    clearInterval(timerInterval);
    
    const filteredQuestions = getFilteredQuestions();
    const question = filteredQuestions[currentQuestion];
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
        streak++;
        
        // Bônus por sequência
        if (streak >= 3) {
            score += 5;
            showFeedback(`Correto! 🎉 +5 bônus por sequência!`, 'correct');
        } else {
            showFeedback('Correto! 🎉', 'correct');
        }
        
        updateScore();
        updateStreak();
        playSound('correct');
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        streak = 0;
        showFeedback('Incorreto! 😔', 'incorrect');
        updateStreak();
        playSound('incorrect');
    }
    
    // Próxima pergunta após 2 segundos
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
        startTimer();
    }, 2000);
}

// Função para mostrar dica
function showHint() {
    if (hintsUsed < maxHints) {
        const filteredQuestions = getFilteredQuestions();
        const question = filteredQuestions[currentQuestion];
        
        hintElement.textContent = `💡 Dica: ${question.hint}`;
        hintElement.style.display = 'block';
        hintsUsed++;
        updateHintButton();
        
        // Penalidade por usar dica
        score = Math.max(0, score - 2);
        updateScore();
        
        playSound('hint');
    }
}

// Função para atualizar botão de dica
function updateHintButton() {
    if (hintBtn) {
        hintBtn.textContent = `💡 Dica (${maxHints - hintsUsed})`;
        hintBtn.disabled = hintsUsed >= maxHints;
    }
}

// Função para atualizar sequência
function updateStreak() {
    const streakCount = document.getElementById('streak-count');
    if (streakCount) {
        streakCount.textContent = streak;
        
        if (streak >= 3) {
            streakElement.style.color = '#e53e3e';
            addPulseEffect(streakElement);
        } else {
            streakElement.style.color = '#4a5568';
        }
    }
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
    clearInterval(timerInterval);
    gameState = 'end';
    
    // Atualizar recordes
    gamesPlayed++;
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('quizBestScore', bestScore);
    }
    localStorage.setItem('quizGamesPlayed', gamesPlayed);
    
    finalScoreElement.textContent = score;
    
    // Mensagem baseada na performance
    const filteredQuestions = getFilteredQuestions();
    const percentage = (score / (filteredQuestions.length * 10)) * 100;
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
    
    // Atualizar elementos de estatísticas
    updateStats();
}

// Função para atualizar estatísticas
function updateStats() {
    const bestScoreDisplay = document.getElementById('best-score-display');
    const gamesPlayedDisplay = document.getElementById('games-played-display');
    
    if (bestScoreDisplay) bestScoreDisplay.textContent = bestScore;
    if (gamesPlayedDisplay) gamesPlayedDisplay.textContent = gamesPlayed;
}

// Função para tocar sons
function playSound(type) {
    // Criar contexto de áudio
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    let frequency, duration;
    
    switch(type) {
        case 'correct':
            frequency = 800;
            duration = 0.2;
            break;
        case 'incorrect':
            frequency = 200;
            duration = 0.3;
            break;
        case 'hint':
            frequency = 600;
            duration = 0.1;
            break;
        default:
            return;
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Função para alternar som
function toggleSound() {
    if (soundToggle.innerHTML === '🔊') {
        soundToggle.innerHTML = '🔇';
        // Desabilitar som
    } else {
        soundToggle.innerHTML = '🔊';
        // Habilitar som
    }
}

// Função para adicionar efeito de pulso
function addPulseEffect(element) {
    element.style.animation = 'pulse 0.3s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

// Inicializar o jogo
document.addEventListener('DOMContentLoaded', () => {
    createExtraElements();
    showScreen('start');
    updateStats();
});

// CSS adicional para animações (pode ser adicionado ao style.css)
const additionalCSS = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.timer {
    background: #f7fafc;
    padding: 8px 12px;
    border-radius: 20px;
    font-weight: 600;
    color: #38a169;
}

.difficulty-select {
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    font-size: 1rem;
    cursor: pointer;
}

.hint-btn {
    background: #f6ad55;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    margin: 10px 0;
    transition: all 0.3s ease;
}

.hint-btn:hover:not(:disabled) {
    background: #ed8936;
    transform: translateY(-1px);
}

.hint-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.hint {
    background: #e6fffa;
    border: 1px solid #81e6d9;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 0;
    color: #234e52;
    font-style: italic;
}

.streak {
    background: #f7fafc;
    padding: 8px 12px;
    border-radius: 20px;
    font-weight: 600;
    color: #4a5568;
}

.best-score, .games-played {
    background: #f7fafc;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 5px 0;
    font-weight: 600;
    color: #4a5568;
}

.sound-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.sound-toggle:hover {
    background: #5a67d8;
    transform: scale(1.1);
}
`;

// Adicionar CSS dinamicamente
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style); 