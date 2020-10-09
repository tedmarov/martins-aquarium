/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { Fish } from "./Fish.js"
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

const buildFishContainerHTML = (arrayOfFish) => {

    let fishHTMLRepresentations = ""
    for (const fish of arrayOfFish) {

        fishHTMLRepresentations += Fish(fish)
    }

        return fishHTMLRepresentations
}

export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

const holyFishes = mostHolyFish()
console.log(holyFishes)

const holyFishHTML = buildFishContainerHTML(holyFishes)
console.log(holyFishHTML)



const soldierFishes = soldierFish()
console.log(soldierFishes)

const soldierFishHTML = buildFishContainerHTML(soldierFishes)
console.log(soldierFishHTML)


const nonHolyFishes = nonHolyFish()

const nonHolyFishHTML = buildFishContainerHTML(nonHolyFishes)

/* const fishes = useFish()

let fishHTMLRepresentations = ""
for (const fish of fishes) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    /* fishHTMLRepresentations += Fish(fish) 
}*/

    contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
        ${holyFishHTML}
        ${soldierFishHTML}
        ${nonHolyFishHTML}
    </div>
    </section>
`

}