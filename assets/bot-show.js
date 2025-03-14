document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('bot-top');
    let close = document.getElementById('closed')
    let box = document.getElementById('box-bot');
    let shadow = document.getElementById('shadow');

    button.addEventListener('click', () => {
        box.classList.add('show');
    })

    button.addEventListener('click', () => {
        box.classList.remove('hide');
    })

    close.addEventListener('click', () => {
        box.classList.remove('show');
    })

    
    close.addEventListener('click', () => {
        box.classList.add('hide');
    })

    button.addEventListener('click', () => {
        shadow.classList.add('shadow');
    })

    button.addEventListener('click', () => {
        shadow.classList.remove('shadow');
    })
    
});