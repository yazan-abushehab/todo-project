var nameRes = prompt("Please enter your name");
//console.log(nameRes)
var genderRes = prompt("Please enter your gender (male or female)");
var ageRes = prompt("Please enter your age (Enter a number)")
age(ageRes)
var conRes = confirm("Do you want to skip the welcoming message");
skipWelcome (conRes);
var liveAns = prompt("Do you live in Jordan ?(Yes / No)");
live(liveAns)
var employmentAns = prompt("Are you an employee ?(Yes / No)");
employment(employmentAns)
var choclateAns = prompt("Do you love choclate ?(Yes / No)");
choclate(choclateAns)

function age() {
    
    if (ageRes <= 0) {
        alert("Please enter your real age");
        prompt("Please enter your age (Enter a number)");
    }
    return ;
}

//console.log(conRes)
function skipWelcome() {
    gender1 = "male"
    gender2 = "female"
    if ((conRes == false)) {
        if (genderRes == gender1) {
            alert(`Hello Mr.${nameRes}`)
        };
        if (genderRes == gender2) {
            alert(`Hello Ms.${nameRes}`)
        };
        if (genderRes != gender1 && genderRes != gender2) {
            alert(`Hello ${nameRes}`)
        }
        return ;
    }
    else {
    }
}

function live() {
    var Yes = "Yes";
    var No = "No";
    var invalid = "";
    if (liveAns == invalid) {
        console.log("invalid");
        var liveAns = "invalid";
    }
    if (liveAns == Yes) {
        console.log("Yes");
    }
    if (liveAns == No) {
        console.log("No");
    }
}

function employment() {
    var Yes = "Yes";
    var No = "No";
    var invalid = "";
    if (employmentAns == "") {
        console.log("invalid");
        var employmentAns = "invalid";
    }
    if (employmentAns == Yes) {
        console.log("Yes");
    }
    if (employmentAns == No) {
        console.log("No");
    }
    return ;
}

function choclate() {
    var Yes = "Yes";
    var No = "No";
    var invalid = "";
    if (choclateAns == "") {
        console.log("invalid");
        var choclateAns = "invalid";
    }
    if (choclateAns == Yes) {
        console.log("Yes");
    }
    if (choclateAns == No) {
        console.log("No");
    }
    return ;
}


var arr = [liveAns, employmentAns, choclateAns];
console.log(arr);
reverseArr(arr)

function reverseArr() {
    for (let i = 0;i<=arr.length ;i++) {
        console.log(arr[i]);
    }
    return ;
}
