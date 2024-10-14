var addToDoButton = document.getElementById('addToDo')
var toDoContainer = document.getElementById('ToDoContainer')
var inputField = document.getElementById('inputField')

addToDoButton.onclick = function(){
    //verification de l'input
    if(inputField.value != ""){
        //si l'input n'est pas vide créer un paragraphe
        var paragraphe =document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenue de l'input
    paragraphe.innerText = inputField.value ;
    //ajout de style
    paragraphe.classList.add('paragraphe_style');
    // insertion du paragraphe
    ToDoContainer.appendChild(paragraphe);
    //clear input une fois ajouter
    inputField.value = "";

    //barré le paragraphe au clic

    paragraphe.addEventListener('click',function(){
        paragraphe.classList.add('paragraphe_click')
    })

    //supprimer si double click sur la tâche
    paragraphe.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraphe);
    })
}