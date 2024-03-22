
const button1 = document.getElementById('confirm');
button1.addEventListener("click", getCharacter);


let characterList = (function listItem(id, name) {
    this.id = id,
    this.name = name
})

function getCharacter(){

    let input = document.getElementById("inputArea1").value;

    console.log(characterList.value)
    //characterList.find()

    fetch(`https://thronesapi.com/api/v2/Characters/${input}`).then((resp) => resp.json())
    .then((character) => showCharacter(character));

    //return showCharacter(character);
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

function showCharacterList(characterList){

    var list = document.querySelector("#characterList");

    characterList.forEach((element, index) => {

        let character = new listItem(index, element)
                
        var listItem = document.createElement("LI");
        listItem.className = "characterListItem"
        listItem.innerHTML = `${index} ${element.fullName}`;
        list.appendChild(listItem)
    });
}