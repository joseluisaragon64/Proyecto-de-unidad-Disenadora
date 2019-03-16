function imagen() {
    imagen = '<img src="src/img/undertale2.png" alt=":D" />'
    document.getElementById('imagencargando').innerHTML = imagen;
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}
function guardar() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });

    Toast.fire({
        type: 'success',
        title: 'Signed in successfully'
    })
}
function ok() {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
}
function timer() {
    let timerInterval
    Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <strong></strong> seconds.',
        timer: 2000,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
        ) {
            console.log('I was closed by the timer')
        }
    })
}