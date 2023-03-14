import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = {
    countryContainer: document.querySelector('.country-info'),
};

fetch('https://restcountries.com/v3.1/name/ukr')
    .then(response => {
        return response.json()
    })
    .then(country => {
        console.log(country);
        refs.countryContainer.innerHTML = `
        <div class="country-info__imgContainer">
        <img class="country-info__img" src="${country[0].flags.svg}" alt="${country[0].flags.alt}">
        <h1 class="country-info__name">${country[0].name.official}</h1>
    </div>
    <div class="country-info__body">
        <p class="country-info__title"><b>Capital:</b> ${country[0].capital}</p>
        <p class="country-info__text"><b>Population:</b> ${country[0].population}</p>
        <p class="country-info__text"><b>Languages:</b> ${Object.values(country[0].languages)}</p>
    </div>
    `
    })
    .catch(error => {
        console.log(error)
    })

