
    const button1 = document.getElementById('confirm');
    button1.addEventListener("click", getCharacter);

    function getCharacter(){
        let input = document.getElementById("inputArea1").value;

        fetch(`https://thronesapi.com/api/v2/Characters/${input}`).then((resp) => resp.json())
        .then((character) => showCharacter(character));
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

        //não pronto -> necessario concluir para cada personagem e criar um ciclo para que abranja todos da lista

        /*let characterList = document.getElementById("characterList");

        let characterName = document.getElementById("characterName");
        characterName.innerHTML = `${character.firstName} ${character.lastName}`;

        let characterId = document.getElementById("characterId");
        characterId.innerHTML = `${character.id}`;

        var listItem = document.createElement("LI");
        listItem.innerHTML = `${}`;*/

    }