let currentScene = 0;

const storyText = [
    "Bienvenue dans l�histoire interactive : Le Voyage du C�ur !",
    "Un matin, Alex trouve un message myst�rieux sous sa porte. 'Si tu cherches la v�rit�, le vieux ch�ne du carrefour est ton destin.'",
    "Alex d�cide de se rendre au vieux ch�ne � la tomb�e de la nuit...",
    "La vieille femme vous dit : 'Je suis la Gardienne des Secrets. Tu veux la v�rit�, mais es-tu pr�t ?'",
    "Regardez dans le miroir et d�couvrez la v�rit� sur votre vie."
];

const choices = [
    ["Commencer l'aventure", "startStory()"],
    ["Aller au vieux ch�ne", "goToTree()"],
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
    updateStory("Vous avez d�cid� d'ignorer le message et de continuer votre vie quotidienne.");
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
