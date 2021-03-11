function myFunction(){  //calling
    var cc=document.getElementById("century");
    var yy=parseInt(document.getElementById("year").value)
    var mm=parseInt(document.getElementById("month").value)
    var dd=parseInt(document.getElementById("day").value)
    var male=document.getElementById("male");
    var female=document.getElementById("female");     //stating arrays
     var femaleNames=
        ["Akosua",
        "Adowa",
        "Akua",
        "Yaa",
        "Afua",
        "Afua",
        "Ama"]; 
    var maleNames=
       ["Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwafu",
        "Yaw",
        "Kofi",
        "Kwame",]
         //0       1        2          3           4         5           6
    var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friaday","Saturday"];    //validating
    if(dd<=0||dd>31){
        alert("invalid day please put the correct day!")
    }
    else if(mm<=0||mm>12){
        alert("invalid year please put the correct month!")
    }
    if(yy<190||yy>2020){
        alert("invalid year please put the correct year!")
    }
    else if(cc<19||cc>20){
        alert("invalid century please put put the correct century")
    }    var day =new Date(cc + "-" + yy + "-" + mm + "-" + dd);    var dayWanted=day.getDay();    if(male.checked==true){
        document.getElementById("text").innerHTML=("You were born on " +weekDays[dayWanted]+ " and your akan name is " + maleNames[dayWanted])
    }
    else if(female.checked==true){
        document.getElementById("text").innerHTML=("You were born on " +weekDays[dayWanted]+ " and your akan name is " + femaleNames[dayWanted])
    }
}
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
// var daysOfTheWeek =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];// function getCenturyFromYear(year){
//     if(year % 100 === 0){
//         return year / 100;
//     }else{
//         var remainder = year % 100;
//          return((year + 100 ) - remainder) / 100;
//     }
// }
// function getAkanNames(){
//     const day = parseInt(document.getElementById("day").value);
//     const month = parseInt(document.getElementById("month").value);
//     const year = parseInt(document.getElementById("year").value);
//     const century = getCenturyFromYear(year)//     dayIndexValue = parseInt((((century/4) - 2 * century - 1) + ((5 * year /4 ) ) + ((26 * (month + 1) / 10)) + day ) % 7);//     dayOfBirth = (dayIndexValue - 1 );//     if(day<=0 ||day>31){
//         alert("Invalid day")
//     }else if(month<=0||month>12){
//         alert("Invalid month")
//     }
//     else if(maleNames.checked==true){
//         alert("You were born on " +daysOfTheWeek[dayOfBirth]+ "and your Akan name is" +maleNames[dayOfBirth])
//     }
//     else if(femaleNames.checked==true){
//         alert("You were born on " +daysOfTheWeek[dayOfBirth]+ "and your Akan name is" +femaleNames[dayOfBirth])
//     }// }