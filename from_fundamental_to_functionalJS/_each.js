const _ = {

}

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

function log(item) {
    console.log(item + '!')
}

function log2(item) {
    console.log(item + '!!')
}

var obj = {
    name: "John",
    age: 18,
}
const a = [1, 2, 3]
_.each(obj, log2)