const teamsData = [
    {"team":"86 Celtics","Top 3 in Conference":1,"Offensive eFG%":51.80,"Preseason Odds":28.57,"Top 6 in SRS":1,"Offensive Rebound %":31.3,"DPOY Share":0.407,"True Shooting %":56.40,"MVP Shares":3.153,"Defensive Rating":102.6,"Age":29.3,"Top 5 in Offensive eFG%":1,"3 Point %":35.10,"Net Rating":9.2,"Top 6 in Home Winning %":1,"Final Score":76.47821,"Final Ranking":9},
    {"team":"87 Lakers","Top 3 in Conference":1,"Offensive eFG%":52.80,"Preseason Odds":20,"Top 6 in SRS":1,"Offensive Rebound %":34.1,"DPOY Share":0.668,"True Shooting %":57.70,"MVP Shares":2.853,"Defensive Rating":106.5,"Age":27.8,"Top 5 in Offensive eFG%":1,"3 Point %":36.70,"Net Rating":9.1,"Top 6 in Home Winning %":1,"Final Score":81.27129,"Final Ranking":2},
    {"team":"89 Pistons","Top 3 in Conference":1,"Offensive eFG%":50.20,"Preseason Odds":20,"Top 6 in SRS":1,"Offensive Rebound %":34.5,"DPOY Share":0.026,"True Shooting %":55.10,"MVP Shares":0.505,"Defensive Rating":104.7,"Age":28.7,"Top 5 in Offensive eFG%":0,"3 Point %":30,"Net Rating":6.1,"Top 6 in Home Winning %":1,"Final Score":64.20939,"Final Ranking":15},
    {"team":"91 Bulls","Top 3 in Conference":1,"Offensive eFG%":52.10,"Preseason Odds":12.50,"Top 6 in SRS":1,"Offensive Rebound %":34.7,"DPOY Share":0.522,"True Shooting %":56,"MVP Shares":2.724,"Defensive Rating":105.2,"Age":26.9,"Top 5 in Offensive eFG%":1,"3 Point %":36.60,"Net Rating":9.4,"Top 6 in Home Winning %":1,"Final Score":76.12697,"Final Ranking":10},
    {"team":"94 Rockets","Top 3 in Conference":1,"Offensive eFG%":50.70,"Preseason Odds":7.69,"Top 6 in SRS":1,"Offensive Rebound %":27.6,"DPOY Share":1.45,"True Shooting %":54.50,"MVP Shares":0.945,"Defensive Rating":101.4,"Age":28.1,"Top 5 in Offensive eFG%":1,"3 Point %":33.40,"Net Rating":4.5,"Top 6 in Home Winning %":1,"Final Score":70.17376,"Final Ranking":14},
    {"team":"96 Bulls","Top 3 in Conference":1,"Offensive eFG%":51.70,"Preseason Odds":22.22,"Top 6 in SRS":1,"Offensive Rebound %":36.9,"DPOY Share":1.597,"True Shooting %":55.50,"MVP Shares":2.962,"Defensive Rating":101.8,"Age":29.9,"Top 5 in Offensive eFG%":1,"3 Point %":40.30,"Net Rating":13.4,"Top 6 in Home Winning %":1,"Final Score":77.94538,"Final Ranking":7},
    {"team":"99 Spurs","Top 3 in Conference":1,"Offensive eFG%":47.90,"Preseason Odds":18.18,"Top 6 in SRS":1,"Offensive Rebound %":30.4,"DPOY Share":0.532,"True Shooting %":52.30,"MVP Shares":2.248,"Defensive Rating":95,"Age":30.1,"Top 5 in Offensive eFG%":0,"3 Point %":33,"Net Rating":9,"Top 6 in Home Winning %":1,"Final Score":61.87619,"Final Ranking":16},
    {"team":"01 Lakers","Top 3 in Conference":1,"Offensive eFG%":49.80,"Preseason Odds":35.71,"Top 6 in SRS":1,"Offensive Rebound %":31.1,"DPOY Share":0.207,"True Shooting %":53.50,"MVP Shares":1.405,"Defensive Rating":104.8,"Age":29.2,"Top 5 in Offensive eFG%":1,"3 Point %":34.40,"Net Rating":3.6,"Top 6 in Home Winning %":1,"Final Score":70.85504,"Final Ranking":12},
    {"team":"08 Celtics","Top 3 in Conference":1,"Offensive eFG%":52.20,"Preseason Odds":22.22,"Top 6 in SRS":1,"Offensive Rebound %":26.6,"DPOY Share":0.328,"True Shooting %":56.90,"MVP Shares":1.773,"Defensive Rating":98.9,"Age":27.9,"Top 5 in Offensive eFG%":1,"3 Point %":38.10,"Net Rating":11.3,"Top 6 in Home Winning %":1,"Final Score":79.25332,"Final Ranking":3},
    {"team":"09 Lakers","Top 3 in Conference":1,"Offensive eFG%":51.30,"Preseason Odds":9.09,"Top 6 in SRS":1,"Offensive Rebound %":29.4,"DPOY Share":0.069,"True Shooting %":55.50,"MVP Shares":1.835,"Defensive Rating":104.7,"Age":27.4,"Top 5 in Offensive eFG%":1,"3 Point %":36.10,"Net Rating":8.1,"Top 6 in Home Winning %":1,"Final Score":73.16737,"Final Ranking":11},
    {"team":"13 Heat","Top 3 in Conference":1,"Offensive eFG%":55.20,"Preseason Odds":30.77,"Top 6 in SRS":1,"Offensive Rebound %":22.2,"DPOY Share":0.763,"True Shooting %":58.80,"MVP Shares":4.301,"Defensive Rating":103.7,"Age":30.3,"Top 5 in Offensive eFG%":1,"3 Point %":39.60,"Net Rating":8.6,"Top 6 in Home Winning %":1,"Final Score":77.34935,"Final Ranking":8},
    {"team":"14 Spurs","Top 3 in Conference":1,"Offensive eFG%":53.70,"Preseason Odds":7.69,"Top 6 in SRS":1,"Offensive Rebound %":22.7,"DPOY Share":0.19,"True Shooting %":57.10,"MVP Shares":0.431,"Defensive Rating":102.4,"Age":28.9,"Top 5 in Offensive eFG%":1,"3 Point %":39.70,"Net Rating":8.1,"Top 6 in Home Winning %":1,"Final Score":70.8078,"Final Ranking":13},
    {"team":"16 Warriors","Top 3 in Conference":1,"Offensive eFG%":56.30,"Preseason Odds":17.24,"Top 6 in SRS":1,"Offensive Rebound %":23.5,"DPOY Share":0.859,"True Shooting %":59.30,"MVP Shares":0.978,"Defensive Rating":103.8,"Age":27.4,"Top 5 in Offensive eFG%":1,"3 Point %":41.60,"Net Rating":10.7,"Top 6 in Home Winning %":1,"Final Score":78.69372,"Final Ranking":5},
    {"team":"16 Cavs","Top 3 in Conference":1,"Offensive eFG%":52.40,"Preseason Odds":26.32,"Top 6 in SRS":1,"Offensive Rebound %":25.1,"DPOY Share":0.528,"True Shooting %":55.80,"MVP Shares":3.523,"Defensive Rating":104.5,"Age":28.1,"Top 5 in Offensive eFG%":1,"3 Point %":36.20,"Net Rating":6.4,"Top 6 in Home Winning %":1,"Final Score":78.89138,"Final Ranking":4},
    {"team":"17 Warriors","Top 3 in Conference":1,"Offensive eFG%":56.30,"Preseason Odds":56.18,"Top 6 in SRS":1,"Offensive Rebound %":22.8,"DPOY Share":1.34,"True Shooting %":59.70,"MVP Shares":4.481,"Defensive Rating":104,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":38.30,"Net Rating":11.6,"Top 6 in Home Winning %":1,"Final Score":89.79212,"Final Ranking":1},
    {"team":"24 Celtics","Top 3 in Conference":1,"Offensive eFG%":57.80,"Preseason Odds":18.18,"Top 6 in SRS":1,"Offensive Rebound %":24.9,"DPOY Share":0.046,"True Shooting %":60.90,"MVP Shares":0.324,"Defensive Rating":111.6,"Age":28.2,"Top 5 in Offensive eFG%":1,"3 Point %":38.80,"Net Rating":11.6,"Top 6 in Home Winning %":1,"Final Score":77.98453,"Final Ranking":6}
];

const higherIsBetter = ["Top 3 in Conference", "Offensive eFG%", "Preseason Odds", "Top 6 in SRS", "Offensive Rebound %", "DPOY Share", "True Shooting %", "MVP Shares", "Top 5 in Offensive eFG%", "3 Point %", "Net Rating", "Top 6 in Home Winning %", "Final Score"];
const lowerIsBetter = ["Defensive Rating", "Final Ranking"];

function populateTeamSelects() {
    const selects = document.querySelectorAll('select');
    teamsData.forEach(team => {
        const option = document.createElement('option');
        option.value = team.team;
        option.textContent = team.team;
        selects.forEach(select => select.appendChild(option.cloneNode(true)));
    });
}

function compareStat(stat, value1, value2) {
    if (stat === "Age") {
        return Math.abs(value1 - 27.9) < Math.abs(value2 - 27.9);
    } else if (higherIsBetter.includes(stat)) {
        return value1 > value2;
    } else if (lowerIsBetter.includes(stat)) {
        return value1 < value2;
    }
    return false;
}

function displayTeamStats(teamName, tableId) {
    const table = document.getElementById(tableId);
    table.innerHTML = '';
    const team = teamsData.find(t => t.team === teamName);
    if (team) {
        for (const [key, value] of Object.entries(team)) {
            if (key !== 'team') {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = key;
                cell2.textContent = value;
                row.dataset.stat = key;
                row.dataset.value = value;
                if (key === "Final Ranking" || key === "Final Score") {
                    cell1.classList.add('bold');
                    cell2.classList.add('bold');
                }
            }
        }
    }
    compareStats();
}

function compareStats() {
    const team1Stats = document.getElementById('team1-stats').rows;
    const team2Stats = document.getElementById('team2-stats').rows;

    for (let i = 0; i < team1Stats.length; i++) {
        const stat = team1Stats[i].dataset.stat;
        const value1 = parseFloat(team1Stats[i].dataset.value);
        const value2 = parseFloat(team2Stats[i].dataset.value);

        team1Stats[i].classList.remove('better-stat', 'tied-stat');
        team2Stats[i].classList.remove('better-stat', 'tied-stat');

        if (value1 === value2) {
            team1Stats[i].classList.add('tied-stat');
            team2Stats[i].classList.add('tied-stat');
        } else if (compareStat(stat, value1, value2)) {
            team1Stats[i].classList.add('better-stat');
        } else if (compareStat(stat, value2, value1)) {
            team2Stats[i].classList.add('better-stat');
        }
    }
}

function handleTeamSelect(event) {
    const selectedTeam = event.target.value;
    const tableId = event.target.id === 'team1' ? 'team1-stats' : 'team2-stats';
    displayTeamStats(selectedTeam, tableId);
}

document.getElementById('team1').addEventListener('change', handleTeamSelect);
document.getElementById('team2').addEventListener('change', handleTeamSelect);

populateTeamSelects();
