// Akan names

const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const form = document.getElementById("akanGenerator");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let birthdate = document.getElementById("birthdate").value;

    if(birthdate == ""){
        alert("Please enter your birthday");
        return;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender == null){
        alert("Please select your gender");
        return;
    }

    // Split the date

    let date = birthdate.split("-");

    let year = parseInt(date[0]);
    let month = parseInt(date[1]);
    let day = parseInt(date[2]);

    // Check month

    if(month < 1 || month > 12){
        alert("Invalid month");
        return;
    }

    // Check day

    if(day < 1 || day > 31){
        alert("Invalid day");
        return;
    }

    // Formula

    let CC = Math.floor(year / 100);

    let YY = year % 100;

    let dayNumber = Math.floor(
        (
            (4 * CC)
            - (2 * CC)
            - 1
            + ((5 * YY) / 4)
            + ((26 * (month + 1)) / 10)
            + day
        ) % 7
    );

    if(dayNumber < 0){
        dayNumber += 7;
    }

    let akanName;

    if(gender.value == "male"){
        akanName = maleNames[dayNumber];
    }else{
        akanName = femaleNames[dayNumber];
    }

    document.getElementById("result").innerHTML =
    "You were born on " + days[dayNumber] +
    "<br>Your Akan name is " + akanName;

    form.reset();

});