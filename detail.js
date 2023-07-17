const dataString = sessionStorage.getItem('selectedBrewery');

if (dataString) {
    const data = JSON.parse(dataString);
    console.log(data);
}

function render() {
    
}