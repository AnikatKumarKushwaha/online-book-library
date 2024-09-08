import { useNavigate, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Book({ id, image, title }) {
  const { category } = useParams();
  const navigate = useNavigate();

  {
    /* dynamically navigating base on the home & books page because books page has category as well  */
  }
  function handelClick() {
    let path = !category
      ? navigate(`/all/${id}`)
      : navigate(`/${category}/${id}`);

    navigate(path);
  }

  return (
    <li
      key={id}
      className="bg-yellow-900 w-32 h-48 sm:w-48 sm:h-60 gap-4 flex flex-col justify-center items-center rounded-md shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
    >
      <img src={image} alt={title} className="w-28 h-28 sm:w-40 sm:h-40 " />
      {/*Each book with view detail button*/}
      <button
        className="bg-yellow-200 px-4 py-1 rounded-full hover:-translate-y-1 transition-all duration-300"
        onClick={handelClick}
      >
        View Detail
      </button>
    </li>
  );
}
