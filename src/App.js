import "./App.css";
import HeaderMessage from "./components/HeaderMessage";
import FooterMessage from "./components/FooterMessage";
import BookStore from "./components/BookStore";
import Book from "./components/Book";
import UserInfo from "./components/UserInfo";

function App() {
  return <div className="App">
      <div className="container">
      <div className="row">
          <HeaderMessage />
          <UserInfo />
      </div>
      <BookStore callToAction="Browse our books below" />
        <div className="row">
            <Book
                title="to kill a mockingbird"
                author="harper lee"
                pages="281"
                image={process.env.PUBLIC_URL + "/img1.jpg"}
            />
            <Book
                title="the great gatsby"
                author="f. scott fitzgerald"
                pages="218"
                image={process.env.PUBLIC_URL + "/img2.jfif"}
            />
            <Book
                title="the catcher in the rye"
                author="j. d. salinger"
                pages="234"
                image={process.env.PUBLIC_URL + "/img3.png"}
            />
        </div>
      <FooterMessage />
      </div>
  </div>;
}

export default App;
