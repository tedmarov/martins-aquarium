/**
 *  Location which renders individual location objects as HTML
 */

export const Location = (locationObj) => {
    return `
    <div class="quote__Hilaire">
        <p class="quote__text">"${quoteObj.text}"</p>
        <p class="quote__author">Author: ${quoteObj.author}</p>
        <p class="quote__location">Location: ${quoteObj.location}</p>
    </div>
    `
}