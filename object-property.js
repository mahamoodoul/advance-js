const students = [
    {id:21, name:'red hurt'},
    {id:22, name:'shakil'},
    {id:23, name:'dipu'},
    {id:24, name:'ibrahim'}
];

const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>21);
const find=students.find(s=>s.id>21);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(find);