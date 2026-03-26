//---------------------------- BOTÃO PARA TROCAR IMAGEM ------------------------------------

let myPicture = document.getElementById('myImage');
let buttonImage = document.getElementById('changeImage');

buttonImage.addEventListener("click", function () {
    if (myPicture.src.endsWith("Images/cursos.png")) {
        myPicture.src = "Images/marina.png";
    } else {
        myPicture.src = "Images/cursos.png";
    }
});

//---------------------------- BOTÃO PARA ADICIONAR HOBBY ------------------------------------

let hobbyButton = document.getElementById('myHobby');
let myList = document.getElementById('list');

hobbyButton.addEventListener("click", function () {
    let newHobby = prompt('Adicione novo hobby:');

    if (newHobby) {
        let newLi = document.createElement("li");
        newLi.innerText = newHobby;
        myList.appendChild(newLi);
    }
});

//----------------------------- SUBMETER FORMULÁRIO PARA ALTERAÇÕES ---------------------------

let buttonForm = document.getElementById("updateForm");
let newName = document.getElementById("myName");
let newText = document.getElementById("changeText");
let newAll = document.getElementById("changeAll");

buttonForm.addEventListener("click", function (event) {
    event.preventDefault();
    let submitName = document.getElementById("nameForm").value.trim();
    let submitWord = document.getElementById("fraseForm").value.trim();
    let submitPicture = document.getElementById("fotoForm").value.trim();
    let submitColor = document.getElementById("colorInput").value;
    let newPicture = document.getElementById("newImage");
    let otherImage = document.getElementById("niceImage");

    if (submitName) {
        newName.textContent = submitName;
    }
    if (submitWord) {
        newText.textContent = submitWord;
    }
    if (submitPicture) {
        newPicture.src = submitPicture;
        otherImage.src = submitPicture
    }
    newAll.style.backgroundColor = submitColor;
});

//--------------------------------------- API -----------------------------------------------

let triviaButton = document.getElementById('createQuestion');
let gameList = document.getElementById('triviaList');

triviaButton.addEventListener("click", function () {
    fetch("https://opentdb.com/api.php?amount=5")
        .then((response_code) => response_code.json())
        .then((data) => {
            // console.log(data.results);
            for (let element of data.results) {
                console.log(element.question);
                let li = document.createElement('li');
                li.textContent = element.question.replace(/&quot;/g, '"') + ': ' + element.correct_answer.replace(/&amp;/g, '&');
                gameList.appendChild(li);
            }
        });
});

//---------------------------------- MODIFICAR PARA DIA OU NOITE ----------------------------

let myBody = document.querySelector('body');
let darkMode = document.getElementById('changeDarkMode');

darkMode.addEventListener("click", function (event) {
    event.preventDefault();
    if (myBody.classList.contains('day')) {
        myBody.classList.remove('day');
        myBody.classList.add('night');
    } else {
        myBody.classList.remove('night');
        myBody.classList.add('day');
    }
})

//---------------------------------- EVENTO DO TECLADO --------------------------------------

document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key == "Enter" || event.key == "Enter") {
        alert("Tem a certeza que acabou o exercício?")
    }
})