const _ = {};
_.each = function (list, callback) {
    if (Array.isArray(list)) {
        for (item of list) {
            callback(item);
        }
    } else {
        for (let key in list) {
            callback(list[key]);
        }
        // loop through object
    }
    // loop through the list
    // call the callback with a list item
}
const weapons = ['candlestick', 'lead pipe', 'revolver']


_.map = function (list) {
    const newArr = [];
    _.each(list, (item) => {
        newArr.push(`Broken ${item}`);
    })
    return newArr;
}

console.log(_.map(weapons))