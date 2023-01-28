
function gretting() {
    let username = 'Gfrey';

    function displayUserName() {
        return `Hello, ${username}`
    }
    return displayUserName;
}

const g = gretting();

console.log(g);
console.log(g());