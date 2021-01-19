const yearButtons = document.querySelector('.date-box > .flex-container');

const prevDecade = yearButtons.querySelector('i:nth-of-type(1)');
const prevYear = yearButtons.querySelector('i:nth-of-type(2)');
const nextYear = yearButtons.querySelector('i:nth-of-type(3)');
const nextDecade = yearButtons.querySelector('i:nth-of-type(4)');
const thisYear = yearButtons.querySelector('.this-year');


const minYear = 1920;
const maxYear = 2099;
//console.log(prevYear); 
//console.log(nextYear);

prevDecade.addEventListener('click', previousYear);
prevYear.addEventListener('click', previousYear);
nextYear.addEventListener('click', followingYear);
nextDecade.addEventListener('click', followingYear);

function previousYear() {

    //console.log(this);

    let whichyear = thisYear.dataset.year;
    whichyear = parseInt(whichyear);

    if((whichyear<=minYear) && (this.dataset.number === '1')) {return;}
    if((whichyear<=minYear+9) && (this.dataset.number === '10')) {return;}

    let newYearval;
    (this.dataset.number === '1')?  newYearval = `${whichyear-1}` : newYearval = `${whichyear-10}`; // for 2 btns
    thisYear.dataset.year = newYearval;
    thisYear.textContent  = newYearval;
    //do tych funkcji trzeba też wysłać bieżący miesiąc , żeby funckja na dole działała
    console.log(whichyear);
   
    let val;

    document.querySelectorAll('#month option').forEach(option => {
        if(option.selected) return val = option.value;
    })

    console.log(val);
    changeDaysCount(val);
}

function followingYear() {

    let whichyear = thisYear.dataset.year;
    whichyear =parseInt(whichyear);

    if((whichyear>=maxYear) && (this.dataset.number === '1')) {return;}
    if((whichyear>=maxYear-9) && (this.dataset.number === '10')) {return;}

    let newYearval;
    (this.dataset.number === '1')?  newYearval = `${whichyear+1}` : newYearval = `${whichyear+10}`; // for 2 btns
    thisYear.dataset.year = newYearval;
    thisYear.textContent  = newYearval;

    console.log(whichyear);
   
    let val;

    document.querySelectorAll('#month option').forEach(option => {
        if(option.selected) return val = option.value;
    })

    console.log(val);
    changeDaysCount(val);

}

///////////////

const MonthButtons = document.querySelector('.date-box > .flex-container2');
const prevMonth = MonthButtons.querySelector('i:nth-of-type(1)');
const nextMonth = MonthButtons.querySelector('i:nth-of-type(2)');
const select = document.querySelector('select');

prevMonth.addEventListener('click', previousMonth);
nextMonth.addEventListener('click', followingMonth);

let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthVal = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']; 

function previousMonth()
{
    const dateMonth = document.querySelector('.this-month');
    console.log(dateMonth);

    let currMonth = monthArr[0]; 
    let i=11;

    while(dateMonth.innerText !== monthArr[i])
    {
        i--;
    }

    if (i!==0) {currMonth = monthArr[i-1];}  // albo miesiąc-1 
    else if ((i===0) && (parseInt(thisYear.dataset.year) > minYear))
    {
        const newYear = parseInt(thisYear.dataset.year)-1;

        currMonth = monthArr[11];
        thisYear.dataset.year = newYear;
        thisYear.innerText = newYear;
    } // albo grudzień nowego roku
    else {return;} // próbujesz przekroczyć maksymalną datę, którą obsługuje kalendarz
 
    dateMonth.innerText = currMonth;
    
    console.log(currMonth);

    let val = monthVal[i-1];

    console.log('jaki ten val:  '+val);

    (val === undefined)? val= 'dec' : '';

    select.value = monthVal[i-1];
    (select.value === '')? select.value= 'dec' : '';

    changeMonth(val);
    changeDaysCount(val);

    //to jest do poprawy
    // + jak zmienisz tu January na wcześniejszy miesiąc to laguje strona

}

function followingMonth()
{
    const dateMonth = document.querySelector('.this-month');
    console.log(dateMonth);

    let currMonth = monthArr[0]; 
    let i=0;

    console.log('text;  ' +dateMonth.textContent)


    while(dateMonth.innerText != monthArr[i])
    {
        i++;
    }

    if (i!==11) {currMonth = monthArr[i+1];}  // albo miesiąc+1 
    else if ((i===11) && (parseInt(thisYear.dataset.year) < maxYear))
    {
        const newYear = parseInt(thisYear.dataset.year)+1;

        currMonth = monthArr[0];
        thisYear.dataset.year = newYear;
        thisYear.innerText = newYear;
    } // albo styczeń nowego roku
    else {return;} // próbujesz przekroczyć maksymalną datę, którą obsługuje kalendarz

    dateMonth.innerText = currMonth;
    
    console.log(currMonth);

    let val = monthVal[i+1];

    console.log('jaki ten val:  '+val);

    (val === undefined)? val= 'jan' : '';

    select.value = monthVal[i+1];
    (select.value === '')? select.value= 'jan' : '';

    changeMonth(val);
    //sel.value = val;
    changeDaysCount(val);
}

