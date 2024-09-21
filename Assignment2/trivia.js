
const form = document.querySelector('form');
const startButton = document.getElementById('start-button');

const roundOne = document.getElementById('round-one');
const roundOneQuestions = [
    // Im not sure this is totally necessary (a little confused). 
    // When I ran the code inputing 9 returned correctly but 4 did not and I see no difference in the code. 
    // Turing the answer into a string for both solved that issue. 
    {
        input: document.getElementById('num-planets-input'),
        reactionArea: document.getElementById('num-planets-reaction'),
        //answer: 9,
        answer: '9',
    },
    {
        input: document.getElementById('star-name-input'),
        reactionArea: document.getElementById('star-name-reaction'),
        answer: 'Sol',
    },
];

const nextRoundButton = document.getElementById('next-round-button');

// ERROR : ref to no id 
// const roundTwo = document.getElementById('round-to');
const roundTwo = document.getElementById('round-two');
const roundTwoQuestions = [
    {

        input: document.getElementById('galilean-moons-input'),
        reactionArea: document.getElementById('galilean-moons-reaction'),
        // answer: 4,
        answer: '4',
    },
    {
        input: document.getElementById('surface-temp-input'),
        reactionArea: document.getElementById('surface-temp-reaction'),
        answer: 'Venus',
    },
];

const finishButton = document.getElementById('finish-button');
const finalScore = document.getElementById('final-score');

const scores = [];

// HTML ERROR : needs defer><script> tag to load properly
startButton.addEventListener('click', startGame);


function startGame() {
    roundOne.classList.remove('hidden');
    startButton.classList.add('hidden');

    for (let i = 0; i < roundOneQuestions.length; i++) {
        const question = roundOneQuestions[i];

        function answerQuestion() {
            // ERROR : const not initialized 
            // const score;
            // change to let variable so that it can be updated as user answers questions 
            let score = 0; 

            if (question.input.value == question.answer) {
                score = 1;

                question.reactionArea.innerText = 'Congrats! You got the question right!';
                question.reactionArea.classList.add('correct');
                question.reactionArea.classList.remove('incorrect');
            } else {
                score = 0;

                question.reactionArea.innerText = "Not quite right, but you're almost there!";
                question.reactionArea.classList.add('incorrect');
                question.reactionArea.classList.remove('correct');
            }

            if (scores.length <= i) {
                scores.push(score);
            } else {
                scores[i] = score;
            }
        }

        question.input.addEventListener('change', answerQuestion);

        question.deactivate = () => {
            question.input.removeEventListener('change', answerQuestion);
        };
    }

    form.addEventListener('submit', startRoundTwo);
}

function startRoundTwo(event) {
    event.preventDefault();

    if (scores.length < roundOneQuestions.length) {
        return;
    }

    roundTwo.classList.remove('hidden');
    nextRoundButton.classList.add('hidden');

    roundOneQuestions.forEach(question => question.deactivate());
    // for loop should use .length (same as round 1)
    // for (let i = 0; i < roundTwoQuestions.size; i++) {
        for (let i = 0; i < roundTwoQuestions.length; i++) {
        const question = roundTwoQuestions[i];

        function answerQuestion() {
            // score should be initialized 
            // let score;
            let score = 0; 
            if (question.input.value === question.answer) {
                score = 1;

                question.reactionArea.innerText = 'Congrats! You got the question right!';
                question.reactionArea.classList.add('correct');
                question.reactionArea.classList.remove('incorrect');
            } else {
                score = 0;
                // SYNTAX ERROR : cant use '' in the middle 
                //question.reactionArea.innerText = 'Not quite right, but you're almost there!';
                question.reactionArea.innerText = "Not quite right, but you're almost there!";
                question.reactionArea.classList.add('incorrect');
                question.reactionArea.classList.remove('correct');
            }

            const index = roundOneQuestions.length + i;
            if (scores.length <= index) {
                scores.push(score);
            } else {
                scores[index] = score;
            }
        }

        question.input.addEventListener('change', answerQuestion);

        question.deactivate = () => {
            question.input.removeEventListener('change', answerQuestion);
        };
    }

    form.removeEventListener('submit', startRoundTwo);
    form.addEventListener('submit', finishGame);
}

function finishGame(event) {
    event.preventDefault();

    const totalLength = roundOneQuestions.length + roundTwoQuestions.length;

    if (scores.length < totalLength) {
        return;
    }

    roundTwoQuestions.forEach(question => question.deactivate());

    finishButton.classList.add('hidden');
    finalScore.classList.remove('hidden');

    //ERROR : sum cant be a const needs to be updated to give final score
    // const sum = 0;
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }

    finalScore.innerText = `You got ${sum} out of ${totalLength} questions right.`;
}


