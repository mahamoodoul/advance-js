function add(n1,n2){
    console.log([...arguments]);
    var parameter=[...arguments];
    var result=0;
    for(let i=0;i<parameter.length;i++){
        result=result+parameter[i];
    }
    return result;
}
const result=add(10,20,30,40,100,200);
console.log(result);