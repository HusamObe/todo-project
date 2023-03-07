let userName, userGender, userAge, userSocailStatus, isAGamer, isAReader;
let userAnswer = [];


userPrompt();
checkAnswers();
populateArr(userName, userGender, userAge, userSocailStatus, isAGamer, isAReader);
arrTraverse();



if (!confirm("Do You want to skip the welcoming message?")) {
    userGender == "Male" ? alert(`Welcome Mr.${userName}`) : userGender == "Female" ? alert(`Welcome Ms.${userName}`) : alert(`Welcome ${userName}`);
}





function userPrompt() {
    userName = prompt("Welcome dear, What is your name?");
    userGender = prompt("What is your Gender ? (Male/Female)");
    userAge = prompt("Enter your Age");
    userSocailStatus = prompt("Are you Single ? (Yes/No)");
    isAGamer = prompt("Do you play Video Games ? (Yes/No)");
    isAReader = prompt("Do you read books ? (Yes/No)");
}

function checkAnswers() {
    if (userAge <= 0) {
        alert("You are lieing")
    }

    if (userSocailStatus === 'yes') {
        userSocailStatus = "Single";
    }
    else if (userSocailStatus === 'no') {
        userSocailStatus = "Married";
    } else {
        userSocailStatus = prompt("Invalid Answer!! Are you Single ? (Yes/No)");
    }

    if (isAGamer === 'yes') {
        isAGamer = "A Gamer";
    }
    else if (isAGamer === 'no') {
        isAGamer = "Not a gamer";
    } else {
        isAGamer = prompt("Invalid Answer!! Do you play Video Games ? (Yes/No)");
    }


    if (isAReader === 'yes') {
        isAReader = "A Reader";
    }
    else if (isAReader === 'no') {
        isAReader = "Not a Reader";
    } else {
        isAReader = prompt("Invalid Answer!! Do you read books ? (Yes/No)");
    }
}

function populateArr(name, gender, age, socailStatus, aGamer, aReader) {
    userAnswer.push(name, gender, age, socailStatus, aGamer, aReader);

}



function arrTraverse() {
    for (var i = 0; i < userAnswer.length; i += 1) {
        console.log(userAnswer[i]);
    }
}


