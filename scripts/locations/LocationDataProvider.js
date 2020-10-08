/*
 *  To get you started, here's some properties of Quote.
 *  You need to add more properties to complete the
 *  representation as an object. Then add all the other
 *  quotes to the collection.
 */
const travelQuote = [
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

const locationList = [
{
    image: "https://www.mauiticketsforless.com/wp-content/uploads/2016/03/maui-island.jpg",
    name: "U.S. Pacific Ocean",
    geo: "Maui, Hawaii"
},
{
    image: "http://fromargentinatoalaska.com/wp-content/uploads/2017/06/DSC05889.jpg",
    name: "Central American Caves",
    geo: "Honduras"
}
]

export const useQuote = () => {
    return travelQuote.slice()
}

export const addQuote = (quoteObj) => {
    travelQuote.push(quoteObj)
}

export const useLocation = () => {
    return locationList.slice()
}

export const addLocation = (locationObj) => {
    locationList.push(locationObj)
}