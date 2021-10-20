import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";

const numberCollection = new NumbersCollection([-1,-3,300, 11])
const sorter = new Sorter(numberCollection)
sorter.sort()
console.log(numberCollection.data)