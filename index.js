// Global Variables
const url = 'https://type.fit/api/quotes'

// DOM Selectors
let buttn = document.getElementById('submit-butt')
let box1 = document.getElementById('first-box')
let qrCode = document.getElementById("code-box")
let quoteSpot = document.querySelector('#quoteSpot')
let form = document.querySelector("#form")
let p = document.querySelector("#response")


// Listeners
qrCode.addEventListener("mouseover", function (){alert("Created by: Beth, Omar, Olivia")})
form.addEventListener("submit", (renderOneQuote) => handleSubmit(e))


// Fetchers
function fetchAllQuotes(quoteArr) {
    return fetch(url)
    .then (res => res.json())
    // .then (console.log)
}

// Render Functions
function renderOneQuote(quoteArr) {
    let randomValue = quoteArr[Math.floor(Math.random() * quoteArr.length)]
    let li = document.createElement('li')
    li.textContent = randomValue.text

    quoteSpot.appendChild(li)

    li.addEventListener("click", handleClick)

    function handleClick(){
        //console.log("testing click")
        li.textContent = randomValue.text +   
        `(Author - ${randomValue.author})`
    }
}
    
// Event Handlers
function handleSubmit(e) {
    e.preventDefault()
    console.log("testing submit")
    let feeling = (e.target["first-box"].value)
    p.innerText = `Here is a quote for your ${feeling} day:`

    
     //renderOneQuote()
    form.reset()
}

// / Initializer
fetchAllQuotes().then(renderOneQuote)