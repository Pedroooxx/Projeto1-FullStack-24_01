
    const button1 = document.getElementById('confirm');
    button1.addEventListener("click", test);

    function test(){
        fetch("https://thronesapi.com/api/v2/Characters/0").then((resp) => resp.json())
        .then((data) => showCharacter(data));
    }

    function showCharacter(character){
        let characterList = document.getElementById("character");
        let characterName = document.createElement("LI");
        characterName.innerHTML = `Personagem: ${character.firstName}`;
        console.log(character);
        characterList.appendChild(characterName);
    }