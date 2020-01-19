const burger = document.querySelector('.burger')
const modal = document.querySelector('#modal')

burger.addEventListener('click', () => {
    burger.classList.add('animated', 'fadeOut', 'delay-1')
    modal.classList.remove('hidden')
})

modal.addEventListener('click', () => {
    burger.classList.remove('animated', 'fadeOut', 'delay-1')
    burger.classList.add('animated', 'fadeIn', 'delay-1')
    modal.classList.add('hidden')
})
