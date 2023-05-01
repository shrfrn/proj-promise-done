'use strict'

function onLoadCities() {
    console.log('Loading...')
    getCities()
        .then(cities => renderCities(cities))
}

function renderCities(cities){
    const strHTMLs = cities.map(city => 
        `<li>
            <h3>${city.name}</h3>
            <h5>${city.population.toLocaleString()}</h5>
        </li>`)

    document.querySelector('.city-list')
                .innerHTML = strHTMLs.join('')
}

function onCleanAll() {
    console.log('Cleaning...')
    document.querySelector('.city-list').innerHTML = ''
}