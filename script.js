//CARD
card1 = document.getElementById('card-1');
card2 = document.getElementById('card-2');

card1.classList.add('activeRadio');

card1.addEventListener('click', function () {
    card1.classList.add('activeRadio');
    card2.classList.remove('activeRadio');
})
card2.addEventListener('click', function () {
    card2.classList.add('activeRadio');
    card1.classList.remove('activeRadio')
})

//MODAL POP UP BASED ON SELECTION
document.querySelectorAll('input[name="radio1"]').forEach(cur => {
    cur.addEventListener('change', e => {
        const value = document.querySelector('input[name="radio1"]:checked').value;
        if (value === 'private') {
            document.querySelector('#quote-btn').setAttribute('data-target', '#privateForm');
        } else if (value === 'business') {
            document.querySelector('#quote-btn').setAttribute('data-target', '#businessForm');
        }
    })
});
