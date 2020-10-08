/*
 *  To get you started, here's some properties of Quote.
 *  You need to add more properties to complete the
 *  representation as an object. Then add all the other
 *  quotes to the collection.
 */
const travelQuotes = [
{
    text: "We wander for distractions but we travel for fulfillment.",
    author: "Hilaire Belloc",
    location: "Central American Caves"
},
{
    text: "Why, I’d like nothing better than to achieve some bold adventure, worthy of our trip.",
    author: "Aristophanes",
    location: "Pacific Ocean"
}
]

export const useQuotes = () => {
    return travelQuotes.slice()
}

export const addQuote = (quoteObj) => {
    travelQuotes.push(quoteObj)
}