import './css/styles.css';
// import countryInfoTpl from '../src/country-info.hbs';

const DEBOUNCE_DELAY = 300;
const refs = {
    countryContainer: document.querySelector('.country-info'),
}

fetch('https://restcountries.com/v3.1/name/ukraine')
    .then(response => {
        return response.json()
    })
    .then(country => {
        console.log(country[0].name.common);
        // const markup = countryInfoTpl(country);
        // console.log(markup);
        // refs.countryContainer.innerHTML =
    })
    .catch(error => {
        console.log(error)
    })

