function updateCountdown() {
    const christmas = new Date('December 25, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = christmas - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + "d";
    document.getElementById('hours').innerHTML = hours + "h";
    document.getElementById('minutes').innerHTML = minutes + "m";
    document.getElementById('seconds').innerHTML = seconds + "s";

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Merry Christmas!";
    }
}

const interval = setInterval(updateCountdown, 1000);
