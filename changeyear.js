const yearButtons = document.querySelector('.date-box > .flex-container');
const prevYear = yearButtons.querySelector('button:nth-of-type(1)');
const nextYear = yearButtons.querySelector('button:nth-of-type(2)');
const thisYear = yearButtons.querySelector('.this-year');

prevYear.addEventListener('click', previousYear);
nextYear.addEventListener('click', followingYear);

function previousYear() {

    let whichyear = thisYear.dataset.year;
    whichyear = parseInt(whichyear);

    if(whichyear<=1920) {return;}

    let newYearval = `${whichyear-1}`;
    thisYear.dataset.year = newYearval;
    thisYear.textContent  = newYearval;
   
    let val;

    document.querySelectorAll('#month option').forEach(option => {
        if(option.selected) return val = option.value;
    })

    changeDaysCount(val);
}

function followingYear() {

    let whichyear = thisYear.dataset.year;
    whichyear =parseInt(whichyear);

    if(whichyear>=2099) {return;}

    let newYearval = `${whichyear+1}`;
    thisYear.dataset.year = newYearval;
    thisYear.textContent  = newYearval;
   
    let val;

    document.querySelectorAll('#month option').forEach(option => {
        if(option.selected) return val = option.value;
    })

    changeDaysCount(val);
}

///////////////

const MonthButtons = document.querySelector('.date-box > .flex-container2');
const prevMonth = MonthButtons.querySelector('i:nth-of-type(1)');
const nextMonth = MonthButtons.querySelector('i:nth-of-type(2)');

prevMonth.addEventListener('click', previousMonth);
nextMonth.addEventListener('click', followingMonth);

let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthVal = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']; 

function previousMonth()
{
    const dateMonth = document.querySelector('.this-month');

    let currMonth = monthArr[0]; 
    let i=11;

    while(dateMonth.innerText !== monthArr[i])
    {
        i--;
    }

    (i!==0)? currMonth = monthArr[i-1] : currMonth = monthArr[i];
    dateMonth.innerText = currMonth;

    let val = monthVal[i-1];

    (val === undefined)? val= 'jan' : '';

    changeMonth(val);
    changeDaysCount(val);
}

function followingMonth()
{
    const dateMonth = document.querySelector('.this-month');

    let currMonth = monthArr[0]; 
    let i=0;

    while(dateMonth.innerText != monthArr[i])
    {
        i++;
    }

    (i!==11)? currMonth = monthArr[i+1] : currMonth = monthArr[i];
    dateMonth.innerText = currMonth;

    let val = monthVal[i+1];

    (val === undefined)? val= 'dec' : '';

    changeMonth(val);
    changeDaysCount(val);
}


