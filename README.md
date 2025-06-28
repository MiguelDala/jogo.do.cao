# 🎮 Quiz Game - Jogo de Perguntas e Respostas

Um jogo de quiz interativo desenvolvido em JavaScript puro, HTML e CSS com funcionalidades avançadas.

## 🚀 Como Jogar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Escolha a dificuldade** (Fácil, Médio, Difícil ou Todas)
3. **Clique em "Começar Jogo"** para iniciar
4. **Responda as perguntas** clicando na opção que você acredita estar correta
5. **Use dicas** quando precisar de ajuda (máximo 5 por jogo)
6. **Acompanhe o tempo** - você tem 30 segundos por pergunta
7. **Veja seu feedback** imediatamente após cada resposta
8. **Acompanhe sua pontuação** e sequência de acertos
9. **Veja seu resultado final** ao terminar todas as perguntas

## 🎯 Características do Jogo

- **25 perguntas** sobre diversos temas (geografia, ciência, história, literatura, tecnologia, esportes, Portugal, etc.)
- **Sistema de pontuação**: 10 pontos por resposta correta
- **Timer de 30 segundos** por pergunta com alertas visuais
- **Sistema de dicas** com penalidade de 2 pontos por uso
- **Sequência de acertos** com bônus de 5 pontos para 3+ acertos seguidos
- **Níveis de dificuldade**: Fácil, Médio, Difícil
- **Sistema de recordes** salvo no navegador
- **Efeitos sonoros** para acertos, erros e dicas
- **Feedback visual** para respostas corretas e incorretas
- **Interface responsiva** que funciona em desktop e mobile
- **Design moderno** com animações suaves
- **Mensagens motivacionais** baseadas na performance

## 🆕 Novas Funcionalidades

### ⏰ Timer Inteligente
- **30 segundos** por pergunta
- **Cores dinâmicas**: Verde (>20s), Amarelo (10-20s), Vermelho (<10s)
- **Efeito de pulso** quando o tempo está acabando
- **Resposta automática** quando o tempo esgota

### 💡 Sistema de Dicas
- **5 dicas** disponíveis por jogo
- **Dicas personalizadas** para cada pergunta
- **Penalidade de 2 pontos** por uso de dica
- **Botão desabilitado** quando as dicas acabam

### 🏆 Sistema de Recordes
- **Melhor pontuação** salva automaticamente
- **Contador de jogos** jogados
- **Persistência** usando localStorage
- **Exibição em tempo real** das estatísticas

### 🔥 Sequência de Acertos
- **Contador de sequência** visível durante o jogo
- **Bônus de 5 pontos** para 3+ acertos seguidos
- **Reset da sequência** quando erra
- **Efeito visual** quando atinge sequência alta

### 🎵 Efeitos Sonoros
- **Som de acerto** (frequência alta)
- **Som de erro** (frequência baixa)
- **Som de dica** (frequência média)
- **Toggle para ligar/desligar** sons
- **Sintetizador de áudio** nativo do navegador

### 📊 Níveis de Dificuldade
- **Fácil**: Perguntas básicas de conhecimento geral
- **Médio**: Perguntas intermediárias
- **Difícil**: Perguntas mais específicas
- **Todas**: Mistura de todas as dificuldades

## 📚 Temas das Perguntas

- **Geografia**: Capitais, países, oceanos, desertos, rios
- **Ciência**: Química, biologia, astronomia, anatomia
- **História**: Datas importantes, personalidades históricas
- **Literatura**: Autores brasileiros, obras clássicas, Camões
- **Tecnologia**: Invenções, criadores de empresas
- **Esportes**: Regras e curiosidades
- **Arte e Cultura**: Pintores, músicos
- **Portugal**: História, geografia, cultura portuguesa
- **Conhecimentos Gerais**: Fatos interessantes e curiosidades

## 📁 Estrutura dos Arquivos

```
quiz-game/
├── index.html      # Estrutura HTML do jogo
├── style.css       # Estilos e design
├── script.js       # Lógica do jogo
└── README.md       # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e animações
- **JavaScript (ES6+)** - Lógica do jogo
- **Web Audio API** - Efeitos sonoros
- **localStorage** - Persistência de dados

## 🎨 Personalização

### Adicionar Novas Perguntas

Para adicionar novas perguntas, edite o array `questions` no arquivo `script.js`:

```javascript
{
    question: "Sua pergunta aqui?",
    options: ["Opção A", "Opção B", "Opção C", "Opção D"],
    correct: 0, // Índice da opção correta (0-3)
    difficulty: "fácil", // "fácil", "médio", "difícil"
    hint: "Sua dica aqui"
}
```

### Modificar Configurações

- **Timer**: Altere `timeLeft = 30` para mudar o tempo por pergunta
- **Dicas**: Altere `maxHints = 5` para mudar o número máximo de dicas
- **Bônus**: Altere o valor do bônus por sequência na função `selectOption`

## 🎯 Como Funciona

1. **Tela Inicial**: Escolha dificuldade, veja recordes e estatísticas
2. **Tela do Jogo**: Exibe perguntas, timer, sequência e opções
3. **Sistema de Dicas**: Clique no botão de dica para obter ajuda
4. **Feedback**: Mostra se a resposta está correta ou incorreta
5. **Tela Final**: Exibe pontuação total, recordes e mensagem de performance

## 🌟 Recursos Extras

- **Animações CSS** para transições suaves
- **Design responsivo** para diferentes tamanhos de tela
- **Feedback visual** com cores diferentes para acertos e erros
- **Sistema de pontuação** em tempo real com bônus
- **Mensagens motivacionais** personalizadas
- **Efeitos sonoros** imersivos
- **Sistema de recordes** persistente
- **Timer inteligente** com alertas visuais
- **Sistema de dicas** estratégico

## 🚀 Como Executar

1. Baixe todos os arquivos para uma pasta
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Escolha a dificuldade desejada
4. Divirta-se jogando!

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎮 Dicas para Jogar

- **Use as dicas estrategicamente** - elas custam pontos!
- **Mantenha a sequência** - acertos seguidos dão bônus
- **Acompanhe o timer** - não deixe o tempo acabar
- **Escolha a dificuldade** adequada ao seu nível
- **Tente bater seu recorde** - o jogo salva automaticamente

---

**Desenvolvido com ❤️ em JavaScript puro** 