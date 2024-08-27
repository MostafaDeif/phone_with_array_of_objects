
// function createPhone(name, price) {
//     return { name: name, price: price };
// }


let phones = [];

let numberOfPhones = +(prompt("How many phones do you want to add?"));

for (let i = 0; i < numberOfPhones; i++) {
    let name = prompt(`Enter the name for phone ${i + 1} :`);
    let price = +(prompt(`Enter the price for phone ${i + 1}:`));

    // phones.push(createPhone(name, price));
    phones.push({ name: name, price: price });
}

console.log("list: ", phones);

// parameters?

function updatePrice(index, newPrice) {
    let updateIndex = +(prompt("Enter the index of the phone to update the price:"));
    index = updateIndex -1;
    let theNewPrice = +(prompt("Enter the new price:"));
    newPrice = theNewPrice;
    console.clear();
    if (index >= 0 && index < phones.length) {
        phones[index].price = newPrice;
    }
    else {
        console.log("Invalid index");
    }
    console.log("Updated phone list: ", phones);
}

function add(){
    let name = prompt(`Enter the name for phone :`);
    let price = +(prompt(`Enter the price for phone :`));
    phones.push(createPhone(name, price));
    console.clear();
    console.log("Modified phone list:", phones);
}
function deletePhone(index) {
    let deleteIndex = +(prompt("Enter the index of the phone to delete:"));
    index = deleteIndex - 1;
    console.clear();
    if (index >= 0 && index < phones.length) {
        phones.splice(index , 1);
    } else {
        console.log("Invalid index");
    }
    console.log("Updated after delete phone list:", phones);
}

// function render(){
//     console.log("Final phone list:", phones);
// }