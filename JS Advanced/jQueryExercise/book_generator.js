// function createBook(selector, bookName, bookAuthor, ISBN) {
//     bookCreator(selector,bookName,bookAuthor,ISBN);
// }


// let createBook = (function bookGenerator() {
//     let id = 1;
let createBook = (function createBook() {
    let id = 1;
    return function(selector, title, author, ISBN) {
 
        let container = $(selector);
        let fragment = document.createDocumentFragment();
 
        let div = $("<div>");
        let pTitle = $("<p>");
        let pAuthor = $("<p>");
        let pIsbn = $("<p>");
        let selectBtn = $("<button>Select</button>");
        let deselectBtn = $("<button>Deselect</button>");
 
        div.attr("id", "book" + id);
        id++;
        pTitle.addClass("title");
        pAuthor.addClass("author");
        pIsbn.addClass("isbn");
 
        pTitle.append(title);
        pAuthor.append(author);
        pIsbn.append(ISBN);
 
 
        pTitle.appendTo(div);
        pAuthor.appendTo(div);
        pIsbn.appendTo(div);
        selectBtn.appendTo(div);
        deselectBtn.appendTo(div);
        div.appendTo(fragment);
 
        container.append(fragment);
       
        selectBtn.on("click", function () {
            div.css("border", "solid blue 2px")
        });
 
        deselectBtn.on("click", function () {
            div.css("border", "none");
        });
    }
}());
    //     return (selector, bookName, bookAuthor, ISBN) => {
    //         let container = $(selector);
    //         let fragment = document.createDocumentFragment();
    //         let div = $("<div>");
    //         div.attr('id','book'+id);
    //         div.attr('style','border: 2px, solid blue;');
    
    //         let parTitle = $('<p>');
    //         parTitle.text(bookName);
    //         parTitle.addClass('title');
    //         parTitle.appendTo(div);
    
    //         let parAuthor = $('<p>');
    //         parAuthor.text(bookAuthor);
    //         parAuthor.addClass('author');
    //         parAuthor.appendTo(div);
    
    //         let parISBN = $('<p>');
    //         parISBN.text( ISBN);
    //         parISBN.addClass('isbn');
    //         parISBN.appendTo(div);
    
    //         let selectButton = $('<button>');
    //         selectButton.text('Select');
    //         selectButton.appendTo(div);
    
    //         selectButton.on('click',function () {
    //             let div = $(this).parent().css('border','2px solid blue');
    //         });
    
    //         let deselectButton = $('<button>');
    //         deselectButton.text('Deselect');
    //         deselectButton.appendTo(div);
    
    //         deselectButton.on('click',function () {
    //             let div = $(this).parent().css('border','');
    //         });
    
    //         div.appendTo(fragment);
    //         container.append(fragment);
    //         id++;
    //     };

    // }());
    // bookCreator(selector, bookName, bookAuthor, ISBN);
// }