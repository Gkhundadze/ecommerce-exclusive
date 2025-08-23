const secondsCounter = document.getElementById('seconds-counter')
    const max = 60
    secondsCounter.textContent = max

function updateSeconds() {
    const current = Number(secondsCounter.textContent)
    if(current !== 0) {
        secondsCounter.textContent = current - 1
    }
    else {
        return
    }
}


setInterval(updateSeconds, 1000)




const burgerMenu = document.querySelector('.burger-menu')
const mobileNav = document.querySelector('#mobile-nav')
let showingMobileNav = false

burgerMenu.addEventListener('click', () => {

    if(showingMobileNav) {
        mobileNav.style.display = 'none'
        showingMobileNav = false
        
        // mobileNav.classList.remove('show')
    } else {
        mobileNav.style.display = 'block'
        showingMobileNav = true

        // mobileNav.classList.add('show')

    }
    console.log(showingMobileNav);
    
})

