"use strict";
var Sorter = /** @class */ (function () {
    /*
    collection: number[]

    constructor(collection: number[]) {
        this.collection = collection
    }*/
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([-1, 3, 29, 11]);
sorter.sort();
console.log(sorter.collection);
