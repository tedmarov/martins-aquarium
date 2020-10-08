import { useFish } from "./fish/FishDataProvider.js"
import { FishList } from "./fish/FishList.js"

const allTheFish = useFish()

/* console.log(all)

for (const fish of allTheFish) {
    console.log(fish)
} */

FishList()
