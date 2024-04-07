/*let num = prompt("Enter a number");
if (num % 5 === 0) {
    console.log("num","is the multiple of 5");
} else{
    console.log("num","is not the multiple of 5");
}
alert("You Aacept all cookies:");*/

let email = prompt("Please enter email ");
let email_upper_check = /[A-B]/;
let email_lower_check = /[a-b]/;
let email_num_check = /[0-9]/;
let email_specail_check = /[!@#$%&*.]/;

let email_upper_test = "";
let email_lower_test = "";
let email_num_test = "";
let email_special_test = "";
let email_length_test = "";

if(email.length>=20){
    email_length_test = "true";
}
if(email_upper_check.test(email)){
    email_upper_test = "false";
}
if(email_lower_check.test(email)){
    email_lower_test = "true";
}
if(email_num_check.test(email)){
    email_num_test = "true";
}
if(email_specail_check.test(email)){
    email_special_test = "true";
}
if(email_length_test == "true" && email_num_test == "true" && email_special_test == "true" && email_lower_test == "true" && email_upper_test == "true"){
    console.log("This is valid email");
}  else{
    console.log("This is not valid email");
}   
