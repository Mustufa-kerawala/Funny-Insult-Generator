// Description: This file contains the main logic for the application
function getInsult() {
    fetch('https://insult.mattbas.org/api/insult.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('insult').innerHTML = data.insult;

        });

}


