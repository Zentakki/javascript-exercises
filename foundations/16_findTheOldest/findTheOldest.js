const findTheOldest = function(people) {
    const copyPeople = [...people]
    const currentAge = function(birth, death = new Date().getFullYear()) {
        return death - birth;
    }

    copyPeople.forEach(el =>
        el["age"] = el.yearOfDeath
                    ? currentAge(el.yearOfBirth, el.yearOfDeath)
                    : currentAge(el.yearOfBirth)
    );
    // copyPeople.sort((a, b) => {
    //     if ( a.age < b.age) return -1;
    //     if ( a.age > b.age) return 1;
    //     if ( a.age = b.age) return 0;
    // })
    copyPeople.sort((a, b) => a.age - b.age);
    return copyPeople.at(-1)
};

// Do not edit below this line
module.exports = findTheOldest;
