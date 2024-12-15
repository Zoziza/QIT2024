const nameInput = document.getElementById("nameInput"); 
const buttonSubmit = document.getElementById('buttonSubmit')
const showText = document.getElementById('showText')

function updateOutput() {
    showText.textContent = 'Сіз енгізіп жатырсыз: ' + nameInput.value
}

nameInput.addEventListener('input', updateOutput);

buttonSubmit.addEventListener('click', function() {

    showText.textContent = 'Сіздің атыныз: ' + nameInput.value
});