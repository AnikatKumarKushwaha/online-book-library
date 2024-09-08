import Book from "../../ui/Book";
import { popularBooks } from "../../utils/DummyData";

export default function PopularBookList() {
  return (
    <div className="bg-yellow-200 p-5">
      <h1 className="text-xl font-bold text-yellow-900">POPULAR BOOKS</h1>
      <ul className="grid sm:grid-cols-3 grid-cols-2 justify-items-center py-5 gap-5">
        {popularBooks.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            image={book.image}
            id={book.id}
          />
        ))}
      </ul>
    </div>
  );
}
