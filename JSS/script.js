//---------------- FUNÇÕES -------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

//----------------VARIÁVEIS REUTILIZADAS--------------------

let myBody = document.querySelector('body');
let newName = document.getElementById("myName");
let newText = document.getElementById("changeText");
let newAll = document.getElementById("changeAll");
let myPicture = document.getElementById('myImage');
let updateColor = document.getElementById('colorChange');
let newPicture = document.getElementById("newImage");
let otherImage = document.getElementById("niceImage");
let gameList = document.getElementById('triviaList');


//---------------------------- BOTÃO PARA TROCAR IMAGEM ------------------------------------

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

let formChange = document.getElementById("myForm")

formChange.addEventListener("submit", function (event) {
    event.preventDefault();
    let Data = new FormData(this);
    
    let submitName = document.getElementById("nameForm").value.trim();
    let submitWord = document.getElementById("fraseForm").value.trim();
    let submitPicture = document.getElementById("fotoForm").value.trim();
    let submitColor = document.getElementById("colorInput").value;

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

triviaButton.addEventListener("click", function () {
    fetch("https://opentdb.com/api.php?amount=5")
        .then((response_code) => response_code.json())
        .then((data) => {
            // console.log(data.results);
            for (let element of data.results) {
                console.log(element.question);
                let li = document.createElement('li');
                li.textContent = decodeHtml(element.question) + ': ' + decodeHtml(element.correct_answer);
                gameList.appendChild(li);
            }
        });
});

//---------------------------------- MODIFICAR PARA DIA OU NOITE ----------------------------

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

//------------------------------ BOTÃO PARA GERAR COR ALEATÓRIA ----------------------------
let aleatoryColor = document.getElementById('aboutColor');

aleatoryColor.addEventListener('click', function () {
    let r = getRandomInt(256);
    let g = getRandomInt(256);
    let b = getRandomInt(256);

    console.log(updateColor);
    updateColor.style.backgroundColor = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
})

//------------------------------- BOTÃO DE RESET -------------------------------------------

let originalName = newName.innerText;
let originalText = newText.innerText;
let originalPicture = myPicture.src;
let originalBackground = newAll.style.backgroundColor;
let originalColor = updateColor.style.backgroundColor;
let originalPictureSrc = newPicture.src;
let originalOtherImage = otherImage.src;
let originalHobbies = myList.innerHTML;
let originalAPI = gameList.innerText;

let btnReset = document.getElementById('resetAll')
console.log(btnReset);

btnReset.addEventListener("click", function (event) {
    event.preventDefault();

    newName.innerText = originalName;
    newText.innerText = originalText;
    newPicture.src = originalPictureSrc;
    otherImage.src = originalOtherImage;
    myPicture.src = originalPicture;
    newAll.style.backgroundColor = originalBackground;
    updateColor.style.backgroundColor = originalColor;
    gameList.innerHTML = "";
    formChange.reset();

    myList.innerHTML = originalHobbies;
});