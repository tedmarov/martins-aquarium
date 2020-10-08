import { useFish } from "./fish/FishDataProvider.js"
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