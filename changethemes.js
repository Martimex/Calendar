const darktheme = document.querySelector(`.theme[data-theme="dark"]`);
const lighttheme = document.querySelector(`.theme[data-theme="light"]`);
const hackertheme = document.querySelector(`.theme[data-theme="hacker"]`);
const virtualtheme = document.querySelector(`.theme[data-theme="virtual"]`);

//const root = document.documentElement;
//console.log(root);

console.log(lighttheme);
const flexContainer = document.querySelector('.flex-container');

const body = document.querySelector('body');
const calendar = document.querySelector('.grid-container'); 
const yearbtn1 = flexContainer.querySelector('i:nth-of-type(2)');
const yearbtn2 = flexContainer.querySelector('i:nth-of-type(3)');
const decadebtn1 = flexContainer.querySelector('i:nth-of-type(1)');
const decadebtn2 = flexContainer.querySelector('i:nth-of-type(4)');
const selectcolor = document.querySelector('#month');
const borderscolor = document.querySelectorAll('.weekday');
const abbrcolor = document.querySelector('abbr'); // it's only one abbr - update that if something is changed

darktheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #111,  #111, #111)');
    body.style.setProperty('--fontcolor','#ccc');
    calendar.style.setProperty('--calendar-bg','linear-gradient(to right, #333,  #333, #333)');
    decadebtn1.style.setProperty('--decadebutton1-color', '#333');
    yearbtn1.style.setProperty('--yearbutton1-color', '#444');
    yearbtn2.style.setProperty('--yearbutton2-color', '#666');
    decadebtn2.style.setProperty('--decadebutton2-color', '#555');
    selectcolor.style.setProperty('--select-bg', '#777');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#555'));
    //dayTileBorder.forEach(dayTile => dayTile.style.setProperty('--calendar-daytile-border', '#8883'));
    abbrcolor.style.setProperty('--abbr-color', '#555');

})

lighttheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #ddd,  #ddd, #ddd)');
    body.style.setProperty('--fontcolor','#000');
    calendar.style.setProperty('--calendar-bg','linear-gradient(90deg, #bbb, #ccc, #bbb)');
    decadebtn1.style.setProperty('--decadebutton1-color', '#b668');
    yearbtn1.style.setProperty('--yearbutton1-color', '#c779');
    yearbtn2.style.setProperty('--yearbutton2-color', '#7c79');
    decadebtn2.style.setProperty('--decadebutton2-color', '#6b68');
    selectcolor.style.setProperty('--select-bg', '#ccc');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#a6a7'));
    //dayTileBorder.forEach(dayTile => dayTile.style.setProperty('--calendar-daytile-border', '#8883'));
    abbrcolor.style.setProperty('--abbr-color', '#aaa');
})

hackertheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #000,  #000, #000)');
    body.style.setProperty('--fontcolor','#0e0d');
    calendar.style.setProperty('--calendar-bg','linear-gradient(90deg, #0006, #0006, #0006)');
    decadebtn1.style.setProperty('--decadebutton1-color', '#1d15');
    yearbtn1.style.setProperty('--yearbutton1-color', '#2e26');
    yearbtn2.style.setProperty('--yearbutton2-color', '#2e26');
    decadebtn2.style.setProperty('--decadebutton2-color', '#1d15');
    selectcolor.style.setProperty('--select-bg', '#3a3');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#0b09'));
   // dayTileBorder.forEach(dayTile => dayTile.style.setProperty('--calendar-daytile-border', '#7b1a'));
    abbrcolor.style.setProperty('--abbr-color', '#2e26');  
})

virtualtheme.addEventListener('click', () => {

    body.style.setProperty('--global-bg', 'linear-gradient(to right, #32bd7899,  #32a1bd99, #32bd7899)');  
    body.style.setProperty('--fontcolor','#000');
    calendar.style.setProperty('--calendar-bg','linear-gradient(90deg, #65c45828, #b2cc6c5d, #65c45828)');
    decadebtn1.style.setProperty('--decadebutton1-color', '#a27068');
    yearbtn1.style.setProperty('--yearbutton1-color', '#b38179');
    yearbtn2.style.setProperty('--yearbutton2-color', '#8cb68b');
    decadebtn2.style.setProperty('--decadebutton2-color', '#7ba57a');
    selectcolor.style.setProperty('--select-bg', '#bdcc99f3');
    borderscolor.forEach(tile => tile.style.setProperty('--borders-bg', '#c06363'));
    //dayTileBorder.forEach(dayTile => dayTile.style.setProperty('--calendar-daytile-border', '#8883'));
    abbrcolor.style.setProperty('--abbr-color', '#be2116');
})
