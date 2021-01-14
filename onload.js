const reload = document.querySelector('#month');

const bod = document.body;

bod.addEventListener('reload', () => {
    document.querySelector('.this-month').textContent = 'January';
})
