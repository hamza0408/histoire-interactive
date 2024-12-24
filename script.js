let currentScene = 0;

const storyText = [
    "Bienvenue dans l’histoire interactive : Le Voyage du Cœur !",
    "Un matin, Alex trouve un message mystérieux sous sa porte. 'Si tu cherches la vérité, le vieux chêne du carrefour est ton destin.'",
    "Alex décide de se rendre au vieux chêne à la tombée de la nuit...",
    "La vieille femme vous dit : 'Je suis la Gardienne des Secrets. Tu veux la vérité, mais es-tu prêt ?'",
    "Regardez dans le miroir et découvrez la vérité sur votre vie."
];

const choices = [
    ["Commencer l'aventure", "startStory()"],
    ["Aller au vieux chêne", "goToTree()"],
    ["Ignorer le message", "ignoreMessage()"],
    ["Regarder dans le miroir", "lookInMirror()"]
];

function startStory() {
    updateStory(storyText[1]);
    showChoices([choices[1], choices[2]]);
}

function goToTree() {
    updateStory(storyText[2]);
    showChoices([choices[0], choices[1]]);
}

function ignoreMessage() {
    updateStory("Vous avez décidé d'ignorer le message et de continuer votre vie quotidienne.");
}

function lookInMirror() {
    updateStory(storyText[4]);
    showChoices([choices[0]]);
}

function updateStory(text) {
    document.getElementById('story').innerHTML = `<p>${text}</p>`;
}

function showChoices(choiceArray) {
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    choiceArray.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice[0];
        button.setAttribute('onclick', choice[1]);
        choicesDiv.appendChild(button);
    });
}
