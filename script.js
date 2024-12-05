let currentStage = 0;

const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

function makeChoice(choice) {
    if (currentStage === 0) {
        if (choice === 1) {
            currentStage = 1;
            updateStory("Você segue pelo caminho à esquerda e encontra uma velha cabana no meio da floresta. O que você faz?", [
                { text: "Entrar na cabana", nextStage: 2 },
                { text: "Voltar para o caminho", nextStage: 3 }
            ]);
        } else {
            currentStage = 2;
            updateStory("Você segue pelo caminho à direita e encontra um rio. O que você faz?", [
                { text: "Tentar atravessar o rio", nextStage: 4 },
                { text: "Seguir ao longo da margem do rio", nextStage: 5 }
            ]);
        }
    } else if (currentStage === 1) {
        if (choice === 1) {
            currentStage = 6;
            updateStory("Você entra na cabana e encontra um mapa antigo. Parabéns! Você encontrou o tesouro escondido da floresta!", []);
        } else {
            currentStage = 7;
            updateStory("Você volta para o caminho e decide acampar. A aventura termina por aqui.", []);
        }
    } else if (currentStage === 2) {
        if (choice === 1) {
            currentStage = 8;
            updateStory("Você tenta atravessar o rio, mas a correnteza é forte demais. Infelizmente, você se perde. Fim da aventura.", []);
        } else {
            currentStage = 9;
            updateStory("Você segue pela margem do rio e encontra uma aldeia. As pessoas da aldeia te ajudam. Aventura concluída com sucesso!", []);
        }
    }
}

function updateStory(text, options) {
    storyText.textContent = text;
    choices.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("choice");
        button.textContent = option.text;
        button.onclick = () => makeChoice(option.nextStage);
        choices.appendChild(button);
    });
}
