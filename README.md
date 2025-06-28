# 🎮 Quiz Game - Jogo de Perguntas e Respostas

Um jogo de quiz interativo desenvolvido em JavaScript puro, HTML e CSS.

## 🚀 Como Jogar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Clique em "Começar Jogo"** para iniciar
3. **Responda as perguntas** clicando na opção que você acredita estar correta
4. **Veja seu feedback** imediatamente após cada resposta
5. **Acompanhe sua pontuação** durante o jogo
6. **Veja seu resultado final** ao terminar todas as perguntas

## 🎯 Características do Jogo

- **25 perguntas** sobre diversos temas (geografia, ciência, história, literatura, tecnologia, esportes, etc.)
- **Sistema de pontuação**: 10 pontos por resposta correta
- **Feedback visual** para respostas corretas e incorretas
- **Interface responsiva** que funciona em desktop e mobile
- **Design moderno** com animações suaves
- **Mensagens motivacionais** baseadas na performance

## 📚 Temas das Perguntas

- **Geografia**: Capitais, países, oceanos, desertos
- **Ciência**: Química, biologia, astronomia, anatomia
- **História**: Datas importantes, personalidades históricas
- **Literatura**: Autores brasileiros e obras clássicas
- **Tecnologia**: Invenções, criadores de empresas
- **Esportes**: Regras e curiosidades
- **Arte e Cultura**: Pintores, músicos, filmes
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

## 🎨 Personalização

### Adicionar Novas Perguntas

Para adicionar novas perguntas, edite o array `questions` no arquivo `script.js`:

```javascript
const questions = [
    {
        question: "Sua pergunta aqui?",
        options: ["Opção A", "Opção B", "Opção C", "Opção D"],
        correct: 0 // Índice da opção correta (0-3)
    },
    // ... mais perguntas
];
```

### Modificar o Design

Edite o arquivo `style.css` para personalizar cores, fontes e layout.

## 🎯 Como Funciona

1. **Tela Inicial**: Apresentação do jogo com botão para começar
2. **Tela do Jogo**: Exibe perguntas, opções e pontuação atual
3. **Feedback**: Mostra se a resposta está correta ou incorreta
4. **Tela Final**: Exibe pontuação total e mensagem de performance

## 🌟 Recursos Extras

- **Animações CSS** para transições suaves
- **Design responsivo** para diferentes tamanhos de tela
- **Feedback visual** com cores diferentes para acertos e erros
- **Sistema de pontuação** em tempo real
- **Mensagens motivacionais** personalizadas

## 🚀 Como Executar

1. Baixe todos os arquivos para uma pasta
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Divirta-se jogando!

## 📱 Compatibilidade

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

---

**Desenvolvido com ❤️ em JavaScript puro** 