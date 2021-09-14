function login(username, password){
    console.log(`${username}, logged in successfully`)
    console.log(`The password for ${username} is ${password}`)
}
login('john','john@123');
login('kumud','kumud@123');


function uppercase(str){

    return (str.toUpperCase())

}
const result=uppercase('kumud');
const res=uppercase('shaily');

console.log(result)
console.log(res)

function calculateArea(w,h=50){

    const area=w*h;
    return area;
}

const a=calculateArea(10);
console.log(a)

function varscope(){

    const filename='xyz.pdf'
    console.log(filename)
}
varscope();

function login1(){
    console.log('Logged in');

}
//function expression anonymous function
const login2 = function(){
    console.log('Logged out');
}
login2()

//callback
function formatText(text,formatc){

    return typeof formatc==='function'? formatc(text):text;
}
const x=formatText('hello',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
});
console.log(x);

//Immediately invoked function expression
(function setup(){
    console.log('setup done');
})();


//Arrow functions

const log1 = ()=>{
    console.log('Logged in');
}
log1();


const sum =(num1,num2) => num1+num2;


const re=sum(2,3);
console.log(re);

//Good Practices
//naming
//one function-one action
