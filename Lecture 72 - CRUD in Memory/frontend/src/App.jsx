import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const SERVER_BASE_URL = "http://localhost:4000";

  const [books, setBooks] = useState([]);
  const [expandedBookId, setExpandedBookId] = useState(null);
  const [email, setEmail] = useState("");
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState(null);

  // GET all books
  async function getBooks() {
    const res = await axios.get(`${SERVER_BASE_URL}/books`);
    setBooks(res.data.books);
  }

  // GET specific book
  async function getSpecificBook(id) {
    const res = await axios.get(`${SERVER_BASE_URL}/books/${id}`);
    setBook(res.data.book);
  }

  function handleViewClick(bookId) {
    if (expandedBookId !== bookId) {
      setExpandedBookId(bookId);
      return;
    }

    addUserToBook(bookId);
  }

  async function addUserToBook(bookId) {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      const res = await axios.patch(
        `${SERVER_BASE_URL}/books/${bookId}`,
        { email }
      );

      console.log("User added:", res.data);

      setExpandedBookId(null);
      setEmail("");
      getBooks();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h1>Connecting Frontend and Backend</h1>

      <button onClick={getBooks}>Get all Books</button>

      <hr />

      {books.map((book) => (
        <div key={book.id} className="card">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <span>{book.author}</span>
          <span> {book.status}</span>

          {expandedBookId === book.id ? (
            <>
              <br />
              <input
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={() => handleViewClick(book.id)}>
                View
              </button>
              <button>Delete</button>
            </>
          ) : (
            <>
            <button onClick={() => handleViewClick(book.id)}>
              View
            </button>
            <button>Delete</button>
            </>
          )}
        </div>
      ))}

      <hr />

      <input
        placeholder="Enter Book Id"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={() => getSpecificBook(bookId)}>
        Get this book
      </button>

      <br />

      {book ? (
        <div className="card">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <span>{book.author}</span>
          <span> | {book.status}</span>
        </div>
      ) : (
        "Enter any Book ID to view its details here"
      )}
    </>
  );
}

export default App;
