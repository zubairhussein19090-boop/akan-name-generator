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



// Get form

const form = document.getElementById("akanForm");



form.addEventListener("submit", function(event){


    // Stop page refreshing

    event.preventDefault();



    // Get birthday

    let birthdate = document.getElementById("birthdate").value;



    // Check birthday

    if(birthdate == ""){

        alert("Please enter your birthday");

        return;

    }



    // Get gender

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );



    // Check gender

    if(gender == null){

        alert("Please select your gender");

        return;

    }



    // Create date

    let date = new Date(birthdate);



    // Find day number

    let dayNumber = date.getDay();



    let akanName;



    // Choose name

    if(gender.value == "male"){

        akanName = maleNames[dayNumber];

    }

    else{

        akanName = femaleNames[dayNumber];

    }



    // Display result

    document.getElementById("result").innerHTML =

    "You were born on " + days[dayNumber] +
    "<br>Your Akan name is " + akanName;



    // Clear form

    form.reset();


});