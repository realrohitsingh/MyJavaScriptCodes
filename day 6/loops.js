// let pro = 1;
// for (let i = -4; i <= 8; i++) {
//   if (i % 2 !== 0) {
//     pro = pro * i;
//   }
// }
// console.log(`The product of all odd number is ${pro}`);

let tickets = prompt("Enter the total number of Ticket");
let t1 = 1;
while (t1 <= tickets) {
  console.log(
    `The total number of tickets sold is ${t1} and total balance is ${t1 * 20}`
  );
  t1++;
}
