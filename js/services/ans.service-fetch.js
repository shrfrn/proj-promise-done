'use strict'

function ask() {
    return fetch('https://yesno.wtf/api')
        .then(res => res.json())
}