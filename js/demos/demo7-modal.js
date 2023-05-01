'use strict'

// TODO: Build a "Promised Based" dialog modal (like SWAL)

var keepResolve

function onAskUser() {
    askUser()
        .then(userDecision => {
            console.log('User Decided', userDecision)
        })
}

function askUser() {
    document.querySelector('.modal').hidden = false
    // TODO: we cannot return a resolved promise here
    // return Promise.resolve(true)
    return new Promise(resolve => {
        keepResolve = resolve
    })
}

function onUserDecision(userDecision) {
    console.log('User Clicked:', userDecision)
    document.querySelector('.modal').hidden = true
    keepResolve(userDecision)
}