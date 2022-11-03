const findTheOldest = function(arrays) {
    let foundOldestAge = arrays.reduce((oldest,curr) => {
        let oldestAge = findAge(oldest.yearOfBirth,oldest.yearOfDeath);
        let currentAge = findAge(curr.yearOfBirth,curr.yearOfDeath);
        return oldestAge > currentAge ? oldest:curr;
    });
    return foundOldestAge;
}

function findAge(birth,death) {
    let age 
    if(death === undefined) {
        death = new Date().getFullYear();
    }
    age = death-birth;
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
