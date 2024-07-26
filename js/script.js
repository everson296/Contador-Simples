'use strict'

const decrement = document.getElementById('decrementar');
const reset = document.getElementById('reset');
const crement = document.getElementById('acrescentar');

const value = document.getElementById('number');
const btns = document.querySelectorAll('input')

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        const btn = e.currentTarget.classList;
        
        if(btn.contains("decrementar")){
           count--;
        }else if(btn.contains("acrescentar")){
                 count++;
        }else{
            count = 0;
        }
           
        if(count > 0){
            value.style.color = 'greenyellow';
        }else if(count < 0){
            value.style.color = 'red';
        }else if(count === 0){
            value.style.color = 'white'
        }
        value.textContent = count;
    })
})

let count = 0;