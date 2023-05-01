'use strict'

function toggleDsItem(){
    const elDetails = document.querySelectorAll('details')
    const dsStates = {}

    elDetails.forEach(elDetail => dsStates[elDetail.dataset.dsId] = elDetail.open)

    localStorage.dsState = JSON.stringify(dsStates)
}
function loadDsItems(){
    const elDetails = document.querySelectorAll('details')
    const dsStates = JSON.parse(localStorage.dsState)
    
    elDetails.forEach(elDetail => {
        elDetail.open = dsStates[elDetail.dataset.dsId]
        elDetail.addEventListener('toggle', toggleDsItem)
    })
}