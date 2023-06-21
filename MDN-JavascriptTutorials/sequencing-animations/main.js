const aliceTumbling = [
  { transform: 'rotate(0) scale(1)', backgroundColor: 'white' },
  { transform: 'rotate(720deg) scale(0)', backgroundColor: 'blue' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// alice1.animate(aliceTumbling, aliceTiming);

// Callback hell pyramid of doom

/* function aliceAnimate() {
  alice1.animate(aliceTumbling, aliceTiming).finished.then (() =>{
    alice2.animate(aliceTumbling, aliceTiming).finished.then (() =>{
      alice3.animate(aliceTumbling, aliceTiming)
    })
  })
}

aliceAnimate(); 
*/

// Promise chain

/*
alice1.animate(aliceTumbling, aliceTiming).finished
.then (() =>  alice2.animate(aliceTumbling, aliceTiming).finished)
.then (() =>  alice3.animate(aliceTumbling, aliceTiming).finished)
.catch(error => console.error(`Error animating Alices.`));
*/

// async await

async function animateSequence() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming).finished;
  } catch (error) {
    console.error(`Could not run animation because of ${error}`)
  }
}

animateSequence();