import { useFish } from "./fish/FishDataProvider.js"
import { FishList } from "./fish/FishList.js"
import { useTip } from "./tips/TipDataProvider.js"
import { TipList } from "./tips/TipList.js"

const allTheFish = useFish()
const allTheTips = useTip()

//  console.log(all)

// for (const fish of allTheFish) {
    // console.log(fish)
// }

FishList()
TipList()