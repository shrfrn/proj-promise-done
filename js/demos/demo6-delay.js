'use strict'

// TODO: Code a delay(t) function that gives a Promise API to setTimeout

delay(-2500)
    .then(x => console.log('After Delay', x))
    .catch(err => console.log('Error', err))

function delay(t) {
    return new Promise((resolve, reject) => {
        if(t < 0) reject('Negative delay not supported...')
        setTimeout(() => resolve('Delay Finished'), t)
    })
}