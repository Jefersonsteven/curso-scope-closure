function myMoneyBox() {
    let moneybox = 0;

    function addCoin(coin) {
        let result = moneybox += coin;
        console.log(`Agregastes ${coin} ahora tienes: ${moneybox}`);
    }
    
    return addCoin;
}

const moneyBox = myMoneyBox();

moneyBox(25);
moneyBox(57);
moneyBox(123);


const moneyBoxDaniel = myMoneyBox();

moneyBoxDaniel(47);
moneyBoxDaniel(25);
moneyBoxDaniel(11);