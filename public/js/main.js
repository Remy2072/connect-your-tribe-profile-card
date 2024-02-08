document.addEventListener('scroll', function() {
    const viewPortHeight = window.innerHeight
    const scrollElement = document.querySelector('.container')
    const scrollAmount = window.scrollY
    const scrollAmountAdjusted = scrollAmount * 0.4
    const opacity = 1 - (scrollAmount / viewPortHeight)
    const opacityRounded = Math.round(opacity * 10) / 10
    const background = document.querySelector('body')

    scrollElement.style.transform = "translateY(" + scrollAmountAdjusted + "px)"
    scrollElement.style.opacity = opacityRounded

    const backgroundPercentage = (scrollAmount / viewPortHeight) * 100

    background.style.backgroundPosition = backgroundPercentage + "% 0%"

})