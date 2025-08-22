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

