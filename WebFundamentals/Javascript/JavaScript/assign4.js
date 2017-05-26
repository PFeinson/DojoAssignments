//printRange(2, 10, 2);
//printRange(2, 10);
printRange(2);


function printRange(start, end, skip) {
    if (typeof skip === "undefined") { 
        skip = 1; 
    }
    if (typeof end === "undefined") { 
        end = start; 
        start = 0; 
    }
    for (var i = start; i < end; i+=skip) {
        console.log(i);
    }
}
