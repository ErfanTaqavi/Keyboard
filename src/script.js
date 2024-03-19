const Line1 = ['q','w','e','r','t','y','u','i','o','p']
const Line2 = ['a','s','d','f','g','h','j','k','l']
const Line3 = ['z','x','c','v','b','n','m']

const Line01 = document.querySelector('.line1')
const line02 = document.querySelector('.line2')
const line03 = document.querySelector('.line3')

const Buttons = document.querySelectorAll('.Buttons')
const Keyboard = document.getElementById('Keyboard')
const Input = document.getElementById('input')



for (const lett in Line1) {
   let button = document.createElement('button');
   button.textContent=Line1[lett]
   button.setAttribute('key-data', Line1[lett])
   button.className ='Buttons BW'
   Line01.appendChild(button);

}
for (const lett in Line2) {
    let button = document.createElement('button')
    button.textContent=Line2[lett]
    button.setAttribute('key-data', Line2[lett])

    button.className ='Buttons BW'
    line02.appendChild(button);
}
for (const lett in Line3) {
    let button = document.createElement('button')
    button.textContent=Line3[lett]
    button.setAttribute('key-data', Line3[lett])

    button.className ='Buttons BW'
    line03.appendChild(button);
}

let letter

function ChangeBgColor(key){ 
    key.classList.add("active");

    setTimeout(()=>{
        key.classList.remove("active");
     }, 200);
}
function WriteText (letter){
    Input.value += letter

}


Input.addEventListener('keypress',function(event){
     letter = event.key
    console.log(event)
    const keyElement = document.querySelector(`[key-data="${letter}"]`)
    if(event.code){
    if (keyElement){
        // console.log(keyElement)
        ChangeBgColor(keyElement);
        
    }
    }
})


Keyboard.addEventListener('click', function(event){
    const keyElement = event.target.closest(".Buttons");
    // console.log(event)

    // console.log(keyElement)
    if (keyElement) {
         letter = keyElement.getAttribute("key-data");
        ChangeBgColor(keyElement);
        WriteText(letter)
      }
    
    
})

