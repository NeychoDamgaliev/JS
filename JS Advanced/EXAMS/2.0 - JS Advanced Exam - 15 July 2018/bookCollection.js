class BookCollection {
    constructor (shelfGenre, room, shelfCapacity) {
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelfCapacity = shelfCapacity;
            this.shelf = [];
    }

    get room() {
        return this._room;
    }
    set room(currentRoom) {
        let validRooms = ["livingRoom","bedRoom","closet"];
        if(!validRooms.includes(currentRoom)) {
            throw new Error(`Cannot have book shelf in ${currentRoom}`);
        }
        this._room = currentRoom;
    }

    addBook(bookName, bookAuthor, genre) {
        if(this.shelfCondition === 0) {
            this.shelf.shift();
        }
        // if(this.shelfCapacity !== 0) { 
            let book = {
                bookName: bookName,
                bookAuthor: bookAuthor,
                genre: genre
            };
            this.shelf.push(book);

            this.shelf.sort( (a,b) => {
                return a.bookAuthor.localeCompare(b.bookAuthor);
            })
        // }
        return this;
    }
    throwAwayBook(bookName)  {
        this.shelf = this.shelf.filter(book => {
            return book.bookName !== bookName;
        });
        return this;
    }
    showBooks(genre) {
        let books = this.shelf.filter(book => {
            return book.genre === genre;
        });
        let result = "";
        if(books.length > 0) {       
            result = `Results for search "${genre}":\n`;

            books.forEach(b=> {
                result += `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"\n`; 
            });
        }
        return result.trim();
    }
    get shelfCondition() {
        return Math.max(0, this.shelfCapacity - this.shelf.length);
    }
    toString() {
        if(this.shelf.length === 0) {
            return `It's an empty shelf`;
        }
        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        this.shelf.forEach(b=>{
            result += `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}\n`;
        });

        return result.trim();
    }
}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov")
//     .throwAwayBook('Programming for .NET Framework');
// console.log(livingRoom.toString());


let classInstance2 = new BookCollection('Programming', 'livingRoom',1);
classInstance2.addBook("Introduction to Programming with C#", "Svetlin Nakov")
classInstance2.addBook("Introduction to Programming with Java", "Svetlin Nakov")
classInstance2.addBook("Programming for .NET Framework", "Svetlin Nakov");

console.log(classInstance2.toString());