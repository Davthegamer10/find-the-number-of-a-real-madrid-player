const data = [
    { team: 'Vini Jr.', stadium: 'Real Madrid is 7' },

    { team: 'Mbappe', stadium: 'Real Madrid is 9' },

    { team: 'Bellingham', stadium: 'Real Madrid is 5' },

    { team: 'Modric', stadium: 'Real Madrid is 10' },

    { team: 'Courtois', stadium: 'Real Madrid is 1' },

    { team: 'Rudiger', stadium: 'Real Madrid is 22' },

    { team: 'Carvajal', stadium: 'Real Madrid is 2' },

    { team: 'Rodrygo', stadium: 'Real Madrid is 11' },
];

function customFetch(teamName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const team = data.find(item => item.team.toLowerCase() === teamName.toLowerCase());
            if (team) {
                resolve(team.stadium);
            } else {
                reject(new Error('Number not found'));
            }
        }, 0);
    });
}

document.getElementById('fetchButton').addEventListener('click', () => {
    const teamName = document.getElementById('teamInput').value;
    customFetch(teamName)
        .then(stadium => {
            document.getElementById('result').innerText = `The Number ${teamName} wears for ${stadium}.`;
        })
        .catch(error => {
            document.getElementById('result').innerText = error.message;
        });
});