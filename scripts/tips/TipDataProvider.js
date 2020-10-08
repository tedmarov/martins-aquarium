/*
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const tipCollection = [
    {
        topic: "Water Salination",
        text: "No salty, lorem ipsum.",
        paragraph: "I said a hip hop, \n The hippie to the hippie \n The hip hip a hop, \n and you don't stop, a rock it \n To the bang bang boogie, \n say up jump the boogie, \n To the rhythm of the boogie, the beat. \n A Skiddleebebop, we rock, scooby doo, \n And guess what, America, we love you \n 'Cause you rocked and a rolled with so much soul, \n You could rock 'til a hundred and one years old. \n I don't mean to brag, I don't mean to boast, \n But we like hot butter on our breakfast toast \n Rock it up, Baby Bubba! \n Baby Bubba to the boogie da bang bang da boogie \n To the beat, beat, it's so unique \n Come on everybody and dance to the beat!"
    },
    {
        topic: "Cleaning Frequency",
        text: "No algae, lorem ipsum.",
        paragraph: "I said a hip hop, \n The hippie to the hippie \n The hip hip a hop, \n and you don't stop, a rock it \n To the bang bang boogie, \n say up jump the boogie, \n To the rhythm of the boogie, the beat. \n A Skiddleebebop, we rock, scooby doo, \n And guess what, America, we love you \n 'Cause you rocked and a rolled with so much soul, \n You could rock 'til a hundred and one years old. \n I don't mean to brag, I don't mean to boast, \n But we like hot butter on our breakfast toast \n Rock it up, Baby Bubba! \n Baby Bubba to the boogie da bang bang da boogie \n To the beat, beat, it's so unique \n Come on everybody and dance to the beat!"
    },
    {
        topic: "Replacing Equipment",
        text: "No faulty, lorem ipsum.",
        paragraph: "I said a hip hop, \n The hippie to the hippie \n The hip hip a hop, \n and you don't stop, a rock it \n To the bang bang boogie, \n say up jump the boogie, \n To the rhythm of the boogie, the beat. \n A Skiddleebebop, we rock, scooby doo, \n And guess what, America, we love you \n 'Cause you rocked and a rolled with so much soul, \n You could rock 'til a hundred and one years old. \n I don't mean to brag, I don't mean to boast, \n But we like hot butter on our breakfast toast \n Rock it up, Baby Bubba! \n Baby Bubba to the boogie da bang bang da boogie \n To the beat, beat, it's so unique \n Come on everybody and dance to the beat!"
    }
]

export const useTip = () => {
    return tipCollection.slice()
}

export const addTip = (tipObj) => {
    tipCollection.push(tipObj)
}