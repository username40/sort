class Sorter {
    /*
    collection: number[]

    constructor(collection: number[]) {
        this.collection = collection
    }*/
    constructor(public collection: number[] | string) {
    }

    sort():void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for(let j = 0; j < length - i -1; j++) {
                if (this.collection instanceof Array ) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }

                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}

const sorter = new Sorter([-1,3,29, 11])
sorter.sort()
console.log(sorter.collection)