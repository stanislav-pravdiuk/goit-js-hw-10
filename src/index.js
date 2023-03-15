import './css/styles.css';
import Notiflix from 'notiflix';

// const DEBOUNCE_DELAY = 300;
const refs = {
    countryContainer: document.querySelector('.country-info'),
    countryList: document.querySelector('.country-list'),
    searchForm: document.querySelector('#search-box')
};

refs.searchForm.addEventListener('input', onSearch);

function onSearch(e) { 
    e.preventDefault();

    let textInput = e.currentTarget.value;
    
    fetchCountries(textInput)
        .then(renderMarkup)
        .catch(error => {
            Notiflix.Notify.failure('Oops, there is no country with that name')
        })
        .finally(refs.countryContainer.innerHTML = '', refs.countryList.innerHTML = '')
};

function fetchCountries(countryName) { 
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => {
        return response.json()
    })
};

function renderMarkup(country) { 
    console.log(country.length)
    if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        // refs.countryContainer.innerHTML = '';

    } else if (country.length <= 10 && country.length >= 2) {
        country.forEach(el => {
        refs.countryList.insertAdjacentHTML('beforeend', `
                <li class="country-list__item">
                    <div class="country-list__container">
                        <img class="country-list__img" src="${el.flags.svg}" alt="${el.flags.alt}">
                        <p class="country-list__text"><b>${el.name.official}</b></p>
                    </div>
                </li>
                `)
        });
    } else if (country.length == 1) {
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
    `;
    }
};

