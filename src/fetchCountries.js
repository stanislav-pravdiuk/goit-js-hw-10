function fetchCountries(countryName) { 
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    return fetch(url).then(response => response.json()
)
};

export default {fetchCountries}