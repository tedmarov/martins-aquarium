export const Fish = (fishObj) => {
    return `
    <div class="fish__Blue">
    <p class="fish__name">Name: ${fishObj.name}</p>
    <img class="fish__image" src="${fishObj.image}" alt="">
    <p class="fish__species">Species: ${fishObj.species}</p>
    <p class="fish__length">Length: ${fishObj.length}</p>
    <p class="fish__location">Harvest Location: ${fishObj.location}</p>
    <p class="fish__diet">Diet: ${fishObj.food}</p>
</div>
    `   
}

