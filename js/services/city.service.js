'use strict'

const STORAGE_KEY_CITIES = 'citiesDB'
const url = 'http://www.filltext.com/?rows=10&name={city}&population={numberRange|1000,7000}'

var gCache = null

function getCities() {
    // Open APIs will sometimes block you if too many requests are being sent
    // Don't worry - we can use simple caching mechanism:

    if(gCache) return Promise.resolve(gCache)

    return axios.get(url)
        .then(res => {
            gCache = res.data
            return res.data
        })
}