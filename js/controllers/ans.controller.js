'use strict'

function onAsk() {
    console.log('Asking...')
    document.querySelector('.answer').hidden = true
    
    ask()
        .then(renderAns)
        .catch(err => alert(err))
        .then(() => console.log('Hi'))
        .finally(() => console.log('Finally 2'))
    // ask()
    //     .then(renderAns)
    //     .then(() => console.log('Hi'))
    //     .catch(err => alert(err))
    //     .then(() => console.log('Hi'))
        // .then(ans => renderAns(ans))
}

function renderAns(ans) {
    console.log('Inside renderAns()')
    const elAns = document.querySelector('.answer')

    elAns.querySelector('h2').innerText = ans.answer
    elAns.querySelector('img').src = ans.image
}

function onImgReady() {
    document.querySelector('.answer').hidden = false
}