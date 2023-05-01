'use strict'

// fetch function returns a promise:
const prm1 = fetch('https://api.github.com/users/vyaron')
console.log('prm1',prm1)

// axios (common JS library for AJAX) works with promises:
const prm2 = axios.get('https://api.github.com/users/vyaron')
console.log('prm2',prm2)


// SWAL (common JS library for simple modals) works with a promise API:
const prm3 = Swal.fire({
    title: 'Should we?',
    showDenyButton: true,
})
console.log('prm3 has a then() function:',prm3)
