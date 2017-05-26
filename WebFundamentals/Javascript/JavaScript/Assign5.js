

function reverses(arr) {
    var arrNew = arr;
    var temp;
    for (var i = 0; i < arr.length/2; ++i) {
        temp = arrNew[i];
        arrNew[i] = arrNew[(arrNew.length - 1) - i];
        arrNew[(arrNew.length - 1) - i ] = temp;
    }
    return arrNew;
}

function toString(arr, reverse) {
    if (reverse) {
        var arr = reverses(arr);
    }
    for (var i = 0; i < arr.length; ++i) {
        console.log (i, "->", arr[i]);
    }
}

var arr = [1,2,3,4,5];
toString(arr, false);
toString(arr, true);