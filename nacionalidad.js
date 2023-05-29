function getNacionality() {
    const name = document.getElementById("name").value;
    const API_URL = `https://api.nationalize.io?name=${name}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const nameDiv = document.getElementById("nacionality");
            nameDiv.innerHTML = `
                <h2>País de procedencia de ${data.name}</h2>
            `;
            data.country.forEach(element => {
                nameDiv.innerHTML += `
                    <p>País: ${element.country_id}</p>
                    <p>Probabilidad: ${element.probability}</p>         
                `;
            });
        })
        .catch(error => console.error(error));
    }
