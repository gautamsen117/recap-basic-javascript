let friends = ['chayan', 'jotis', 'rajib', 'durjoy', 'adnan', 'saiful'];
console.log(friends.length);
for(let i = 0; i < friends.length; i++){
    const element = friends[i];
    console.log(element);
}

const numbers = [12, 14, 15, 25, 56, 24, 26, 63, 75, 67];
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// Print the large name using for loop:
const allFriends = ['chayan', 'jotis halder', 'rajib', 'durjoy', 'adnan', 'saiful'];
let largeFriends = allFriends[0];
for(let i = 0; i < allFriends.length; i++){
    let element = allFriends[i];
    if(element.length > largeFriends.length){
        largeFriends = element;
    }
}
console.log(largeFriends);

// Print the large name of an array using for loop
const names = ['Gautam Sen(Mr.Sen)', 'Durjoy Roy', 'Rajib Ahamed', 'Saiful Islam', 'Adnan Fahad', 'Jotis Halder', 'Chayan Sarkar', 'Ankan Biswas'];
let largeName = names[0];
for(let i = 0; i < names.length; i++){
    let element = names[i]
    if(element.length > largeName.length){
        largeName = element;
    }
}
console.log('Large Name:', largeName);