document.getElementById('ban-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    try {
        await fetch('https://api.yourwebsite.com/admin/ban', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        });
        alert('User banned successfully');
    } catch (error) {
        console.error("Error banning user:", error);
        alert('Error banning user');
    }
});

document.getElementById('update-prize-pool-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const prizePool = document.getElementById('prize-pool').value;
    try {
        await fetch('https://api.yourwebsite.com/admin/update-prize-pool', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prizePool })
        });
        alert('Prize pool updated successfully');
    } catch (error) {
        console.error("Error updating prize pool:", error);
        alert('Error updating prize pool');
    }
});
