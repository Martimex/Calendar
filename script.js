let monthObj = class {
    constructor(name, days, val, whichYearDay) {
        this.name= name;
        this.days= days;
        this.val = val;
        this.wYD = whichYearDay;
    }
};

let jan = new monthObj('January', 31, 'jan', 0);   let feb = new monthObj('February', 28, 'feb', 31);  let mar = new monthObj('March', 31, 'mar', 59);
let apr = new monthObj('April', 30, 'apr', 90);     let may = new monthObj('May', 31, 'may', 120);       let jun = new monthObj('June', 30, 'jun', 151);
let jul = new monthObj('July', 31, 'jul', 181);      let aug = new monthObj('August', 31, 'aug', 212);    let sep = new monthObj('September', 30, 'sep', 243);
let oct = new monthObj('October', 31, 'oct', 273);   let nov = new monthObj('November', 30, 'nov', 304);  let dec = new monthObj('December', 31, 'dec', 334);

let months = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]; 

const selectBar = document.querySelector('#month');

selectBar.addEventListener('change', (event) => {
    const ev = event.target;
    const val = ev.value;

    changeMonth(val); 
    changeDaysCount(val);    
});


function changeMonth (optionval)
{
    const dateMonth = document.querySelector('.this-month');

    switch (optionval)
    {
        case 'jan': { dateMonth.textContent = months[0].name; break;}
        case 'feb': { dateMonth.textContent = months[1].name; break;}
        case 'mar': { dateMonth.textContent = months[2].name; break;}
        case 'apr': { dateMonth.textContent = months[3].name; break;}
        case 'may': { dateMonth.textContent = months[4].name; break;}
        case 'jun': { dateMonth.textContent = months[5].name; break;}
        case 'jul': { dateMonth.textContent = months[6].name; break;}
        case 'aug': { dateMonth.textContent = months[7].name; break;}
        case 'sep': { dateMonth.textContent = months[8].name; break;}
        case 'oct': { dateMonth.textContent = months[9].name; break;}
        case 'nov': { dateMonth.textContent = months[10].name; break;}
        case 'dec': { dateMonth.textContent = months[11].name; break;}
    }
}

function changeDaysCount (optionval)
{
    /*IMPORTANT NOTE

        minimalYear is calendar's minimal Year value which CANNOT be exceeded in order to work properly! 
        Actual minimalYear =  Thursday, 1st January 1920; 
        MaximumYear  = year 2099;
    */
    const dateYear = document.querySelector('.this-year');
    const minimalYear = 1920;       
    let year = dateYear.dataset.year;
    year = parseInt(year);

    let leapYear;  
    (((year%400 === 0) || ((year%4 === 0) && (year%100 !==0))) && ((optionval === 'jan') || (optionval === 'feb')))?  
    leapYear = Math.floor(((year - minimalYear)/4)-1) :  leapYear = Math.floor((year - minimalYear)/4);

    let extra = Math.floor(( 5+ (year - minimalYear) + leapYear)%7);  // 1. stycznia 2000 roku (minimalYear) to sobota, ale od dnia tygodnia,
    // teraz wtorek 1. stycznia 1924 roku (minimalYear), +7 dla soboty, a dla wtorku +3; czwartek - 1. stycznia 1920 roku (minimalYear), +5 dla czwartku

    weekArr= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let altdays = null; 

    for(let i=0; i<=11; i++)
    {
        (months[i].val === optionval)? altdays = months[i].wYD : '';
    }

    extra = Math.floor((extra + altdays)%7);  

    (extra === 0)? extra = 7 : '';

    let thisMonth = null;

    for(let month of months)
    {
        (month.val === optionval)? thisMonth = month : "";
    }

   let  monthBefore = null; 

   (thisMonth.val === 'jan')? monthBefore = dec : '';

    for(let monthy of months)
    {
        (((thisMonth.wYD) - (monthy.wYD) >= 7))?  monthBefore = monthy : '';
    }

    const blank = document.querySelectorAll('.grid-container > div:not(.weekday)');

    blank.forEach(tile => {tile.classList.remove('day'); tile.classList.add('blank');}) 

    for(let i=extra; i<=(extra+thisMonth.days)-1; i++)  
    {
       let newdays = document.querySelector(`.grid-container > div:nth-of-type(${i+7})`);
       newdays.classList.remove('blank');
       newdays.classList.add('day');
       newdays.textContent = `${(i-extra)+1}`;

       if((thisMonth.val === 'feb') && ((year%400 === 0) || ((year%4 === 0) && (year%100 !==0))) && (i===(extra+thisMonth.days)-1)) {    
        i++;
        let newdays = document.querySelector(`.grid-container > div:nth-of-type(${i+7})`);
        newdays.classList.remove('blank');
        newdays.classList.add('day');
        newdays.textContent = `${(i-extra)+1}`;
       }
    }

    let blankBefore = [];  
    let blankAfter = []; 
    
    //blankBefore 

    const firstTileClass = document.querySelector('.grid-container > div:not(.weekday)');

    let counter = 1;

    while(counter<extra) 
    {
        blankBefore.push(document.querySelector(`.grid-container > div:nth-of-type(${counter+7})`));
        counter++;
    }

    let count = 0;
    ((monthBefore.val === 'feb') && ((year%400 === 0) || ((year%4 === 0) && (year%100 !==0))))? count =-1 : count = 0;

    if(blankBefore.length > 1) {
    
        for(let i=blankBefore.length-1; i>=0; i--)
        {
            blankBefore[i].textContent = monthBefore.days - count;
            count++;
        }
    }

    else if(blankBefore.length === 1) {
        blankBefore[0].textContent = monthBefore.days;
    }

    
    // BlankAfter 

    let counting = 0;
    
    let blankAfterTile = document.querySelector(`.grid-container > div:nth-last-child(1)`);

    while(!(blankAfterTile.classList.contains('day'))) {
        counting++;
        blankAfterTile = document.querySelector(`.grid-container > div:nth-last-child(${counting})`);
        blankAfter.unshift(document.querySelector(`.grid-container > div:nth-last-child(${counting})`));
    }
    
    blankAfter.reverse();
    blankAfter.pop();

    for(let y=blankAfter.length-1; y>=0; y--) {
        blankAfter[y].textContent = `${blankAfter.length-y}`;
    }
}
