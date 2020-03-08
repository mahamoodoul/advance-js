function stopWatch(){
    let c=0;
    return function(){
        c++;
        return c;
    }
}
const clock=stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

const clock2 =stopWatch();
console.log(clock());
console.log(clock2());



