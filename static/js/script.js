
let navBar = document.querySelector('.navbar');
let counterNumber = document.querySelector('#scroller');


let userCounter = 0;
let downloadCounter = 0;
let customerCounter = 0;
let developerCounter = 0;

const countersValue = [200, 600, 100, 450];
const tages = [
    'users',
    'downloads',
    'customers',
    'developers'
]

window.onscroll =  () => {
    let scroll = window.scrollY;
    if(scroll >= 60){
        navBar.classList.remove('bg-transparent');
        navBar.classList.remove('navbar-dark');
        navBar.classList.add('bg-light');
        navBar.classList.add('shadow-sm');
        navBar.classList.add('navbar-light');

    }else{
        navBar.classList.add('bg-transparent');
        navBar.classList.add('navbar-dark');
        navBar.classList.remove('bg-light');
        navBar.classList.remove('shadow-sm');
        navBar.classList.remove('navbar-light');
    }
    let status = true;
    if(scroll >= 400 && scroll <= 450){
        if(status){
            for (let index = 0; index < tages.length; index++) {
                counterFunc(countersValue[index], tages[index]);
                status = false;
            }
        }
        
    }
}



async function counterFunc(counter, id){
    for (let index = 0; index <= counter; index+=5) {
        document.querySelector(`#${id}`).innerHTML = `${index}`;
        await delay(2);
        
    }

}

function delay(time){
    return new Promise (resolve => {
        setInterval(resolve, time)
    });
}


