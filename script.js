/*
//1.getElementById

const head = document.getElementById('heading')

console.log(head)

//2.getElementsByTagName

const h=document.getElementsByTagName('h1')

console.log(h)

//3. getElementByClassNmae

const a=document.getElementsByClassName('heading')

console.log(a)

//4.QuerySelector

const b=document.querySelector('.heading')

console.log(b)

//5.querySelectorall

const c=document.querySelectorAll('.heading')

console.log(c);
*/
//Traverse DOM

//1.ParentNode
/*
const d =document.querySelector('.heading')

const parent=d.parentNode;
console.log(parent);


console.log(parent.childNodes);
/*
//3.nextElementSibling
const d =document.querySelector('.heading')
console.log(d.nextElementSibling)

//4. previous sibling

const e=document.querySelector('h2');

console.log(e.previousElementSibling);

//manipulation
/*
const f= document.querySelector('.heading');
f.innerHTML='webdev is cool'
f.style.color='green'
f.style.fontSize='30px'

f.classList.add('title')
f.classList.remove('heading')
*/
/*
const g=document.createElement('h1');
//console.log(g);

g.innerHTML='Jvascript is awesome';
g.classList.add('title');
const p=document.querySelector('.parent');
p.appendChild(g);
//console.log(g);

const sub=document.createElement('h3');
sub.innerHTML='web dev is awesome';
g.appendChild(sub);
//g.insertAdjacentElement('beforebegin',sub);
console.log(g);
*/
//DOM EVENTS
/*
const button = document.querySelector('#btn');
const head = document.querySelector('#heading');

button.addEventListener('click',function(event){
    head.style.color='yellow';
    head.style.fontSize='40px';
    console.log("button clicked",event);
})
*/
/*
const bulbSwitch = document.querySelector('#bulbswitch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click',function(){
    //console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src='./bulb-on.png';
        bulbSwitch.innerHTML='Turn OFF'
    }
    else{

    
    bulb.src='./bulb-off.png';
    bulbSwitch.innerHTML='Turn ON'
    }
})
*/
const root = document.querySelector('#root');

const btn = document.querySelector('button');

function createItem(item){
    const card = document.createElement('div');
    card.classList.add('card');

    const photo = document.createElement('img');
    photo.src=item.thumbnailUrl;
    const title = document.createElement('h4');
    title.innerHTML=item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);

}

function displayImages(items){

    items.forEach(function(item) {
        createItem(item);
    });
    console.log(items);
    


}


btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then(items => {
            displayImages(items);
    })
})


