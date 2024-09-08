import { useSelector } from "react-redux";
import Book from "../../ui/Book";

export default function BooksList() {
  const booklist = useSelector((store) => store.books);

  const categories = [...new Set(booklist.map((book) => book.category))];

  return (
    <div className="bg-amber-400 p-5">
      {categories.map((category, index) => {
        return (
          <div key={category}>
            <h1 className="text-xl font-bold uppercase">{category}</h1>
            <ul className="grid sm:grid-cols-3 grid-cols-2 justify-items-center py-5 gap-5">
              {booklist
                .filter((books) => books.category == category)
                .map((book) => (
                  <Book
                    key={book.id}
                    title={book.title}
                    image={book.image}
                    id={book.id}
                  />
                ))}
            </ul>
            {index < categories.length - 1 && (
              <hr className="border-yellow-600" />
            )}
          </div>
        );
      })}
    </div>
  );
}
