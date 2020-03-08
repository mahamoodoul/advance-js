const num=[3,4,7,9];
const output=[];
// for (let i=0; i<num.length; i++){
//     const element=num[i];
//     const result= element* element;
//     output.push(result);
// }
// console.log(output);

num.map(function(element,index,array){
    console.log(element,index,array);
})



const square=num.map(x=>x*x);
console.log(square);


//filtering array
const result=num.filter(x=>x<5);
console.log(result);


//reduce
//foreach
//find
const find=num.find(x=>x>5);
console.log(find);
