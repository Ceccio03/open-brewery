let pageNumber = 1;

DBService.getBreweries(pageNumber).then(breweries => console.log(breweries));

function render(breweries) {
    for (const brewery of breweries) {
        console.log(brewery.name);
    }
}

function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber).then(breweries => console.log(breweries));
}

function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber).then(breweries => console.log(breweries));
}