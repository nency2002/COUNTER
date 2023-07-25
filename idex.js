let count=0;
let counter =setInterval(() => {
    count =count + 1;
    document.getElementById("number1").innerHTML=count;
    if(count==232){
        clearInterval(counter);
    }
},60);

let count1=0;
let counter1 =setInterval(() => {
    count1 =count1 + 1;
    document.getElementById("number2").innerHTML=count1;
    if(count1==521){
        clearInterval(counter1);
    }
},30);

let count2=0;
let counter3 =setInterval(() => {
    count2 =count2 + 1;
    document.getElementById("number3").innerHTML=count2;
    if(count2==1463){
        clearInterval(counter3);
    }
},10);

let count3=0;
let counter4 =setInterval(() => {
    count3 =count3 + 1;
    document.getElementById("number4").innerHTML=count3;
    if(count3==15){
        clearInterval(counter4);
    }
},1000);




