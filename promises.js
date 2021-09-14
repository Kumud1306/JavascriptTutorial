


function register() {

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Register end');
            resolve();
        },1000)
        
    });
}
 
function sendEmail()  {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Email end');
            resolve();
        },5000)
    });
}

function login() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Login end');
            resolve();
        },3000)
    });
    
}
function getUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Got user Data');
            resolve();
        },1000)
    });
    
}

function displayUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('user data displayed');
            
        },1000)
    });
    
    
    
}
/*
register()
    .then(sendEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserData)
    .catch((err)=>{
        console.log('error',err)
    })

*/


//Async await
async function authenticate(){

    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
}
authenticate().then(()=>{
    console.log('All set');
})

console.log('All application work');