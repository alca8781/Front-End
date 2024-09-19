// begin quiz 
// quiz starts when user presses enter key 
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        document.getElementById('Start').style.display = 'none';  // turns off the directions for start 
        document.getElementById('AnimalQuiz').style.display = 'block'; // display quiz
    }
}); 

// initialize variables
let HouseCat = 0;
let Wolf = 0;
let Panda = 0;
let Goldfish = 0;

const buttonClick = {}; // object for storing animal score

// button clicks for quiz answers 
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        const questionId = this.getAttribute('data-question'); 

        // disable buttons to prevent multiple answers by selecting a question ID and all elements with that id and showing as disabled 
        document.querySelectorAll(`.button[data-question="${questionId}"]`).forEach(btn => {
            btn.classList.add('disabled');
            btn.disabled = true; 
        });

        // change button to x to mark as clicked 
        this.classList.add('clicked');
        this.textContent = 'x';

        // user answer from button 
        const answer = this.getAttribute('data-answer');
        question.find(q => q.hasOwnProperty(questionId))[questionId](answer); 
            // q.hasOwnProperty(questionId))[questionId](answer) = callback func. 
            // finds object by id, access function, calls with answer 



        // (I asked chatgpt to help me fix my function so that the user could not answer the same question multiple times and it showed me this.)
        // for my code this funcion is : 
        //      finding the question by the data-question="q1" id, 
        //      accessing the function in JS that is storing the user input as a value to total what animal you are, 
        //      and then it is using that function with the user input to store the value into the answer array  
    });
});

// quiz and animal count 
const question = [
    {
        q1: function (answer) {
            if (answer === 'a') {
                HouseCat++;
            }
            if (answer === 'b') {
                Wolf++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    },

    {
        q2: function (answer) {
            if (answer === 'a') {
                Panda++;
            }
            if (answer === 'b') {
                HouseCat++;
            }
            if (answer === 'c') {
                Wolf++;
            }
            if (answer === 'd') {
                Panda++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    },

    {
        q3: function (answer) {
            if (answer === 'a') {
                HouseCat++;
            }
            if (answer === 'b') {
                Goldfish++;
            }
            if (answer === 'c') {
                HouseCat++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    },

    {
        q4: function (answer) {
            if (answer === 'a') {
                HouseCat++;
            }
            if (answer === 'b') {
                Goldfish++;
            }
            if (answer === 'c') {
                Panda++;
            }
            if (answer === 'd') {
                HouseCat++;
            }
            if (answer === 'e') {
                HouseCat++;
            }
            if (answer === 'f') {
                Wolf++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    },

    {
        q5: function (answer) {
            if (answer === 'a') {
                Panda++;
            }
            if (answer === 'b') {
                Wolf++;
            }
            if (answer === 'c') {
                Goldfish++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    },

    {
        q6: function (answer) {
            if (answer === 'a') {
                Panda++;
            }
            if (answer === 'b') {
                Goldfish++;
            }
            if (answer === 'c') {
                HouseCat++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    },

    {
        q7: function (answer) {
            if (answer === 'a') {
                Panda++;
            }
            if (answer === 'b') {
                Wolf++;
            }
            console.log(HouseCat , Wolf, Panda, Goldfish);
        }
    }

];

// determine result 
function ShowResults() {
    let result = '';

    if (HouseCat > Wolf && HouseCat > Panda && HouseCat > Goldfish) {
        result = "YOU ARE A HOUSE CAT";
    } 
    else if (Wolf > HouseCat && Wolf > Panda && Wolf > Goldfish) {
        result = "YOU ARE A WOLF";
    }
    else if (Panda > HouseCat && Panda > Wolf && Panda > Goldfish) {
        result = "YOU ARE A PANDA";
    }  
    else if (Goldfish > HouseCat && Goldfish > Panda && Goldfish > Wolf) {
        result = "YOU ARE A GOLDFISH";
    }
    else if(Panda === Wolf || Panda === Goldfish || Panda === HouseCat || Wolf === Goldfish || Wolf === HouseCat || HouseCat === Goldfish){
        result = "YOU ARE A LIGER"
    }
    
    // display 
    document.querySelector('#yourAnimal').innerText = result;
    document.querySelector('.submitted').style.display = "block"; 

    // load wiki page based on result
    const wikiButton = document.getElementById('wikiButton');
    const AnimalPage = {
        "YOU ARE A HOUSE CAT": "https://en.wikipedia.org/wiki/Cat",
        "YOU ARE A WOLF": "https://en.wikipedia.org/wiki/Wolf",
        "YOU ARE A GOLDFISH": "https://en.wikipedia.org/wiki/Goldfish",
        "YOU ARE A PANDA": "https://en.wikipedia.org/wiki/Giant_panda",
        "YOU ARE A LIGER": "https://en.wikipedia.org/wiki/Liger"
    };
    
    const Wpage = AnimalPage[result]; 

    // show page as button 
    if (Wpage) {
        wikiButton.style.display = "block";
        wikiButton.addEventListener('click', () => {
            window.location.href = Wpage;
        });
    } else {
        console.error("No Wikipedia page found for the result:", result); 
    }
}

// submit button 
document.querySelector('.SubmitButton').addEventListener('click', function() {
    this.classList.add('clicked');
    this.textContent = 'loading results...';
    ShowResults(); 
});  



