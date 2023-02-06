var nameRes = prompt("Please enter your name");
console.log (nameRes)
var genderRes = prompt("Please enter your gender (male or female)");
gender1 = "male"
gender2 = "female"
var ageRes = prompt("Please enter your age (Enter a number)")
if (ageRes <= 0) {
    alert("Please enter your real age");
    prompt("Please enter your age (Enter a number)");
}
confirm("Do you want to skip the welcoming message");
if (genderRes == gender1) {
    alert (`Hello Mr.${nameRes}`)
};
if (genderRes == gender2) {
    alert(`Hello Ms.${nameRes}`)
};
if (genderRes != gender1 && genderRes != gender2) {
    alert(`Hello ${nameRes}`)
}

