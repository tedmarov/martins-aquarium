/**
 *  TipList which renders individual tip objects as HTML
 */

// TODO: Import `useTips` from the data provider module

import { Tip } from "./Tip.js"
import { useTip } from "./TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".contentContainer__right")

const tips = useTip()

let tipHTMLRepresentations = ""
for (const tip of tips) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    tipHTMLRepresentations += Tip(tip)
}

    contentElement.innerHTML += `
    <section class="tip__list">
    <h3>Care Tips</h3>
    <div class="tipContainer">
        ${tipHTMLRepresentations}
    </div>
    </section>
    `

}