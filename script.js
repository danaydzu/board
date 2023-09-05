// let temperature = 12;
// alert(9/5 * temperature + 32);

// let name = "Василий";
// let admin;
// admin = name;
// alert(admin);
// alert(1000 + "108")

const RANDOM_MIN_NUMBER = 1;
const RANDOM_MAX_NUMBER = 5;
const NUMBER_OF_DIGITS = 4;
const COUNT_FIVE = 5;



function start() {
    const yes = confrim('Хотите сыграть в игру?');

    if (!yes) {
        return;
    }

    play()

}
function compareNumbers(a, b) {
    if (a < b) {
        retuen - 1;
    }
    else if (a > b) {
        return 1;

    }
    else {
        return 0;
    }

}

function playGame() {

    const generated = getRandomNumber(RANDOM_MIN_NUMBER, RANDOM_MAX_NUMBER);

    let entered = null;
    let attempts = 0;

    while (generated !== entered) {

        const prompted = Number(prompt('Введите число'));

        if (isNaN(prompted)) {
            continue;
        }

        entered = prompted;
        attempts++;

        switch (compareNumbers(entered, generated)) {
            case -1:
                alert(`Загаданное число больше ${entered}, повторите попытку`);
            case 1:
                alert(`Загаданное число больше ${entered}, повторите попытку`);
            case 0:
                alert(`Загаданное число больше ${entered}, повторите попытку`);


        }
    }

}



function getSecretNumber() {
    const secret = []
    for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
        let generated;


        do {
            generated = getRandomNumber(1, 5);
        } while (secret.includes(generated));


        secret.push(generated);

    }
    return secret

}

function play() {
    const generated = getSecretNumber();

    let entered = null;
    let attempts = 0;



    while (true) {

        const prompted = prompt('Введите число');


        if (isNaN(Number(prompted))) {
            continue;
        }

        entered = prompted.split('');
        attempts++


        let cows = 0;
        let bulls = 0;


        //for (let [digit,index] of generated.entries())
        for (let i = 0; i < generated.length; i++) {
            if (generated[i] === Number(entered[i])) {
                bulls += 1
            }
        }
        for (let i = 0; i < generated.length; i++) {
            for (let k = 0; k < generated.length; k++) {
                if (generated[i] === Number(entered[k])) {
                    cows += 1

                }
            }

        }
        console.log(cows)
        console.log(bulls);


        if (attempts === NUMBER_OF_DIGITS && bulls !== NUMBER_OF_DIGITS) {
            alert('Ты проиграл');
            break;
        }
        if (attempts === NUMBER_OF_DIGITS || bulls === NUMBER_OF_DIGITS) {
            alert('Ты выиграл');
            break;
        }


    }
}
// play()


function enumeration(params, params2) {
    i = params;
    a = params2;
    while (i <= a) {
        console.log(i++);

    }


}
// enumeration(1,100);







function getRandomNumber(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}
function arrayGenerator(key) {
    const NAME_PRODUCT = ['shoes', 'blouse', 'scarf', 'pants', 'cap'];

    const MASSIV_PRODUCT = [];

    for (let index = 0; index < key; index++) {
        let massiv = new Map();
        let names = NAME_PRODUCT[getRandomNumber(0, NAME_PRODUCT.length - 1)];
        let count = getRandomNumber(1, 3);
        let price = getRandomNumber(100, 1000);
        let trues;
        let index2 = 0;



        for (; index2 < MASSIV_PRODUCT.length; index2++) {

            if (MASSIV_PRODUCT[index2].get('NAME_PRODUCT') == names) {
                trues = true;


                break;
            }

        }
        if (trues) {
            MASSIV_PRODUCT[index2].set('count', MASSIV_PRODUCT[index2].get('count') + count);
            MASSIV_PRODUCT[index2].set('total_price', MASSIV_PRODUCT[index2].get('total_price') + MASSIV_PRODUCT[index2].get('price') * count);

        } else {

            massiv.set('NAME_PRODUCT', names);
            massiv.set('count', count);
            massiv.set('price', price)
            massiv.set('total_price', price * count)
            MASSIV_PRODUCT.push(massiv);

        }







    }



    console.log(MASSIV_PRODUCT);
    return MASSIV_PRODUCT;


}
function countBasketPrice(massiv) {
    let totalPriceBacket = 0;
    for (const iterator of massiv) {
        totalPriceBacket += iterator.get('total_price');
    }
    return totalPriceBacket
}



// console.log(countBasketPrice(arrayGenerator(10)));

// for(let i = 0; i < 10; console.log(i++)){}
function pyramid() {
    let massiv = []
    const block = '*';
    const space = ' ';
    let counter = 0;
    for (let i = 1; i <= 20; i++) {

        massiv.push(block.repeat(i).split(''))

    }

    counter += massiv[massiv.length - 1].length;

    for (const element of massiv) {

        let i = 0;
        let count = element.length;

        if (count % 2 === 0) {
            while (element.length < counter) {
                element.unshift(space)
                element.push(space)


            }
  
        }

        else {
            while (element.length + 1 < counter) {
                element.unshift(space)
                element.push(space)


            }

            console.log(element.join(''))
        }

        

    }

}




// pyramid()

// let opo = [1,2,3];

// opo.unshift(' ') 
// console.log(opo)

let name = "Ilya"

let developrt = {
    name,
    age: 26,
    isCoding: false,
    linesCoding:0,
    startWork: function(numberLinesOfCode){
        if (this.isCOding){
            this.linesOfCode += numberLinesOfCode;
        }
        else {
            console.log('Сначала начни писать код');

        }

    },
    startCoding: function(){
        this.isCoding = true;
    },
    stopCoding: function() {
        this.isCoding = false;
    },

    skills: {
        js: 4,
        html: 5,
        css: 3
    }


};

let manager = {
    ...developrt,
    skills: {...developrt.skills}

}

function objectReturn(number) {
    const massiv = String(number).split('').reverse();
    const lengthMassiv =  massiv.length;
    const ireturnedArray = {}




        if (lengthMassiv > 3){
            return {};
        }
        if (lengthMassiv > 2){
            ireturnedArray['сотни'] = Number(massiv[2]);

        }
        if (lengthMassiv > 1){
            ireturnedArray['десятки'] = Number(massiv[1]);

        }
    
        if (lengthMassiv > 0){
            ireturnedArray['единицы'] = Number(massiv[0]);

        }


    return ireturnedArray;
}
// console.log(objectReturn(getRandomNumber(1,900)));


