'use strict'

// Setteld Promises, 
// we will use them for now as is
// Later we will see when they are useful in real code

const prm1 = Promise.resolve('Yessss!')
// console.log('prm1',prm1)

// prm1
//     .then(val => console.log('val:', val))
//     .catch(err => console.log('This will never run', err))


const prm2 = Promise.reject('No!!!!')
// console.log('prm2',prm2)

prm2
    .then(val => console.log('This will never run', val))
    .catch(err => console.log('Error:', err))


// Promisifying a user object (randomly resolved or rejected)

function getUser() {
    const isResolved = (Math.random() >= .5)

    if(isResolved) return Promise.resolve({ name: 'Puki', age: 19 })
    else return Promise.reject('No user found')
}