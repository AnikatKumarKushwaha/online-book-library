import BooksList from "../Features/Home/BooksList";
import PopularBookList from "../Features/Home/PopularBookList";
import WelcomeMessage from "../Features/Home/WelcomeMessage";

export default function Home() {
  return (
    <div className="sm:mx-5 md:mx-10">
      {/******* Landing page with Welcome message *********/}
      <WelcomeMessage />
      {/******* popular book *********/}
      <PopularBookList />
      {/******* List of Categories *********/}
      <BooksList />
    </div>
  );
}
