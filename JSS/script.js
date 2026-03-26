//---------------------------- BOTÃO PARA TROCAR IMAGEM ------------------------------------

let myPicture = document.getElementById('myImage');
let buttonImage = document.getElementById('changeImage');

buttonImage.addEventListener("click", function() {
  if (myPicture.src.endsWith ("/Images/cursos.png")) {
    myPicture.src = "/Images/marina.png";
  } else {
    myPicture.src = "/Images/cursos.png";
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

buttonForm.addEventListener("click", function(event){
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
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      for (let element of data.results){
        console.log(element.question);
        let li = document.createElement('li');
        li.innerText = element.name;

        gameList.appendChild(li);
      }
    });
});

