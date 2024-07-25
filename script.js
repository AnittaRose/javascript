let str='';
for (let i=0; i<5; i++){
    for (let j=5; j>i; j--){
        str=str+"*";
    }
    str=str+"\n";
}
console.log(str)


console.log("\n\n\n\n\n")
let x='';
for (let i=0; i<=5; i++){
    for(let j=1; j<=i; j++){
        x=x+j;
    }
    x=x+"\n";
}
console.log(x)

console.log("\n\n\n\n\n")
for(let i=1; i<=10; i++)
    console.log(i)

console.log("\n\n\n\n\n")
let sum=0;
for(let i=1; i<=10; i++){
    sum=sum+i
}
    console.log(sum)


console.log("\n\n\n\n\n")

for(let i=0; i<=15; i++){
    if (i % 2==0){
        console.log(i);
    }
}







console.log("\n\n\n\n\n")
//timer functions


   setTimeout (function (){
    console.log ("this is from  setTimeout");
   },5000);


   function putZero(value){
    return value <10 ? "0"+ value: value;
   }


function show() {
    let dt = new Date();
    console.log ("dt: ",dt);


    let hours = dt .getHours();
    console.log ("hours ",hours);


    let ampm = hours <12 ? "am" :"pm";
    console.log ("ampm ",ampm);



    let time =document.getElementById ('time');
    console.log ("time ",time);


    time.innerHTML = putZero(hours) + ":" + putZero (dt.getMinutes()) + ":" +
    putZero(dt.getSeconds())

    // setTimeout (show,1000);
}       
show()

console.log("\n\n\n\n\n")
//event handling


let btn= document.getElementById('btn');
console.log ("btn ",btn);



btn.addEventListener ('click' ,function (){
    console.log("Button clicked.....");
});

btn.addEventListener('mouseover' ,function (){
    console.log("mouseover event fired....");
});

btn.addEventListener('mouseout' ,function (){
    console.log("mouseout event fired....");
});

btn.addEventListener('mousedown' ,function (){
    console.log("mousedown event fired....");
});

btn.addEventListener('mouseup' ,function (){
    console.log("mouseup event fired....");
});


btn.addEventListener('mousemove' ,function (){
    console.log("mousemove event fired....");
});

let inp = document.getElementById('text')
console.log("inp : ",inp);

inp.addEventListener('keydown',function (){
    console.log("keydown event fired.....");
})


inp.addEventListener('keyup',function (){
    console.log("keyup event fired.....");
})
















