import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([-1,-3,300, 11])
const sorter = new Sorter(numberCollection)
sorter.sort()
console.log(numberCollection.data)

const charactersCollection = new CharactersCollection('AlFa');
const sorter1 = new Sorter(charactersCollection)
sorter1.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
const sorter2 = new Sorter(linkedList);
sorter2.sort();
linkedList.print();