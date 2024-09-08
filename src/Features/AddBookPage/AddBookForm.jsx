import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../utils/Slices/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation for empty fields
    if (!title || !author || !description || !category || !image || !rating) {
      setError("Please fill all fields");
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Rating must be between 1 and 5");
      return;
    }
    let id = new Date().getTime();
    setError(""); // Clear the error if validation passes
    dispatch(
      addBook({ id, title, author, description, category, rating, image })
    );
    navigate("/books/all");
  }

  return (
    <form
      className="flex flex-col bg-gradient-to-br rounded-md from-yellow-500 to bg-yellow-700 w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] h-[85%] p-10 gap-5 justify-center shadow-lg text-yellow-800"
      onSubmit={handleSubmit}
    >
      {/********Title Input *******/}
      <div>
        <label className="text-sm">TITLE</label>
        <input
          type="text"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-2 py-1 rounded-md"
        />
      </div>
      {/********Author Input *******/}
      <div>
        <label className="text-sm">AUTHOR</label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-2 py-1 rounded-md"
        />
      </div>
      {/********Description Input *******/}
      <div>
        <label className="text-sm">DESCRIPTION</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-2 py-1 rounded-md"
        />
      </div>
      {/********Category Input *******/}
      <div>
        <label className="text-sm">CATEGORY</label>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-2 py-1 rounded-md"
        />
      </div>
      {/********Rating Input *******/}
      <div>
        <label className="text-sm">RATING</label>
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          className="w-full px-2 py-1 rounded-md"
        />
      </div>
      {/********Image Input *******/}
      <div>
        <label className="text-sm">IMAGE URL</label>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-2 py-1 rounded-md"
        />
      </div>

      {error && <span className="text-red-500">{error}</span>}

      <input
        type="submit"
        value="Submit"
        className="w-full border border-yellow-50 rounded-md py-2 text-yellow-50 hover:bg-yellow-50 hover:text-yellow-800 shadow-lg transition-all duration-300 hover:outline-yellow-800"
      />
    </form>
  );
}
