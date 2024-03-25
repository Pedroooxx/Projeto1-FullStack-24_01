
const button1 = document.getElementById('confirm');
button1.addEventListener("click", getCharacter);

function getCharacter() {
    let input = document.getElementById("inputArea1").value.toLowerCase(); // Convertendo a entrada do usuário para minúsculas
    document.getElementById("inputArea1").value = "";

    if (!isNaN(input) && characterList[input]) {
        fetch(`https://thronesapi.com/api/v2/Characters/${input}`)
            .then((resp) => resp.json())
            .then((character) => showCharacter(character))
            .catch((error) => {
                console.error('Erro no fetch:', error);
            });
        document.getElementById("inputArea1").placeholder = 'Personagem Encontrado.';
    } else {
        const character = characterList.find(({ fullName }) => fullName.toLowerCase() === input); // Convertendo o nome do personagem para minúsculas

        if (character) {
            fetch(`https://thronesapi.com/api/v2/Characters/${character.id}`)
                .then((resp) => resp.json())
                .then((character) => showCharacter(character))
                .catch((error) => {
                    console.error('Erro no fetch:', error);
                });
            document.getElementById("inputArea1").placeholder = 'Personagem Encontrado.';

        } else {
            document.getElementById("inputArea1").placeholder = 'Personagem não encontrado.';
        }
    }
}

(function getCharacterList(){

    fetch(`https://thronesapi.com/api/v2/Characters/`).then((resp) => resp.json())
    .then((characterList) => showCharacterList(characterList));

})()

function showCharacter(character){

    let characterName = document.getElementById("characterName");
    characterName.innerHTML = `${character.firstName} ${character.lastName}`;

    let characterTitle = document.getElementById("characterTitle");
    characterTitle.innerHTML = `${character.title}`;

    let characterFullname = document.getElementById("characterFullname");
    characterFullname.innerHTML = `${character.fullName}`;

    let characterFamily = document.getElementById("characterFamily");
    characterFamily.innerHTML = `${character.family}`;

    let characterId = document.getElementById("characterId");
    characterId.innerHTML = `${character.id}`;

     document.getElementById("characterImage").src = character.imageUrl;

}

let characterList = []

function showCharacterList(serverCharacterList){

    let list = document.querySelector("#characterList");

    characterList = serverCharacterList;

    serverCharacterList.forEach((element, index) => {

        var listItem = document.createElement("LI");
        listItem.className = "characterListItem"
        listItem.innerHTML = `${index} ${element.fullName}`;
        list.appendChild(listItem);
    });
}