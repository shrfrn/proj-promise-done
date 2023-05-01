'use strict'

// Using Promise.all:

var prm1 = Promise.resolve(18)
// var prm2 = Promise.resolve('Puki')
const prm2 = askUser()
const prm3 = Promise.resolve(11)
// const prm3 = Promise.reject('Too Hot!')

function askUser(title = 'Sure?') {
    const prmUserDecision = Swal.fire({
        title,
        showDenyButton: true,
    })
    return prmUserDecision
}



Promise.all([prm1, prm2, prm3])
    .then(results => {
        console.log('Results, ', results)
    })
    .catch(() => console.log('err'))
