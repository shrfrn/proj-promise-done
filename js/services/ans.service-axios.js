'use strict'

function ask() {
    console.log('Hi from ans service using axios...')

    return axios.get('https://yesno.wtf/api')
        .then(res => {
            console.log('Hi from then()')
            return res.data
        })
        .catch(err => {
            console.log('err: ', err)
            throw 'Had a problem'
        })
        .finally(() => {
            console.log('Finally!')
        })

    // const prmRes = axios.get('https://yesno.wtf/api')
    // const prmAns = prmRes.then(res => res.data)

    // return prmAns
}