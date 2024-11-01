// Array to hold book objects
let library = [];

// Book constructor function
function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.getSummary = function() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.yearPublished}`;
    };
}

// Function to add a book to the library
function addBook(title, author, yearPublished) {
    const book = new Book(title, author, yearPublished);
    library.push(book);
    console.log(`${title} by ${author} added to the library.`);
}

// Function to view books in the library
function viewBooks() {
    if (library.length === 0) {
        console.log("The library is empty.");
    } else {
        library.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getSummary()}`);
        });
    }
}

// Function to delete a book from the library by title
function deleteBook(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
        console.log(`${title} has been removed from the library.`);
    } else {
        console.log(`${title} not found in the library.`);
    }
}

// Example usage:
addBook("Think Big", "Ben Carson", 1992);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
viewBooks(); // View all books
deleteBook("Think Big"); // Delete a book
viewBooks(); // View remaining books
