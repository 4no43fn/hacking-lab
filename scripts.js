// Toggle Dark/Light Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
});

// Load Challenges Dynamically
const challengesContainer = document.getElementById("challenges-container");
const loadMoreButton = document.getElementById("loadMore");

const challenges = [
    "SQL Injection Challenge",
    "Cross-Site Scripting (XSS) Challenge",
    "Password Cracking Challenge",
    "Forensic File Analysis",
    "Buffer Overflow Attack",
];

let challengesDisplayed = 0;

function loadChallenges() {
    for (let i = 0; i < 2 && challengesDisplayed < challenges.length; i++) {
        const challenge = document.createElement("p");
        challenge.textContent = challenges[challengesDisplayed];
        challengesContainer.appendChild(challenge);
        challengesDisplayed++;
    }
    if (challengesDisplayed === challenges.length) {
        loadMoreButton.style.display = "none";
    }
}

loadMoreButton.addEventListener("click", loadChallenges);
loadChallenges(); // Initial load

// Populate Leaderboard Dynamically
const leaderboardData = document.getElementById("leaderboard-data");

const leaderboard = [
    { rank: 1, name: "Alice", score: 150 },
    { rank: 2, name: "Bob", score: 120 },
    { rank: 3, name: "Charlie", score: 100 },
];

leaderboard.forEach(player => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${player.rank}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
    `;
    leaderboardData.appendChild(row);
});
