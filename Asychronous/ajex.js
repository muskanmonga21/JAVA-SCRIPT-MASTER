'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const currency = Object.keys(data.currencies)[0];
  const lng = Object.keys(data.languages)[0];
  const language = data.languages[lng];
  const html = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const currency = Object.keys(data.currencies)[0];
    const lng = Object.keys(data.languages)[0];
    const language = data.languages[lng];
    const html = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

//////////////////////////////////
const getCountryAndNeighbour = function (country) {
  //AJAX call country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country1
    renderCountry(data);

    //Get neighbour country(2)
    //const [neighbour] = data.borders;
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //AJAX call country
    const request2 = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${nieghbour}`);
    request.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responsetext);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
// getCountryData('india');
// getCountryData('Japan');
// getCountryData('usa');
// getCountryData('south korea');

getCountryAndNeighbour('north korea');

setTimeout(() => {
  console.log('1 Second Passed.');
  setTimeout(() => {
    console.log('2 Second Passed.');
    setTimeout(() => {
      console.log('3 Second Passed.');
      setTimeout(() => {
        console.log('4 Second Passed.');
      }, 1000);
    }, 1000);
  }, 1000);
}, 4000);
