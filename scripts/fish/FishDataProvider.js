/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Blue",
        food: "Fish, squid, crustaceans.",
        species: "T. albacares",
        length: 35,
        location: "Pacific Ocean (near Maui)",
        image: "https://i.pinimg.com/originals/e2/54/e3/e254e37735f7f7b12b9c4ad1e8355156.jpg"
    },
    {
        name: "Bubba",
        food: "Worms, insect larvae, and some fish.",
        species: "Nandopsis",
        length: 9,
        location: "Central American Caves (near Honduras)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNTe_oyGhdudKMTqPkLHYl2UijNPmdgmE_Yha54_f5REFW3-wv4Vz7xKK4BmV1st1fMlvdKl7lbd4VCH06ptS06chqTxXMA5frAbwj&usqp=CAU&ec=45707745"
    },
    {
        name: "Barry",
        food: "Fish, squid, crustaceans.",
        species: "T. albacares",
        length: 35,
        location: "Pacific Ocean (near Maui)",
        image: "https://i.pinimg.com/originals/e2/54/e3/e254e37735f7f7b12b9c4ad1e8355156.jpg"
    },
    {
        name: "Buddy",
        food: "Mollusks, crustaceans, and lakeweed.",
        species: "Ambystoma mexicana",
        length: 8,
        location: "Central American Caves (near Honduras)",
        image: "https://i.pinimg.com/originals/30/33/2f/30332ff1599f61560272deb3d8f15163.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}


export const addFish = (fishObj) => {
    fishCollection.push(fishObj)
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0) {
            holyFish.push(fish)
        }

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []

    for (const fish of fishCollection) {
    if (fish.length % 5 === 0) {
        soldierFish.push(fish)
        }

    }
    return soldierFish
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0 ) {
        regularFish.push(fish)
        }

    }
    return regularFish
}