let pageNumber = 1;

DBService.getBreweries(pageNumber).then(breweries => render(breweries));

function render(breweries) {
    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (const brewery of breweries) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('brewery-card');

        // const nameStrong = document.createElement('strong');
        // const nameNode = document.createTextNode(brewery.name);
        // nameStrong.appendChild(nameNode);
        // cardDiv.appendChild(nameStrong);
        cardDiv.appendChild(createElementWithString('strong', brewery.name));
        const addressDiv = document.createElement('div');

        // const citySpan = document.createElement('span');
        // const cityNode = document.createTextNode(brewery.city);
        // citySpan.appendChild(cityNode);
        // addressDiv.appendChild(citySpan);
        addressDiv.appendChild(createElementWithString('span', brewery.city));

        // const stateSpan = document.createElement('span');
        // const stateNode = document.createTextNode(', ' + brewery.state);
        // stateSpan.appendChild(stateNode);
        // addressDiv.appendChild(stateSpan);
        addressDiv.appendChild(createElementWithString('span', ', ' + brewery.state));
        cardDiv.appendChild(addressDiv);
        const detailButton = createElementWithString('button', 'dettaglio');
        detailButton.addEventListener('click', () => console.log('mi hai cliccato'));
        cardDiv.appendChild(detailButton);
        mainContainer.appendChild(cardDiv);
    }
}

function saveAndNavigate(brewery) {
    sessionStorage.setItem('selectedBrewery', JSON.stringify(brewery));
    window.location = './detail.html';
}

function createElementWithString(elementName, contentString) {
    const element = document.createElement(elementName);
    const node = document.createTextNode(contentString);

    element.appendChild(node);

    return element;
}

function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber).then(breweries => render(breweries));
}

function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber).then(breweries => render(breweries));
}