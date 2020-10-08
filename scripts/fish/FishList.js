/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

const fishes = useFish()

let fishHTMLRepresentations = ""
for (const fish of fishes) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    fishHTMLRepresentations += Fish(fish)
}

    contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
        ${fishHTMLRepresentations}
    </div>
    </section>
`

}