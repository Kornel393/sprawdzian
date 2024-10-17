const body = document.querySelector('body')

const div = document.createElement('div')
div.id = 'tekst'

const input = document.createElement('input')
input.id = 'tek'
input.type = 'text'
input.placeholder = 'wpisz tekst'

const button = document.createElement('button')
button.textContent = 'napisz'

body.appendChild(div)
body.appendChild(input)
body.appendChild(button)

function napis() {
    const paragraf = document.getElementById('tek')
    const divNapis = document.getElementById('tekst')

    divNapis.textContent = paragraf.value
    
}

button.addEventListener("click", napis)
