const body = document.body;
const toggleButton = document.getElementById('toggleBtn');
const isDayMode = localStorage.getItem('isDayMode') !== 'false';

// Set initial mode based on saved preference
function initializeMode() {
    if (isDayMode) {
        body.classList.add('day');
        body.classList.remove('night');
        if (toggleButton) toggleButton.textContent = '🌙 Night Mode';
    } else {
        body.classList.add('night');
        body.classList.remove('day');
        if (toggleButton) toggleButton.textContent = '☀️ Day Mode';
    }
}

// Toggle between day and night modes
function toggleMode() {
    if (body.classList.contains('day')) {
        body.classList.remove('day');
        body.classList.add('night');
        localStorage.setItem('isDayMode', 'false');
        if (toggleButton) toggleButton.textContent = '☀️ Day Mode';
    } else {
        body.classList.remove('night');
        body.classList.add('day');
        localStorage.setItem('isDayMode', 'true');
        if (toggleButton) toggleButton.textContent = '🌙 Night Mode';
    }
}

// Add event listener to toggle button
if (toggleButton) {
    toggleButton.addEventListener('click', toggleMode);
}

// Initialize mode on page load
document.addEventListener('DOMContentLoaded', initializeMode);