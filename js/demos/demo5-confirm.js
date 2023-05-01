'use strict'

// TODO: Code a doConfirm() function that gives a Promise API to confirm

doConfirm('Are your sure?').then(isConfirmed => {
    console.log('User decided:', isConfirmed)
})

function doConfirm(msg) {
    return new Promise((resolve) => {
        const isConfirmed = confirm(msg)
        resolve(isConfirmed)
    })
}
