document.addEventListener("DOMContentLoaded", () => {
    fetchLeaderboardData();
});

async function fetchLeaderboardData() {
    try {
        const response = await fetch('https://api.skinrave.gg/leaderboard');
        const data = await response.json();
        const sortedData = data.sort((a, b) => b.wagered - a.wagered);
        displayLeaderboard(sortedData);
    } catch (error) {
        console.error("Error fetching leaderboard data:", error);
    }
}

function displayLeaderboard(users) {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.wagered}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}
