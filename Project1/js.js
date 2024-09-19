
let HouseCat = 0;
let Wolf = 0;
let Panda = 0;
let Goldfish = 0;

const buttonClick = {};

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        const questionId = this.getAttribute('data-question');

        // Disable all buttons for this question
        document.querySelectorAll(`.button[data-question="${questionId}"]`).forEach(btn => {
            btn.classList.add('disabled');
            btn.disabled = true; // Disable the button to prevent further clicks
        });

        // Add clicked class and change text to 'x'
        this.classList.add('clicked');
        this.textContent = 'x';

        // Call the appropriate function based on the question ID and answer
        const answer = this.getAttribute('data-answer');
        question.find(q => q.hasOwnProperty(questionId))[questionId](answer);
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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);
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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);
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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);

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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);

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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);

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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);

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
            console.log(HouseCat);
            console.log(Wolf);
            console.log(Panda);
            console.log(Goldfish);


        }
    }

];

function ShowResults() {
    let result = '';

    // house cat
    if (HouseCat > Wolf && HouseCat > Panda && HouseCat > Goldfish) {
        result = "You are a house cat";
    } 
    // wolf
    else if (Wolf > HouseCat && Wolf > Panda && Wolf > Goldfish) {
        result = "You are a wolf";
    }
    // panda 
    else if (Panda > HouseCat && Panda > Wolf && Panda > Goldfish) {
        result = "You are a panda";
    }
    // goldfish  
    else if (Goldfish > HouseCat && Goldfish > Panda && Goldfish > Wolf) {
        result = "You are a goldfish";
    }
    // tie 
    else if(Panda === Wolf || Panda === Goldfish || Panda === HouseCat || Wolf === Goldfish || Wolf === HouseCat || HouseCat === Goldfish){
        result = "You are a liger"
    }
    

    document.querySelector('#resultText').innerText = result;
    document.querySelector('.onSubmit').style.display = "block"; 

    const wikiButton = document.getElementById('wikiButton');
    const AnimalPage = {
        "You are a house cat": "https://en.wikipedia.org/wiki/Cat",
        "You are a wolf": "https://en.wikipedia.org/wiki/Wolf",
        "You are a goldfish": "https://en.wikipedia.org/wiki/Goldfish",
        "You are a panda": "https://en.wikipedia.org/wiki/Giant_panda",
        "You are a liger": "https://en.wikipedia.org/wiki/Liger"
    };
    
    const Wpage = AnimalPage[result]; 

    if (Wpage) {
        wikiButton.style.display = "block";
        wikiButton.addEventListener('click', () => {
            window.location.href = Wpage;
        });
    } else {
        console.error("No Wikipedia page found for the result:", result); 
    }
}

document.querySelector('.submit').addEventListener('click', ShowResults);



