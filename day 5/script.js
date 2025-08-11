// WAP to check student username is true or false;

// let username = "rohit@gmail.com";
// let input = prompt("Enter the Username :");
// console.log(input);
// if(input == username){
//     alert("Login Successfull")
// } else{
//     alert("Login Failed")
// }

// WAP to print accout details by checking userID and password in facebook

// let userName = "Rohit Singh";
// let userID = "888399";
// let userPassword = "12345";
// let userFollowers = 800;
// let userTotalLikes = 1000;
// let input_id = prompt("Enter the userID");
// let input_pwd = prompt("Enter the password");

// if(input_id === userID && input_pwd === userPassword){
//     alert(`Login Successfull Welcome ${userName} Total Likes ${userTotalLikes} Total Followers ${userFollowers}`)
//     console.log(`Login Successfull Welcome ${userName} Total Likes ${userTotalLikes} Total Followers ${userFollowers}`);

// }else{
//     alert("Login Failed")
// }


// let input_color = prompt("Enter a Color")
// if (input_color==="Red" || input_color==="red"){
//     alert("Stop")
// }
// if (input_color==="Yellow" || input_color==="green"){
//     alert("Prepare to Go")
// }
// if (input_color==="Green" || input_color==="green"){
//     alert("Go")
// }
// else{
//     alert("Invalid color")
// }

let marks = prompt("Enter a Number")
if (marks>=90 && marks<=100){
    alert(`${marks} person got Grade : A \n`)
    console.log(`${marks} person got Grade : A \n`);
}
else if (marks>=80 && marks<=89){
    alert(`${marks} person got Grade : B \n`)
    console.log(`${marks} person got Grade : A \n`);
}
else if (marks>=70 && marks<=79){
    alert(`${marks} person got Grade : C \n`)
    console.log(`${marks} person got Grade : A \n`);
}
else if (marks>=60 && marks<=69){
    alert(`${marks} person got Grade : D \n`)
    console.log(`${marks} person got Grade : A \n`);
}
else{
    alert("Failed")
}