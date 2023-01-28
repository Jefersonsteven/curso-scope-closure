function createPetList() {
    let list = [];

    function addPet(pet) {
        if (pet != undefined) {
            list.push(pet);
        } else if (pet === undefined) {
            return list;
        }
    }
    return addPet;
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();