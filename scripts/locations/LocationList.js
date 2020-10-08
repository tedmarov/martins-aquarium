/**
 *  LocationList which renders individual quote objects as HTML
 */

// TODO: Import `useLocation` from the data provider module

import { Quote } from "./Location.js"
import { useQuote } from "./LocationDataProvider.js"

export const QuoteList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

const quotes = useQuote()

let quoteHTMLRepresentations = ""
for (const quote of quotes) {

/*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */
   
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

import { Location } from "./Location.js"
import { useLocation } from "./LocationDataProvider.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

const locations = useLocation()

let locationHTMLRepresentations = ""
for (const location of locations) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    locationHTMLRepresentations += Location(location)

}

    contentElement.innerHTML += `
    <section class="locationList">
    <h3>Places to Go</h3>
    <div class="locationContainer">
        ${locationHTMLRepresentations}
    </div>
    </section>
    `

}