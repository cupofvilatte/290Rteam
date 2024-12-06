import { ThanksgivingCountdown } from './thanksgivingClock.ts';

const container = document.createElement('div');
container.className = 'thanksgiving-home';

function initializePage(): void {
    // Create header section
    const header = document.createElement('header');
    header.innerHTML = `
        <h1 class="title"> Deno Thanksgiving </h1>
        <p class="subtitle">Join our prehistoric celebration!</p>
    `;

    // Create countdown section
    const countdownSection = document.createElement('div');
    countdownSection.className = 'countdown-container';
    countdownSection.innerHTML = `
        <h2>Time Until Next Thanksgiving:</h2>
        <div class="countdown-display">
            <div class="countdown-segment">
                <span id="days">00</span>
                <label>Days</label>
            </div>
            <div class="countdown-segment">
                <span id="hours">00</span>
                <label>Hours</label>
            </div>
            <div class="countdown-segment">
                <span id="minutes">00</span>
                <label>Minutes</label>
            </div>
            <div class="countdown-segment">
                <span id="seconds">00</span>
                <label>Seconds</label>
            </div>
        </div>
    `;

    // Create content section
    const content = document.createElement('main');
    content.innerHTML = `
        <div class="dino-content">
            <h2>🦖 Prehistoric Feast</h2>
            <p>Get ready for the most epic Thanksgiving celebration since the Cretaceous period!</p>
            <div class="features">
                <div class="feature">🌿 Plant-eating dinos welcome!</div>
                <div class="feature">🍖 Meat-eating dinos welcome too!</div>
                <div class="feature">🦃 Turkey-sized portions for all!</div>
            </div>
        </div>
    `;

    // Append all sections
    container.appendChild(header);
    container.appendChild(countdownSection);
    container.appendChild(content);

    // Append container to body
    document.body.appendChild(container);

    // Start countdown
    startCountdown();
}

function startCountdown(): void {
    const countdown = new ThanksgivingCountdown();
    countdown.startCountdown((time) => {
        document.getElementById('days')!.textContent = time.days.toString().padStart(2, '0');
        document.getElementById('hours')!.textContent = time.hours.toString().padStart(2, '0');
        document.getElementById('minutes')!.textContent = time.minutes.toString().padStart(2, '0');
        document.getElementById('seconds')!.textContent = time.seconds.toString().padStart(2, '0');

        if (time.isComplete) {
            showThanksgivingMessage();
        }
    });
}

function showThanksgivingMessage(): void {
    const countdownDisplay = document.querySelector('.countdown-display');
    if (countdownDisplay) {
        countdownDisplay.innerHTML = `<h3>Happy Thanksgiving!</h3>`;
    }
}

// Initialize the page
initializePage();