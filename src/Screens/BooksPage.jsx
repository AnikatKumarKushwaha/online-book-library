import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterBooks from "../Features/Books/FilterBooks";
import { useSelector } from "react-redux";
import BooksPageList from "../Features/Books/BooksPageList";

export default function BooksPage() {
  const { category } = useParams();
  const books = useSelector((store) => store.books);

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [filteredBooks, setFilteredBooks] = useState(books); // For filtered books
  const [searchData, setSearchData] = useState(""); // For search input

  const categoryList = [...new Set(books.map((item) => item.category))];
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = books;

    if (selectedCategory && selectedCategory !== "all") {
      filtered = books.filter((item) => item.category === selectedCategory);
    }

    // search filter
    if (searchData.trim() !== "") {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchData.toLowerCase()) ||
          book.author.toLowerCase().includes(searchData.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
    //Using dynamic rounting to filter category
    navigate(`/books/${selectedCategory}`);
  }, [selectedCategory, searchData, books, navigate]);

  return (
    <div className="sm:mx-5 md:mx-10 bg-yellow-300 h-[93vh] overflow-scroll">
      {/** filtering books based on search input and select **/}
      <FilterBooks
        setSelectedCategory={setSelectedCategory}
        setSearchData={setSearchData}
        categoryList={categoryList}
        category={selectedCategory}
      />
      {/* displaying list of books based on filter */}
      <BooksPageList books={filteredBooks} />
    </div>
  );
}
