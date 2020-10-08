import { useFish } from "./FishDataProvider.js"
import { FishList } from "./FishList.js"

const allTheFish = useFish()

/* console.log(all)

for (const fish of allTheFish) {
    console.log(fish)
} */

FishList()
