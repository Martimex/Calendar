const darktheme = document.querySelector(`.theme[data-theme="dark"]`);
const lighttheme = document.querySelector(`.theme[data-theme="light"]`);
const hackertheme = document.querySelector(`.theme[data-theme="hacker"]`);
const virtualtheme = document.querySelector(`.theme[data-theme="virtual"]`);

//const root = document.documentElement;
//console.log(root);

console.log(lighttheme);

const body = document.querySelector('body');
const calendar = document.querySelector('.grid-container'); 
const yearbtn1 = document.querySelector('.change-year:nth-of-type(1)');
const yearbtn2 = document.querySelector('.change-year:nth-of-type(2)');
const selectcolor = document.querySelector('#month');
const borderscolor = document.querySelectorAll('.weekday');
const abbrcolor = document.querySelector('abbr'); // it's only one abbr - update that if something is changed

darktheme.addEventListener('click', () => {
    
    body.style.setProperty('--global-bg', 'linear-gradient(to right, #111,  #111, #111)');
    body.style.setProperty('--fontcolor','#ccc');
    calendar.style.setProperty('--calendar-bg','linear-gradient(to right, #333,  #333, #333)');
    yearbtn1.style.setProperty('--yearbutton1-color', '#444');
    yearbtn2.style.setProperty('--yearbutton2-color', '#666');
    selectcolor.style.setProperty('--select-bg', '#777');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#555'));
    abbrcolor.style.setProperty('--abbr-color', '#555');

})

lighttheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #ddd,  #ddd, #ddd)');
    body.style.setProperty('--fontcolor','#000');
    calendar.style.setProperty('--calendar-bg','linear-gradient(90deg, #bbb, #ccc, #bbb)');
    yearbtn1.style.setProperty('--yearbutton1-color', '#c776');
    yearbtn2.style.setProperty('--yearbutton2-color', '#7c76');
    selectcolor.style.setProperty('--select-bg', '#ccc');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#a6a7'));
    abbrcolor.style.setProperty('--abbr-color', '#aaa');
})

hackertheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #000,  #000, #000)');
    body.style.setProperty('--fontcolor','#0e0d');
    calendar.style.setProperty('--calendar-bg','linear-gradient(90deg, #0006, #0006, #0006)');
    yearbtn1.style.setProperty('--yearbutton1-color', '#000');
    yearbtn2.style.setProperty('--yearbutton2-color', '#2e26');
    selectcolor.style.setProperty('--select-bg', '#3a3');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#0b09'));
    abbrcolor.style.setProperty('--abbr-color', '#2e26');  
})

virtualtheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #32bd78bb,  #32a1bdbb, #32bd78bb)');
    body.style.setProperty('--fontcolor','#000');
    calendar.style.setProperty('--calendar-bg','linear-gradient(90deg, #65c45828, #b2cc6c5d, #65c45828)');
    yearbtn1.style.setProperty('--yearbutton1-color', '#b38179');
    yearbtn2.style.setProperty('--yearbutton2-color', '#8cb68b');
    selectcolor.style.setProperty('--select-bg', '#bdcc99f3');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#c06363'));
    abbrcolor.style.setProperty('--abbr-color', '#be2116');
})