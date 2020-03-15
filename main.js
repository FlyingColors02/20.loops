//for loop

console.log("for loop");
let arrayObj=[1,2,3,"javascript",5];
for(let counter=0;counter<arrayObj.length;counter++)
{
    console.log(arrayObj[counter]);
}

//for each/of loop

console.log("for each/of loop");
for(let numValue of arrayObj)
{
    console.log(numValue);
}


//for each/in loop

console.log("for each/in loop");
for(let numValue in arrayObj)
{
    console.log(numValue);
}

//while loop

console.log("while loop");
var counter=0;
while(counter < arrayObj.length)
{
    console.log(arrayObj[counter]);
    counter++;
}

//do while loop
counter=0;
console.log("do while loop");
do{
    console.log(arrayObj[counter]);
    counter++;
}while(counter<arrayObj.length)
