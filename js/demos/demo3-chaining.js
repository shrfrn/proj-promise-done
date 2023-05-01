'use strict'

// Promises Are Composable

var prm1 = Promise.resolve(18)
var prm11 = prm1.then(x => x / 2)
var prm111 = prm11.then(x => `*${x}*`)
prm111.then(x => {
    console.log('Got x:', x)
})

prm1 = prm1
    .then(x => x / 2)
    .then(x => `#${x}#`)
    .then(x => console.log('My x is: ', x))


var prm2 = Promise.reject('Nope!')
prm2.then(x => console.log('Never happen'))
prm2.catch(err => console.log('Error happened:', err))

