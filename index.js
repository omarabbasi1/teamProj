// Global Variables
const url = 'https://type.fit/api/quotes'

// DOM Selectors
let buttn = document.getElementById('submit-butt')
let box1 = document.getElementById('first-box')
let logo = document.getElementById("code-box")
let quoteSpot = document.querySelector('#quoteSpot')
let form = document.querySelector("#form")
let p = document.querySelector("#response")

// Listeners
logo.addEventListener("mouseover", function (){alert("Created by: Beth, Omar, Olivia")})

// Fetchers
function fetchAllQuotes(quoteArr) {
    return fetch(url)
    .then (res => res.json())
}

// Render Functions
function renderOneQuote(quoteArr) {
    let randomValue = quoteArr[Math.floor(Math.random() * quoteArr.length)]
    let li = document.createElement('li')

    form.addEventListener("submit", handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        console.log("testing submit")

        let feeling = (e.target["first-box"].value)
        p.textContent = `Here is a quote for your ${feeling} day:`
        li.textContent = randomValue.text
        
        quoteSpot.appendChild(li)
       
        form.reset()
   }

    li.addEventListener("click", handleClick)

    function handleClick(){
        li.textContent = randomValue.text +   
        `(Author - ${randomValue.author})`
    }
}
// / Initializer
fetchAllQuotes().then(renderOneQuote)