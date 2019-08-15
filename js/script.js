//  api images random /google
//  https://picsum.photos/
//  https://dog.ceo/dog-api/

let buttons = document.getElementsByClassName('button');
let image = document.getElementsByTagName('IMG')[0];

let prev = buttons[0], play = buttons[1], next = buttons[2];

prev.addEventListener('click', subtract);
play.addEventListener('click', slide);
play.addEventListener('click', () => { play.classList.toggle('active') });
next.addEventListener('click', add);

let id, bool = true;
function slide() {
    if (bool) {
        add();
        id = setInterval(add, 2000);
        bool = false;
    } else {
        clearInterval(id);
        bool = true;
    }
}

let imgId = 500;

async function subtract() {
    // let url = 'https://dog.ceo/api/breeds/image/random';
    imgId--;
    if(imgId >= 1 && imgId <= 1000) {
        let url = `https://picsum.photos/id/${imgId}/800`;
        let response = await fetch(url);
    
        if(response.ok) {
            image.src = response.url;
        } else {
            subtract();
        }
    }
}

async function add() {
    // let url = 'https://dog.ceo/api/breeds/image/random';
    imgId++;
    if(imgId >= 1 && imgId <= 1000) {
        let url = `https://picsum.photos/id/${imgId}/800`;
        let response = await fetch(url);
    
        if(response.ok) {
            image.src = response.url;
        } else {
            add();
        }
    }
}