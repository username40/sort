import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";

const numberCollection = new NumbersCollection([-1,-3,300, 11])
const sorter = new Sorter(numberCollection)
sorter.sort()
console.log(numberCollection.data)

const charactersCollection = new CharactersCollection('AlFa');
const sorter1 = new Sorter(charactersCollection)
sorter1.sort();
console.log(charactersCollection.data)
