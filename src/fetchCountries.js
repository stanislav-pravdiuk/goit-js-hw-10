function fetchCountries(countryName) { 
    const url = `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,capital,population,languages`;
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        } throw new Error(response.statusText)
    } 
)
};

export default {fetchCountries} 