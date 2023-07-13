class DBService {
    static getBreweries(pageNumber) {
        const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=108page=' + pageNumber;

        console.log(url);

        return fetch(url).then(resp => resp.json());
    }
}