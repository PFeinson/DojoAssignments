thirtyDays();
tenGrand();
oneBillion();
infinite();

//30 days
function thirtyDays() {
    var currentVal = 1;

    for (var i = 1; i <= 30; ++i) {
        currentVal *= 2;
    }

    console.log(currentVal/100 + "$ after 30 days");

}

// 10k
function tenGrand() {
    var currentVal = 1;
    var numDays = 0;


    while (currentVal/100 < 10000) {
        ++numDays;
        currentVal *= 2;
    }

    console.log("It would take", numDays, "days for a penny to double into 10k");
}

// 1B
function oneBillion() {
    var currentVal = 1;
    var numDays = 0;


    while (currentVal/100 < 1000000000) {
        ++numDays;
        currentVal *= 2;
    }

    console.log("It would take", numDays, "days for a penny to double into 10k");
}

function infinite() {
        var currentVal = 1;
    var numDays = 0;


    while (currentVal/100 < Infinity) {
        ++numDays;
        currentVal *= 2;
    }

    console.log("It would take", numDays, "days for a penny to double into 10k");
}