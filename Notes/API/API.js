// inclass example using an API -> use fetch() 
// MEOW API 

fetch('https://meowfacts.herokuapp.com/') 
.then(response => response.json())
.then(json => console.log(json.data[0])); 

const addMeowFactsButton = document.getElementById('add-meow-facts-button'); 
addMeowFactsButton.addEventListener('click', addMeowFactsToPage); 

// write a function to fill page with meowfacts 
async function addMeowFactsToPage() {
    const count = 3; 
    const url = 'https://meowfacts.herokuapp.com/'; 
    const response = await fetch(url); 
    const json = await response.json(); 

    for(const meowfact of json.data){ // show on page
        
        const para = document.createElement('p'); 
        para.innerText = meowfact; 
        document.body.append('para'); 
    }
        // BAD -> be very careful with .innerHTML
        // document.body.innerHTML += '<p>${meowfact}</p>'; 
        
}