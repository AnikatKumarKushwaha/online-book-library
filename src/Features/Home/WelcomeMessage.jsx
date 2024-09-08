import homeImg from "../../assets/images/Home1.jpg";

export default function WelcomeMessage() {
  return (
    <div
      className="h-96 flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center text-yellow-50 px-3"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(69, 26, 3, 0.6), rgba(69, 26, 3, 0.6)), url(${homeImg})`,
      }}
    >
      <div className=" font-bold md:text-3xl text-center text-xl">
        WELCOME TO YOUR ONLINE LIBRARY
      </div>
      <div className="text-sm md:text-md text-center">
        Your gateway to a world of knowledge. Browse through our vast collection
        of books across various genres and find your next great read!
      </div>
    </div>
  );
}
