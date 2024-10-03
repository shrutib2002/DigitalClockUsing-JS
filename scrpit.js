setInterval(()=>{
    let clock = document.getElementById("clock");
    let day1= document.getElementById("day");
    let date1 = document.getElementById("date");
    let month1 = document.getElementById("month");
    let year1 = document.getElementById("year");

    let date = new Date();
    let hours=date.getHours();
    let minutes =date.getMinutes();
    
    if(minutes <=9)
    {
        minutes = `0${minutes}`;
    }

    let seconds =date.getSeconds();
    if(seconds <=9)
    {
            seconds= `0${seconds}`;
    }


    let cMonth = date.getMonth();
    let cYear = date.getFullYear();
    let day =date.getDay();
    let d = date.getDate();


    let daysNmae = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    if(hours<12){
        amOrpm.innerHTML ="AM"
    }
    else{
        amOrpm.innerHTML = "PM"
    }

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    day1.innerHTML = daysNmae[day];
    date1.innerHTML=`${d}`;
    month1.innerHTML = `${cMonth}`;
    year1.innerHTML =`${cYear}`;

    
},1000)