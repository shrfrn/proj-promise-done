'use strict'

const GIT_HUB_USERS = 'gitHubUsers'

var gUserCache = loadFromStorage(GIT_HUB_USERS) || {}

getUserDetails('vyaron')
    .then(user => console.log('Got user', user))
    .catch(err => alert(err))

// setTimeout(()=>{
//     getUserDetails('vyaron')
//     .then(user => console.log('Got user', user))
// }, 1250)


// Get user data from network or cache - return a promise
function getUserDetails(username) {
    const url = 'https://api.github.com/users/'

    if(gUserCache[username]) return Promise.resolve(gUserCache[username])

    return fetch(url + username)
        .then(res => res.json())
        .then(res => {
            if(res.message === 'Not Found') {
                throw new Error(res.message)
            } else {
                gUserCache[username] = res
                saveToStorage(GIT_HUB_USERS, gUserCache)
                return res
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error(err + username)
        })
}