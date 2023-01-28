function sumWithClosure(firstNum) {
    let x = firstNum;

    function sum(secondNum) {
        let y = secondNum;

        if (x === undefined) {
            x = 0;
        } else if (y === undefined) {
            y = 0;
        }
        
        return console.log(x + y);
    }
    return sum;
  }

sumWithClosure(2)(3);
sumWithClosure(90)();