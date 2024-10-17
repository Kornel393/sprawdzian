const body = document.querySelector('body')

const div = document.createElement('div')
div.id = 'divR'
div.style.backgroundColor = 'red'

const input1 = document.createElement('input')
input1.type = 'number'
input1.id = 'liczba1'
input1.placeholder = 'liczba1'

const input2 = document.createElement('input')
input2.type = 'number'
input2.id = 'liczba2'
input2.placeholder = 'liczba2'

const button1 = document.createElement('button')
button1.textContent = 'wysokość'
button1.id = 'btn1'

const button2 = document.createElement('button')
button2.textContent = 'szerokość'
button2.id = 'btn2'

body.appendChild(div)
body.appendChild(input1)
body.appendChild(input2)
body.appendChild(button1)
body.appendChild(button2)

function rozmiar() {
    const divRozmiar = document.getElementById('divR')
    const input1 = document.getElementById('liczba1')
    const input2 = document.getElementById('liczba2')

    divRozmiar.style.height = input1.value;
    divRozmiar.style.width = input2.value;
}

button1.addEventListener("click", rozmiar)
button2.addEventListener("click", rozmiar)