import AddBookForm from "../Features/AddBookPage/AddBookForm";

export default function AddBookPage() {
  return (
    <div>
      <div className="flex justify-center items-center h-[94vh] bg-yellow-200 sm:mx-5 md:mx-10">
        {/* A form for adding a new book to the library.  */}
        <AddBookForm />
      </div>
    </div>
  );
}
