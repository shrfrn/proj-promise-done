'use strict'

// Using finally:

const prm = askUser()
prm
    .then((isAproved) => {
        console.log('User approval? ', isAproved)
    })
    .catch((err) => {
        console.error('Problem:', err)
    })
    .finally(() => {
        console.log('Finally always happen')
    })


// This function rejects if user click cancel in the SWAL modal
function askUser(title = 'Sure?') {
    const prmUserDecision = Swal.fire({
        title,
        showDenyButton: true,
    })
    const prm = prmUserDecision.then(({ value }) => {
        if (value) return true
        return Promise.reject('Denial by user')
    })
    return prm
}



