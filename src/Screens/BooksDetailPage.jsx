import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BooksDetailPage() {
  let { id, category } = useParams();
  let books = useSelector((store) => store.books);
  console.log(category);

  let book = books.find((item) => item.id == id);

  return (
    <div className=" h-[94vh] bg-yellow-200 sm:mx-5 md:mx-10 text-yellow-800">
      {/**Back to browser Link */}
      <Link className="inline-block mt-5 ml-5 " to={`/books/${category}`}>
        <div className="flex justify-center items-center">
          <IoMdArrowRoundBack />
          <div>Back to browse</div>
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row">
        <div className="m-4 sm:m-10 flex justify-center items-center sm:block">
          <img src={book.image} alt={book.title} className="w-40 h-40" />
        </div>
        {/**Displaying title author rating and description **/}
        <div className="m-4 sm:m-10">
          <h1 className="text-2xl font-semibold mb-5">{book.title}</h1>
          <div className="flex gap-2  items-center">
            <IoPerson />
            <h3 className="">{book.author}</h3>
          </div>
          <div className="flex gap-2  items-center mb-5">
            <MdStarRate />
            <h3>{book.rating}</h3>
          </div>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}
