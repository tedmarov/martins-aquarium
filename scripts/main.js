import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./fish/FishDataProvider.js"
import { FishList } from "./fish/FishList.js"
import { useTip } from "./tips/TipDataProvider.js"
import { TipList } from "./tips/TipList.js"
import { useQuote } from "./locations/LocationDataProvider.js"
import { QuoteList } from "./locations/LocationList.js"
import { useLocation } from "./locations/LocationDataProvider.js"
import { LocationList } from "./locations/LocationList.js"


const allTheFish = useFish()
const allTheTips = useTip()
const allTheLocations = useLocation()
const allTheQuotes = useQuote()

//  console.log(all)

// for (const fish of allTheFish) {
    // console.log(fish)
// }

FishList()
TipList()
QuoteList()
LocationList()
mostHolyFish()
soldierFish()
nonHolyFish()


/* const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]

// Only display even numbers
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

*/