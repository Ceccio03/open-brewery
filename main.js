let pageNumber = 1;

DBService.getBreweries(pageNumber).then(breweries => render(breweries));

function render(breweries) {
    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (const brewery of breweries) {
        const cardDiv = document.createElement('div');
        const nameStrong = document.createElement('strong');
        const nameNode = document.createTextNode(brewery.name);

        nameStrong.appendChild(nameNode);
        cardDiv.appendChild(nameStrong);
        mainContainer.appendChild(cardDiv);
    }
}

function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber).then(breweries => render(breweries));
}

function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber).then(breweries => render(breweries));
}