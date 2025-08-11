let ticket1_price = 5;
let ticket2_price = 10;
let ticket3_price = 15;
let ticket4_price = 12;
// let ticket_price = prompt("Enter the Ticket price")
let user_age = prompt("Enter the Age")
if (user_age>=0 && user_age<=12){
    alert(`Price of Ticket is ₹${ticket1_price}`)
    console.log(`Price of Children Ticket is ₹${ticket1_price}`);
}else if(user_age>=13 && user_age<=17){
    alert(`Price of Teenager Ticket is ₹${ticket2_price}`)
    console.log(`Price of Teenager Ticket is ₹${ticket2_price}`);
}else if(user_age>=18 && user_age<=64){
    alert(`Price of Adult Ticket is ₹${ticket3_price}`)
    console.log(`Price of Adult Ticket is ₹${ticket3_price}`);
}else if(user_age>=65){
    alert(`Price of Senior Ticket is ₹${ticket4_price}`)
    console.log(`Price of Senior Ticket is ₹${ticket4_price}`);
}