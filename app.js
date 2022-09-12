document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
const Name = prompt ('Как вас зовут')

setInterval(function() {
    document.querySelector('h3').textContent = 'Приевет,  ' + Name
    document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
}, 1000)

const colors = ['#B22222', '#FF4500', '#FFD700', '#228B22', '#87CEFA', '#4169E1', '#6A5ACD']
let index = 0

document.querySelector('button').onclick = function(){
   document.body.style.background = colors[index]
   index++
   if (index >= colors.length) index = 0
} 