let user_greetings = prompt("Greetings");
    if(user_greetings>="5AM" && user_greetings<="11:59AM"){
        alert("Good Morning");
    }
    else if(user_greetings>="12PM" && user_greetings<="4:59PM"){
        alert("Good Afternoon");
    }
    else if(user_greetings>="5PM" && user_greetings<="10:59PM"){
        alert("Good Evening");
    }
    else if(user_greetings>="11PM" && user_greetings<="4:59AM"){
        alert("Good Night");
    }