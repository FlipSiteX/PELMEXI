const anchors = document.querySelectorAll('.anchor')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1, anchor.length)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth'
        })
    })
}

const sliderWidth = +getComputedStyle(document.querySelector('.slider')).width.substring(0, getComputedStyle(document.querySelector('.slider')).width.length - 2)
const cardBlockWidth = +getComputedStyle(document.querySelector('.itemCard')).width.substring(0, getComputedStyle(document.querySelector('.itemCard')).width.length - 2)
const sliderLine = document.querySelector('.slider-line')
const sliderBtns = document.querySelector('.slider-buttons').querySelectorAll('button')
for (let btn of sliderBtns) {
    btn.addEventListener('click', function () {
        for (let btn of sliderBtns) {
            btn.style.backgroundColor = '#DC9E60'
        }
        this.style.backgroundColor = '#624625'
        if (this.id === 'toFirstSlide') {
            sliderLine.style.left = '0px'
        } else if (this.id === 'toSecondSlide') {
            sliderLine.style.left = `${-sliderWidth - (sliderWidth - cardBlockWidth * 2)}px`
        } else {
            sliderLine.style.left = `${-sliderWidth*2 - (sliderWidth - cardBlockWidth * 2) * 2}px`
        }
    })
}