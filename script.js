let titleElement = document.getElementById('hero-title') // 
// console.log(titleElement)

// titleElement.style.textAlign = 'center'


let h4Element = document.querySelector('#hero-text') // querySelector only selects one element, popular because you can target any css selector
// console.log(h4Element);

// h4Element.textContent = "rewriting this <strong>text</strong>" //this doesnt work
h4Element.innerHTML = "rewriting this <strong>text</strong>" // this does work

// h4Element.style.color = 'blue'

// getAttribute
// setAttribute
// hasAttribute

let linkOne = document.querySelector('#link-one')

linkOne.setAttribute("href", "https://google.com")

// Targets multiple elements
// getElementsByTagName
// getElementsByClassName

let ulElement = document.querySelector('#comments')

// let liElement = ulElement.getElementsByTagName('li') // This creates an array

// for (let comment of liElement) {
//     comment.style.fontSize = '30px'
// }


// HTML in line = <button id="" onclick="reset()"> LEAST common way to do this 
// Assigning DOM element properties resetBtn.onclick = reset;


// addEventListener() MOST COMMON WAY - method

let btn = document.querySelector('.hero-button')


// btn.addEventListener('click', () => {}) arrow function

// function clickEventFunction() {} making a function first and then referencing it
// btn.addEventListener('click', clickEventFunction)

btn.addEventListener('click', function(evt) {
    
    const li = document.createElement('li')
    let input = document.querySelector('input')
    li.textContent = input.value
    ulElement.appendChild(li)
    input.value = ''
})

// click event, mouseover, scroll, keydown, keyup

/*
event delegation 

/ function handleClick(evt) {
    evt.target.style.color // TARGET is useful for targetting specific child elements when your queryselector is pointing to the parent. This is useful for event delegation for improved websites
}
document.querySelector('ul').addEventListener('click', handleClick)

removeEventListener <- Requires a function name
*/




 