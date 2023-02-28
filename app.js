var userName, userGender, userAge;
userName = prompt("Welcome dear, What is your name?");
userGender = prompt("What is your Gender (Male/Female)?");
userAge = prompt("Enter your Age");

if (userAge <= 0) {
    alert("You are lieing")
}

if (!confirm("Do You want to skip the welcoming message?")) {
    userGender == "Male" ? alert(`Welcome Mr.${userName}`) : userGender == "Female" ? alert(`Welcome Ms.${userName}`) : alert(`Welcome ${userName}`);
}