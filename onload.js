const reload = document.querySelector('#month');

/*
reload.addEventListener('load', (event) => {
   const ev = event.target;
    ev.value = "jan";
})
*/

const bod = document.body;

bod.addEventListener('reload', () => {
    //document.getElementById('month').options[0].selected = 'selected';
    document.querySelector('.this-month').textContent = 'January';
})
