const gender = document.getElementById("gender")
const form = document.getElementById("form")
const century = document.getElementById("labelA")
const year = document.getElementById("labelB")
const month = document.getElementById("labelC")
const date = document.getElementById("labelD")



// function onFormSubmit(){
//     var formData=readFormData();
//     insertNewRecord(formData)
//     return formData
//     function formData()(dayOfTheWeek) => {
//         let menAkanDays = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
//         return menAkanDays[dayOfTheWeek];
//       }
// console.log(getAkanDay(calculateDay("20-21-07-17"))); 
let calculateDay = (date) => {
    // cc-yy-mm-dd
    //19-79-01-01 
    let dateValues = date.split("-");
    let CC = parseInt(dateValues[0]);
    let YY = parseInt(dateValues[1]);
    let MM = parseInt(dateValues[2]);
    let DD = parseInt(dateValues[3]);
    let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    return Math.floor(d);
  }
   // 0 - sat
// 6 - friday
let getAkanDay1 = (dayOfTheWeek) => {
    let menAkanDays = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
    return menAkanDays[dayOfTheWeek];
  }
    console.log(getAkanDay(calculateDay("20-03-01-24"))); 

let getAkanDay2 = (dayOfTheWeek) => {
    let womenAkanDays = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
    return womenAkanDays[dayOfTheWeek];
}

    console.log(getAkanDay2(calculateDay("20-03-01-24"))); 


