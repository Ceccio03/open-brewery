const dataString = sessionStorage.getItem('selectedBrewery');

if (dataString) {
    const data = JSON.parse(dataString);
    console.log(data);
}

function render(brewery) {
    const breweryContainer = document.getElementById('brewery-container');

    breweryContainer.appendChild(createElementWithString('span', brewery.name));
    breweryContainer.appendChild(createElementWithString('span', brewery.city));
    breweryContainer.appendChild(createElementWithString('span', brewery.state));
    breweryContainer.appendChild(createElementWithString('span', brewery.address));
    breweryContainer.appendChild(createElementWithString('span', brewery.type));
    breweryContainer.appendChild(createElementWithString('span', brewery.website.url));
}