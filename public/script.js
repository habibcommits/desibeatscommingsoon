const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>We're Live!</h2>";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById('notifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    console.log('Email submitted:', email);
    
    this.style.display = 'none';
    document.getElementById('successMessage').classList.add('show');
    
    setTimeout(() => {
        this.style.display = 'flex';
        this.reset();
        document.getElementById('successMessage').classList.remove('show');
    }, 5000);
});
