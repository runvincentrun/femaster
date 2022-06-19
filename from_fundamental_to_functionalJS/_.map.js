let _ = {}


const weapons = ['candlestick', 'lead pipe', 'revolver']
_.map = function (list, callback) {
    let newArr = [];
    for (let i = 0; i < list.length; i++) {
        newArr.push(callback(list[i]));
    }
    return newArr;
}

const calling = function (item) {
    return `broken ${item}`;
}

console.log(_.map(weapons, calling))