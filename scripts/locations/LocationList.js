/**
 *  LocationList which renders individual quote objects as HTML
 */

// TODO: Import `useLocation` from the data provider module

import { Quote } from "./locations/Location.js"
import { useQuotes } from "./locations/LocationDataProvider.js"

export const QuoteList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

const quotes = useQuotes()

let quoteHTMLRepresentations = ""
for (const quote of quotes) {
    quoteHTMLRepresentations += Quote(quote)
}

    contentElement.innerHTML += `
    <section class="travel__quotes">
    <h3>Travel Quotes</h3>
    <div class=quoteContainer>
        ${quoteHTMLRepresentations}
    </div>
    </section>
    `

}