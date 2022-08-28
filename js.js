const countries = document.querySelector('.countries');

const url = 'https://restcountries.com/v3.1/all';

const fetchCountries = async () => {
    const fetchedCountries = await fetch(url);
    const jsonCountries = await fetchedCountries.json();

    jsonCountries.forEach(country => {
        console.log(country);

        const countryDiv = document.createElement("div");
        const countryName = document.createElement("h2");
        const capital = document.createElement("h3");
        const region = document.createElement("h3");
        const flagImg = document.createElement("img");

        countryDiv.classList.add("country");

        countryName.textContent = country.name.common;
        capital.textContent = country.capital[0];
        region.textContent = country.region;

        const flagSrc = country.flags.png || country.flags.svg;

        flagImg.src = flagSrc;

        countryDiv.appendChild(flagImg);
        countryDiv.appendChild(countryName);
        countryDiv.appendChild(capital);
        countryDiv.appendChild(region);
        countries.appendChild(countryDiv);
    })

    // console.log(jsonCountries);
}

fetchCountries();