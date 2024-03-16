const Line1 = ['q','w','e','r','t','y','u','i','o','p']
const Line2 = ['a','s','d','f','g','h','j','k','l']
const Line3 = ['z','x','c','v','b','n','m']

const Line01 = document.querySelector('.line1')
const line02 = document.querySelector('.line2')
const line03 = document.querySelector('.line3')

const Buttons = document.querySelectorAll('.Buttons')

for (const letter in Line1) {
   let button = document.createElement('button');
   button.textContent=Line1[letter]
   button.className ='Buttons BW'
   Line01.appendChild(button);

}

for (const letter in Line2) {
    let button = document.createElement('button')
    button.textContent=Line2[letter]
    button.className ='Buttons BW'
    line02.appendChild(button);
}
for (const letter in Line3) {
    let button = document.createElement('button')
    button.textContent=Line2[letter]
    button.className ='Buttons BW'
    line03.appendChild(button);
}

