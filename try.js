let a = [
    ["Swiggy", 123],
    ["Swiggy", 227],
    ["Zomato", 103],
    ["Zomato", 171],
    ["Dunzo", 131],
    ["Zomato", 122],
    ["Swiggy", 181]
]

function countServiveNeverPaidOver200(data){


    const seenService = new Set();

    let serviceCount = 0;

    for(let payment of data){
        const [serviceName,amount] = payment;
        if(seenService.has(serviceName) && amount < 200){
            continue;
        }

        seenService.add(serviceName)
        if(amount < 200){
            serviceCount++;
        }
    }
    return serviceCount;
}

console.log(countServiveNeverPaidOver200(a))