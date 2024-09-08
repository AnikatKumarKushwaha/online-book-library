import Book from "../../ui/Book";

/* eslint-disable react/prop-types */
export default function BooksList({ books }) {
  return (
    <>
      <h1 className="mx-10 font-bold text-xl text-yellow-800">BOOK LIST</h1>
      <ul className="grid sm:grid-cols-3 grid-cols-2 justify-items-center py-5 gap-5">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            image={book.image}
            id={book.id}
          />
        ))}
      </ul>
    </>
  );
}
