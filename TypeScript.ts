
interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
}

const books: Book[] = [
    {
        id: 1,
        title: '1984',
        author: 'George Orwell',
        published: new Date("1949-06-08"),
        available: true
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published: new Date("1960-07-11"),
        available: true
    }
]

function addBook(book: Book): void {
    books.push(book);
}

function findBookById(id: number): Book | undefined {
    return books.find(book => book.id === id)
}

function updateBook(book: Book): boolean {
    const i = books.findIndex(b => b.id === book.id);
    if(i < 1){
        return false
    } else{
        books[i] = book;
        return true;
    }  
}

function removeBook(id: number): boolean {
    const i = books.findIndex(book => book.id === id);
    if(i < 1){
        return false;
    } else{
        books.splice(i, 1);
        return true;
    }
}

console.log(books);

console.log("\n\nAddBook")
addBook({
    id: 3,
    title: 'Make Your Bed',
    author: 'William H. McRaven',
    published: new Date("2017-04-04"),
    available: true
});

console.log(books);

console.log("\n\nFindBooks")
console.log(findBookById(2));
console.log(findBookById(9));

console.log("\n\nupdate")
console.log(updateBook({
    id: 3,
    title: 'Make Your Bed',
    author: 'William H. McRaven',
    published: new Date("2017-04-04"),
    available: true
}));


console.log("\n\nremoved")
removeBook(2);
console.log(books);