document.getElementById('fetchButton').addEventListener('click', fetchCharacterInformation);

function fetchCharacterInformation() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; // Clear previous characters
            data.results.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';

                const img = document.createElement('img');
                img.src = character.image;
                card.appendChild(img);

                const name = document.createElement('h2');
                name.textContent = character.name;
                card.appendChild(name);

                const status = document.createElement('p');
                status.textContent = `Status: ${character.status}`;
                card.appendChild(status);

                const species = document.createElement('p');
                species.textContent = `Species: ${character.species}`;
                card.appendChild(species);

                const gender = document.createElement('p');
                gender.textContent = `Gender: ${character.gender}`;
                card.appendChild(gender);

                gallery.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching character information:', error));
}
