var open = document.querySelector('.open'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.closeBtn'),
    closeBtn2 = document.querySelector('.closeBtn2');

    open.addEventListener('click', function() {
        modal.style.display = 'flex';
    })

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    })

    closeBtn2.addEventListener('click', function() {
        modal.style.display = 'none';
    })

    window.addEventListener('click', function(e) {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    })