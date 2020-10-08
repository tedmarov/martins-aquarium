/**
 *  Location which renders individual location objects as HTML
 */

export const Quote = (quoteObj) => {
    return `
    <div class="quote__Hilaire">
        <p class="quote__text">"${quoteObj.text}"</p>
        <p class="quote__author">Author: ${quoteObj.author}</p>
        <p class="quote__location">Location: ${quoteObj.location}</p>
    </div>
    `
}

export const Location = (locationObj) => {
    return `
    <div class="location__Pacific">
        <img class="location__image" src="${locationObj.image}" alt="">
        <p class="location__name">Name: ${locationObj.name}</p>
        <p class="location__geo">Location: ${locationObj.geo}</p>
    </div>
    `
}