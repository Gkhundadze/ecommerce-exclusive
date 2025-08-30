
const burgerMenu = document.querySelector('.burger-menu')
const mobileNav = document.querySelector('#mobile-nav')
let showingMobileNav = false

burgerMenu.addEventListener('click', () => {

    if(showingMobileNav) {
        mobileNav.style.display = 'none'
        showingMobileNav = false
    } else {
        mobileNav.style.display = 'block'
        showingMobileNav = true
    }
    console.log(showingMobileNav);
    
})

 // Set the target date/time for the countdown
  const targetDate = new Date("2025-09-05T00:00:00").getTime(); // Replace with your desired date/time

  // Select the spans for updating
  const daysSpan = document.querySelector(".time:nth-child(1) span");
  const hoursSpan = document.querySelector(".time:nth-child(2) span");
  const minutesSpan = document.querySelector(".time:nth-child(3) span");
  const secondsSpan = document.getElementById("seconds-counter");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) {
      // Countdown finished
      daysSpan.textContent = "00";
      hoursSpan.textContent = "00";
      minutesSpan.textContent = "00";
      secondsSpan.textContent = "00";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysSpan.textContent = days.toString().padStart(2, "0");
    hoursSpan.textContent = hours.toString().padStart(2, "0");
    minutesSpan.textContent = minutes.toString().padStart(2, "0");
    secondsSpan.textContent = seconds.toString().padStart(2, "0");
  }

  // Update every second
  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call




  fetch('https://dummyjson.com/products')
.then(res => {
  return res.json()
})
.then((data) => {
  console.log('Fetched products:', data);
  console.log('Fetched products:', data.products);
})
.catch(err => {
  console.error('Error fetching products:', err);
});