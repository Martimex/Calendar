const yearButtons = document.querySelector('.date-box > .flex-container');
const prevYear = yearButtons.querySelector('button:nth-of-type(1)');
const nextYear = yearButtons.querySelector('button:nth-of-type(2)');
const thisYear = yearButtons.querySelector('.this-year');

console.log(prevYear); 
console.log(nextYear);

prevYear.addEventListener('click', previousYear);
nextYear.addEventListener('click', followingYear);

function previousYear() {

    let whichyear = thisYear.dataset.year;
    whichyear = parseInt(whichyear);

    if(whichyear<=1920) {return;}

    let newYearval = `${whichyear-1}`;
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

    if(whichyear>=2099) {return;}

    let newYearval = `${whichyear+1}`;
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

    (i!==0)? currMonth = monthArr[i-1] : currMonth = monthArr[i];
    dateMonth.innerText = currMonth;
    
    console.log(currMonth);

    let val = monthVal[i-1];

    console.log('jaki ten val:  '+val);

    (val === undefined)? val= 'jan' : '';

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

    (i!==11)? currMonth = monthArr[i+1] : currMonth = monthArr[i];
    dateMonth.innerText = currMonth;
    
    console.log(currMonth);

    let val = monthVal[i+1];

    console.log('jaki ten val:  '+val);

    (val === undefined)? val= 'dec' : '';

    changeMonth(val);
    //sel.value = val;
    changeDaysCount(val);
}
