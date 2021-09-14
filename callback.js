function waitforthreesec(){

    let ms = 3000+new Date().getTime();
    while(new Date() < ms) {}
}
function register(callback) {

    setTimeout(()=>{
        console.log('Register end');
        callback();
    },1000)
    
}
 
function sendEmail(callback)  {

    setTimeout(()=>{
        console.log('Email end');
        callback();
    },5000)
    
}

function login(callback) {
    setTimeout(()=>{
        console.log('Login end');
        callback();
    },3000)
    
}
function getUserData(callback) {
    setTimeout(()=>{
        console.log('Got user Data');
        callback();
    },1000)
    
}

function displayUserData() {
    setTimeout(()=>{
        console.log('user data displayed');
        
    },1000)
    
}


register(function(){
    sendEmail(function() {
        login(function() {
            getUserData(function(){
                displayUserData();
            });
            
        });
        
    });
    
});


console.log('All application work');

