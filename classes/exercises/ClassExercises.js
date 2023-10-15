// Define your Book class here:
class Book {
    constructor(title, author, copyright, ISBN, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.ISBN = ISBN;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    //Updates times checked out with +1 each time used
    checkout(uses = 1) {
        this.timesCheckedOut += uses
    };

}


// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyright, ISBN, pages, timesCheckedOut, discarded){
        super(title, author, copyright, ISBN, pages, timesCheckedOut, discarded)
    }
    // if Manual is more than 5 years old, disposeOf
    disposeOf(year) {
        if (year - this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}


class Novel extends Book {
    constructor(title, author, copyright, ISBN, pages, timesCheckedOut, discarded){
        super(title, author, copyright, ISBN, pages, timesCheckedOut, discarded)
    }
    // if checked out more that 100 times, must be disposed of
    disposeOf(){
        if(this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }

}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejuidice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'no' ) 

let topSecretShuttleBuilding = new Manual('Top Secret Shuttle Building', 'Redacted', 2013, Number(0000000000000), 1147, 1, 'no')

// Code exercises 4 & 5 here:

topSecretShuttleBuilding.disposeOf(2023);
console.log(topSecretShuttleBuilding)

console.log(prideAndPrejudice)
prideAndPrejudice.checkout(5);
console.log(prideAndPrejudice)
