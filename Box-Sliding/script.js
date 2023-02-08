let box_1 = document.querySelector('.box-1')
let box_2 = document.querySelector('.box-2')
let box_3 = document.querySelector('.box-3')

box_1.addEventListener('click', () => {
    box_1.classList.add('active')
    box_2.classList.remove('active')
    box_3.classList.remove('active')
})

box_2.addEventListener('click', () => {
    box_2.classList.add('active')
    box_1.classList.remove('active')
    box_3.classList.remove('active')
})

box_3.addEventListener('click', () => {
    box_3.classList.add('active')
    box_1.classList.remove('active')
    box_2.classList.remove('active')
})