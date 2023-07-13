class DBService {
    static getBreweries() {
        const url = 'https://api.openbrewerydb.org/v1/breweries';

        return fetch(url).then(resp => resp.json());
    }
}