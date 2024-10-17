const body = document.querySelector('body')

const div = document.createElement('div')

div.id = 'kolorowy-div'
div.style.height = '500px'
div.style.width = '500px'
div.style.border = '1px solid black'

const input = document.createElement('input')
input.id = 'kolorowy-input'
input.type = 'text'
input.placeholder = 'wpisz kolor'

const button = document.createElement('button')
button.textContent = 'kliknij'

body.appendChild(div)
body.appendChild(input)
body.appendChild(button)

function zmienKolor() {
    const kolorowyDiv = document.getElementById('kolorowy-div')
    const kolorowyInput = document.getElementById('kolorowy-input')

    kolorowyDiv.style.backgroundColor = kolorowyInput.value;
}

button.addEventListener("click", zmienKolor)