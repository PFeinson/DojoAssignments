var arr = [1,2,"Dojo","Hello!", false, 5];
var arrNew = numbersOnly(arr);
noNumbers(arr);
console.log(arr);
console.log(arrNew);


// you could alternatively pass the array you want to modify and exclude the return statement.
function numbersOnly(arr) {
    var arrNew = [];
    for (var i = 0; i < arr.length; ++i) {
        if (typeof arr[i] === "number") {
                arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

function noNumbers(arr) {
    for (var i = 0; i < arr.length; ++i) {
        if (typeof arr[i] === "number") {
            arr[i] = arr[arr.length-1];
            arr.pop();
            --i;
        }
    }
}