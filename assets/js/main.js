const burger         = document.querySelector('.burger')
const modal          = document.querySelector('#modal')
const linksPortfolio = document.querySelectorAll('.linksPortfolio')
const imgsDiv        = document.querySelectorAll('.imgsDiv')
const imgAnimate     = document.querySelectorAll('.imgAnimate')


burger.addEventListener( 'click', () => {
    burger.classList.add('animated', 'fadeOut', 'delay-1')
    modal.classList.remove('hidden')
})

modal.addEventListener('click', () => {
    burger.classList.remove('animated', 'fadeOut', 'delay-1')
    burger.classList.add('animated', 'fadeIn', 'delay-1')
    modal.classList.add('hidden')
})

const remove = (a) => 
    imgsDiv[a].classList.remove('hidden')

for(let i = 0; i < linksPortfolio.length; i ++) 
    linksPortfolio[i].addEventListener('click', () => {
        for(let i = 0; i < linksPortfolio.length; i ++)
            linksPortfolio[i].classList.remove('hover-link')
        linksPortfolio[i].classList.add('hover-link')

        switch(i) {
            case 0:
                for(let i = 0; i < imgsDiv.length; i++) {
                    imgsDiv[i].classList.remove('hidden')
                    imgAnimate[i].classList = 'imgAnimate'
                    imgAnimate[i].classList.add('animated', 'fadeInUp', `delay-${i}`)
                }

                break
            case 1:
                for(let i = 0; i < imgsDiv.length; i++) {
                    imgsDiv[i].classList.add('hidden')
                    imgAnimate[i].classList = 'imgAnimate'
                }

                remove(1)
                remove(2)
                imgAnimate[1].classList.add('animated', 'fadeInLeft', 'delay-1')
                imgAnimate[2].classList.add('animated', 'fadeInLeft', 'delay-2')

                break
            case 2:
                for(let i = 0; i < imgsDiv.length; i++) {
                    imgsDiv[i].classList.add('hidden')
                    imgAnimate[i].classList = 'imgAnimate'
                }

                remove(4)
                remove(5)
                imgAnimate[4].classList.add('animated', 'fadeInDown', 'delay-1')
                imgAnimate[5].classList.add('animated', 'fadeInDown', 'delay-2')

                break
            case 3:
                for(let i = 0; i < imgsDiv.length; i++) {
                    imgsDiv[i].classList.add('hidden')
                    imgAnimate[i].classList = 'imgAnimate'
                }

                remove(1)
                remove(4)
                remove(5)
                imgAnimate[1].classList.add('animated', 'fadeInRight', 'delay-1')
                imgAnimate[4].classList.add('animated', 'fadeInRight', 'delay-2')
                imgAnimate[5].classList.add('animated', 'fadeInRight', 'delay-3')

                break
        }
    })
