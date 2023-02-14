
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log


let randomNum = [];
newFunction();
alert(randomNum)


setTimeout(timer, 300)
function newFunction() {
    while (randomNum.length < 5) {
        let randomNumber = Math.floor(Math.random() * 30000);
        randomNum.push(randomNumber);
    }
    console.log(randomNum);
}

function timer() {
    console.log('ciao')
    let userNumContainer = []
    for (i = 0; i < 3; i++) {
        userNum = parseInt(prompt('Quali sono i numeri che hai visto?'))
        console.log(userNum)
        userNumContainer.push(userNum)
    }
    console.log(userNumContainer)
    let correctNums = [];
        for (i = 0; i < userNumContainer.length; i++) {
            if (randomNum.includes(userNumContainer[i])) {
                correctNums.push(userNumContainer[i]);
            }
        }
        console.log("Numero di numeri indovinati: " + correctNums.length);
        console.log("Numeri indovinati: " + correctNums);
    
}


