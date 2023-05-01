'use strict'

// Write a function isHot that takes a number as an argument 
// and returns a promise.
// The Promise should resolve to a boolean value: temparture >= 34 and 
// if the temparture is not between -100 and 100 reject with the error: 'Out of range'

isHot(34)
    .then(res => console.log('Is hot?', res))
    .catch(err => console.error(err))
    
isHot(340)
    .then(res => console.log('Is hot?', res))
    .catch(err => console.error(err))

function isHot(temp) {
    if(temp < -100 || temp > 100) return Promise.reject('Out of range') 
    return Promise.resolve(temp >= 34)
    
    // if(temp >= 34) return Promise.resolve(true)
    // else Promise.resolve(false)
}
