/*
const laptop={
    model: 'xxx',
    color:'white'
}
console.log(laptop.color);
*/
/*
let language = 'Javascript';
console.log(language);
const seconds= 60;
console.log(seconds);
console.log(abc);
var abc=20;
let age=25;
age= 'twenty five';
*/
//9 main types of data types in javascript
//PRIMIVTIVE DATA TYPES=only single values can be stored 
    //1.Number= -ve to +ve or decimal
        //let a=25;
        //let b=-25;
        //let c=2.5;
    //2. String = either '' or " "
        //let name= "Kumud"
    //3.Boolean = True or False
        //let isState = True;
    //4. undefined = value not assigned to the defined/declared variables
        //let age;
    //5. BigInt= 2**53 -1 = MAX_SAFE_INTEGER
    //6. SYMBOL = UNIQUE 
//Sturctural types 
    //Objects = {like dictionary in python}
        //Functions = non-data structure :- Callable
    //arrays = objects :- collection of values === const numbers=[2,3,4,"abc",{name:'xyz'}];
    //Maps = 
    //set = storing unique values
    //Date

//Structural root
    //Null = empty value

//Operators
//10 different types of operators in javaScript
    /* 1. Assignment operators :- value assigned to left operand according to the right operand    let x=10;
                                  let x=10; let y = 20; x+=y;  console.log(x);
       2. Comparison operators :- <,>,<=,>=,==,!=,===,!==    //coercion
       3. Arithmetic operators :- +,-,*,/,++,--,**(exponent),
       4. Bitwise operators :-  
       5. Logical operators :- AND,OR,NOT mostly returns Boolean && || !
       6. String operators
       7. Conditional operators :- (Ternary operator ===) condition ? true : false;
       8. Logical operators
       9. Unary Operators
       10. Relational operators
    */
// Array is a simple list

const languages= ['Jvascript','python','c'];
console.log(languages.length)
//indexing starts from 0
languages.push('dart');
languages.unshift('java');
languages.pop();
languages.shift();
console.log(languages);
console.log(languages[1]);
const arrays=[
    {
    name: 'ACTOR1',
    payment:100,
    },
    {
        name: 'ACTOR2',
        payment:200,
    },
    {
        name: 'ACTOR3',
        payment:300,
    }

];
/*
for(let i=0;i<arrays.length;i++)
{
    console.log(arrays[i].payment-10);
}
console.log(arrays);
*/
/*
arrays.forEach((actor)=>{
    console.log(actor.payment-10);
});
for(let actor of arrays){
    console.log(actor.payment-10);
}
*/
const students=[{
    name:'Student1',
    marks:5
    },
    {
        name:'student2',
        marks:25
    },
    {
        name:"student3",
        marks:10
    }
];

const fail= students.filter((student)=>{
    if(student.marks<=10)
        return true;
    else
        return false;
});
console.log(fail);

const users=[
    {
        fname:"abc",
        lname:"xyz"
    },
    {
        fname:"kumud",
        lname:"shaily"
    },
    {
        fname:"karan",
        lname:"singh"
    }
];
const final =users.map((user)=>{
    return {
        fullname: `${user.fname} ${user.lname}`
    };
});
console.log(final);

const movies=[
    {
        movie:"one",
        budget:100
    },
    {
        movie:"two",
        budget:200
    },
    {
        movie:"three",
        budget:300
    }
];
/*
let total=0;
movies.forEach((movie) => {
    total+=movie.budget;
});
*/
const total=movies.reduce((acc,movie)=>{
    acc+=movie.budget;
    return acc;
},0);
console.log(total);

const admin=[2,1,5];

const user={
    name:'xyz',
    id:5
}
console.log(admin.indexOf(user.id));

console.log(admin.includes(user.id))

movies.find((movie)=>{
    if(movie.budget===200)
        return true;
    else
        return false;

});
console.log(movies);