let input = document.querySelector('input');
let buttonSearch = document.querySelector('.search');

buttonSearch.addEventListener('click', () => {
    input.classList.toggle('hidden');
    buttonSearch.classList.toggle('search_radius');
})