const potter = {
  title: "Harry Potter and the Philosophers Stone",
  description: "A young boy learns he is a Wizard",
  author: "J.K Rowling",
  pages: 223,
};

console.log(potter.title);
console.log(potter.description);
console.log(potter.author);
console.log(potter.pages);
console.log(
  potter.title +
    " is a book where " +
    potter.description +
    " written by " +
    potter.author +
    " and is " +
    potter.pages +
    " pages long."
);
potter.description = "You're a wizard Harry";
console.log(potter.description);

const books = [
  {
    title: "To Kill a MockingBird",
    description: "Value of protecting innocence",
    author: "Harper Lee",
    pages: 322,
  },
  {
    title: "Moby Dick",
    description: "Self destructive revenge",
    author: "Herman Melville",
    pages: 635,
  },
  {
    title: "1984",
    description: "Revolution against a totalitarian state",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "War and Peace",
    description: "Napoleons invasion of Russia",
    author: "Leo Tolstoy",
    pages: 1225,
  },
  {
    title: "Great Expectations",
    description: "An orphan boy grows up to become Wealthy",
    author: "Charles Dickens",
    pages: 544,
  },
];

function addBook(newTitle, newDescription, newAuthor, newPages) {
  books.push({
    title: newTitle,
    description: newDescription,
    author: newAuthor,
    pages: newPages,
  });
  console.log(books);
  console.log("added " + newTitle);
}
addBook("GooseBumps", "Scary Books", "R.L Stine", 435);
