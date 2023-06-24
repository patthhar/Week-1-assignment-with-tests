var counter = 1;

function printCounter() {
    console.log(counter);
    counter ++;
    setTimeout(printCounter, 1000);
}

setTimeout(printCounter, 1000);

