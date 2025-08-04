// src/components/BookDetails.jsx
const books = [
  { id: 1, title: 'React for Beginners', author: 'John Smith' },
  { id: 2, title: 'Advanced React', author: 'Jane Doe' },
];

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <p><strong>{book.title}</strong> by {book.author}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default BookDetails;
