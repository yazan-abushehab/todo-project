var nameRes = prompt("Please enter your name");
console.log(nameRes)
var genderRes = prompt("Please enter your gender (male or female)");
gender1 = "male"
gender2 = "female"
var ageRes = prompt("Please enter your age (Enter a number)")
if (ageRes <= 0) {
    alert("Please enter your real age");
    prompt("Please enter your age (Enter a number)");
}
var conRes = confirm("Do you want to skip the welcoming message");
console.log(conRes)
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

} else {

}
var Yes = "Yes";
var No = "No";
var invalid = "";
var liveAns = prompt("Do you live in Jordan ?(Yes / No)");
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
var employmentAns = prompt("Are you an employee ?(Yes / No)");
if (employmentAns =="" ) {
    console.log("invalid");
    var employmentAns = "invalid";
}
if (employmentAns == Yes) {
    console.log("Yes");
}
if (employmentAns == No) {
    console.log("No");
}
var choclateAns = prompt("Do you love choclate ?(Yes / No)");
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
var arr = [liveAns, employmentAns, choclateAns];
console.log(arr);

 
for (let i= arr.length-1; i>=0 ; i--) {
   console.log (arr[i]);
}
