document.addEventListener("DOMContentLoaded", function () {
    fetchLeaderboardData();
    startCountdown();

    // Particle effect configuration
    particlesJS("particles", {
        "particles": {
            "number": { "value": 50 },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            }
        },
        "retina_detect": true
    });

    setInterval(fetchLeaderboardData, 1800000); // Update leaderboard every 30 minutes
});

function fetchLeaderboardData() {
    fetch('/api/leaderboard')
        .then(response => response.json())
        .then(data => displayLeaderboard(data))
        .catch(error => console.error('Error fetching leaderboard data:', error));
}

function displayLeaderboard(data) {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = `
        <div class="flex justify-between p-2 border-b-2 border-gray-600">
            <span>Rank</span>
            <span>Player</span>
            <span>Wagers</span>
            <span>Reward</span>
        </div>
    `;
    data.players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'flex justify-between p-2 border-b border-gray-600';
        playerDiv.innerHTML = `
            <span>${index + 1}</span>
            <span>${player.name}</span>
            <span>${player.wagers} tokens</span>
            <span>${player.reward} tokens</span>
        `;
        leaderboard.appendChild(playerDiv);
    });
}

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 24); // Assuming the leaderboard restarts every 24 hours

    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `New Leaderboard starts in ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}
