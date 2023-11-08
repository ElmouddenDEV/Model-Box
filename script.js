let btn = document.getElementById('btn');
let popup = document.querySelector('.popup')
let myBtn = document.getElementById('myBtn')

btn.onclick = function () {
    popup.style.display = 'inline-block'
    popup.classList.add("open-popup")
}

myBtn.onclick = function () {
    popup.style.display = 'none'
}