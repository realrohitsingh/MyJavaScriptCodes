let x = 1000;
let customer_age = prompt("Enter your Age")
let original_price = prompt("Enter the Price")
if (customer_age<=12){
    let y = x-x/2;
    alert(`Original Price is ₹${original_price} \nYou Recieved 50% Discount on this item \nNow your final price is ₹${y}`)
    console.log(`Original Price is ₹${original_price} \nYou Recieved 50% Discount on this item \nNow your final price is ₹${y}`);
}else if(customer_age>=12 && customer_age<=60){
    let y = x-x/10;
    alert(`Original Price is ₹${original_price} \nYou Recieved 10% Discount on this item \n Now your final price is ₹${y}`)
    console.log(`Original Price is ₹${original_price} \nYou Recieved 10% Discount on this item \n Now your final price is ₹${y}`);
}else if(customer_age>=60 && customer_age<=85){
    let y = x-x/5;
    alert(`Original Price is ₹${original_price} \nYou Recieved 20% Discount on this item \n Now your final price is ₹${y}`)
    console.log(`Original Price is ₹${original_price} \nYou Recieved 20% Discount on this item \n Now your final price is ₹${y}`);
}else{
    alert(`You Recieved no Discount`)
    console.log(`You Recieved no Discount`);
}