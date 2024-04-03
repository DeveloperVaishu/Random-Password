let passwordBox=document.getElementById("password");


let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnipqrstuvwxyz";
let numbers="0123456789";
let symbols="!@#$%^&*()~`";
let allCharts=upperCase + lowerCase + numbers + symbols;
let length=12;
function randomPassword(){
    let password="";
 password += upperCase[Math.floor(Math.random()*upperCase.length)];
 password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
 password += numbers[Math.floor(Math.random()*numbers.length)];
password += symbols[Math.floor(Math.random()*symbols.length)];

while(length>password.length)
{
    password += allCharts[Math.floor(Math.random()*allCharts.length)]
}

passwordBox.value=password;
// let password=Math.random();
//     console.log(password);
// 
    
}

function copyPassword(){
    passwordBox.select();
    document.exeCommand("copy");
}