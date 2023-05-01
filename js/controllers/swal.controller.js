'use strict'

function showPopup() {
    const options = {
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }

    // setInterval(() => {
    //     console.log('Running in the background not blocked')
    // }, 800);

    Swal.fire(options).then(result => {
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
    // alert('Are you sure?')
}
