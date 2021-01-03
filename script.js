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

    changeMonth(val); // zmienia wyświelaną nazwę miesiąca
    changeDaysCount(val);  // zmienia ułożenie nazw dni tygodnia
    //changeMonthCount(val); // ile dni ma nowy miesiąc? Mniej czy Więcej a może tyle samo co poprzedni? Zmodyfikuj ilość kafelek w porównaniu z wcześniej
    // sprawdzanym miesiącem

    
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
    const minimalYear = 1920;       //minimalny rok który obsługuje ten kalendarz  // 1 stycznia tego roku to sobota
    let year = dateYear.dataset.year;
    year = parseInt(year);
    console.log('year :  '+year); 
    console.log('minimalYear :  '+minimalYear);

    let leapYear;  // warunek jeżeli mamy rok przestępny, a miesiąc docelowy to styczeń albo luty
    (((year%400 === 0) || ((year%4 === 0) && (year%100 !==0))) && ((optionval === 'jan') || (optionval === 'feb')))?  
    leapYear = Math.floor(((year - minimalYear)/4)-1) :  leapYear = Math.floor((year - minimalYear)/4);

    console.log('Dodatkowe dni z lat przestępnych =  ' +leapYear);
    let extra = Math.floor(( 5+ (year - minimalYear) + leapYear)%7);  // 1. stycznia 2000 roku (minimalYear) to sobota, ale od dnia tygodnia,
    // teraz wtorek 1. stycznia 1924 roku (minimalYear), +7 dla soboty, a dla wtorku +3; czwartek - 1. stycznia 1920 roku (minimalYear), +5 dla czwartku
    console.log(extra);

    // jak na razie mamy wszystkie kartki z kalendarza dla stycznia danego roku
    // to jest zgodne dla wszystkich miesięcy  po lutym (dla stycznia i lutego w roku przestępnym występują błędy) - EDIT: DZIAŁA !

    weekArr= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    //const weekdays = document.querySelectorAll('.weekday');

    // jeżeli sprawdzany rok jest przestępny, a user sprawdza miesiące styczeń lub luty, wtedy zacznij iterować tablicę 1 miejsce wcześniej
    
    // trzeba dodać dni z poprzednich miesięcy  - łączna ilość dni która minęła od 1.1 trzeba zsumować i wyciągnąć resztę z dzielenia przez 7 , a
    // pozostały wynik dodać do zmiennej extra

    let altdays = null;  // dni w roku, które już minęły w tym roku, w pętli for n

    for(let i=0; i<=11; i++)
    {
        (months[i].val === optionval)? altdays = months[i].wYD : '';
    }

    extra = Math.floor((extra + altdays)%7);  

    (extra === 0)? extra = 7 : '';

    console.log('altdays =  '+altdays);

    //let counter = extra; // counter służy do wyciągania stringów z tablicy zgodnie z wartością zmiennej extra

   /*
    ((year%4 === 0) && (optionval === 'jan' || optionval === 'feb'))?  // wzór na wyjątek, więc nie trzeba powyżej uwzględniać żadnych wyjątków
    //true
    weekdays.forEach(day => {
        (counter === 1)? counter = 8 : '';
        day.textContent = weekArr[counter-2];
        (counter >=7)?  counter=0 : ''; 
        counter++;
    })
    : // false
    weekdays.forEach(day => {
        (counter === 0)? counter = 7 : '';
        day.textContent = weekArr[counter-1];
        (counter >=7)?  counter=0 : ''; 
        counter++;
    })
    */
    let thisMonth = null;

    for(let month of months)
    {
        (month.val === optionval)? thisMonth = month : "";
    }

   let  monthBefore = null; // po prostu miesiąc o 1 wcześniejszy od thisMonth

   (thisMonth.val === 'jan')? monthBefore = dec : '';


    for(let monthy of months)
    {
        (((thisMonth.wYD) - (monthy.wYD) >= 7))?  monthBefore = monthy : '';
       // console.log('działanie: ')
       // console.log((thisMonth.wYD) - (thisMonth.days-1));
       // console.log((monthy.wYD));
    }

    console.log( 'monhsj  '+monthBefore.val);

    console.log('Nazwa tego miesiąca to : ' + thisMonth.name); // miesiąc na który user zmienił - mamy wszystkie dane liczbę dni :)
    console.log(extra); // np. reszta 1 to poniedziałek, 7 to niedziela; extra oznacza ile kafelek z przodu trzeba zblankować -1
    // Za 5 h 30 minut Nowy RoK!!

    const blank = document.querySelectorAll('.grid-container > div:not(.weekday)');

    blank.forEach(tile => {tile.classList.remove('day'); tile.classList.add('blank');}) // resetuje klasę .day i ustawia wszystkie tile na .blank

    for(let i=extra; i<=(extra+thisMonth.days)-1; i++)   // resetuje klasę .blank i dodaje do odpowiednich elementów klasę .day
    {
        //console.log('well...');
        let newdays = document.querySelector(`.grid-container > div:nth-of-type(${i+7})`);
        newdays.classList.remove('blank');
       newdays.classList.add('day');
       newdays.textContent = `${(i-extra)+1}`;

       if((thisMonth.val === 'feb') && ((year%400 === 0) || ((year%4 === 0) && (year%100 !==0))) && (i===(extra+thisMonth.days)-1)) {  //dodajemy dodatkowy dzień gdy miesiąc to luty w roku nieparzystym  
        i++;
        let newdays = document.querySelector(`.grid-container > div:nth-of-type(${i+7})`);
        newdays.classList.remove('blank');
        newdays.classList.add('day');
        newdays.textContent = `${(i-extra)+1}`;
       }
    }

    // zmieniamy numerację pól blank

    let blankBefore = [];  // tutaj trzeba zdobyć info o liczbie dni w poprzednim miesiącu, jeśli to styczeń to cofamy do grudnia, jeśli luty to czy rok przestępny czy nie
    let blankAfter = []; 
    
    //blankBefore 

    const firstTileClass = document.querySelector('.grid-container > div:not(.weekday)');
    console.log(firstTileClass);

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
            console.log('monthBefore.days=  ' + monthBefore.days)
            blankBefore[i].textContent = monthBefore.days - count;
            count++;
        }

        console.log('okaaay');
    }

    else if(blankBefore.length === 1) {
        blankBefore[0].textContent = monthBefore.days;
    }

    console.log(blankBefore);

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
    //console.log(blankAfter);
    for(let y=blankAfter.length-1; y>=0; y--) {
        blankAfter[y].textContent = `${blankAfter.length-y}`;
    }



}

/*let checkLeapYear = function(leapYear) {
    console.log('IM HERE');
    if((leapYear%400 === 0) || ((leapYear%4 === 0) && (leapYear%100 !==0))) return true;
    else return false;
}
*/

/* W ten sposób nie można kopiować tekstu...

const days = document.querySelectorAll('.day');
days.forEach(day => {
    day.addEventListener('copy', (ev)=> {
        ev.preventDefault();
    })
})
*/